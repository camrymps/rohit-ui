import React, { useState, useEffect } from 'react';
import type { ReactElement } from 'react';
import styled from 'styled-components';

export interface CodeBlockProps {
  code: string;
  language?: 'python' | 'javascript' | 'typescript' | 'html' | 'css';
  title?: string;
  rohitMode?: boolean; // Easter egg mode
  complicateCode?: boolean; // Whether to make Python code unnecessarily complicated
}

const CodeBlockContainer = styled.div`
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.border.dark};
  background-color: ${({ theme }) => theme.colors.background.main};
  display: flex;
  flex-direction: column;
`;

const CodeBlockHeader = styled.div`
  height: 25px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  display: flex;
  align-items: center;
  padding: 0 8px;
  font-family: ${({ theme }) => theme.fonts.main};
  font-weight: bold;
  font-size: 12px;
  user-select: none;
  justify-content: space-between;
`;

const CodeBlockTitle = styled.div`
  display: flex;
  align-items: center;
`;

const CodeBlockControls = styled.div`
  display: flex;
  gap: 8px;
`;

const CodeBlockButton = styled.button`
  width: 16px;
  height: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.background.main};
  border: none;
  box-shadow: ${({ theme }) => theme.shadows.outset};
  cursor: pointer;
  font-family: ${({ theme }) => theme.fonts.main};
  font-size: 10px;
  padding: 0;
  
  &:active {
    box-shadow: ${({ theme }) => theme.shadows.inset};
  }
`;

const Pre = styled.pre`
  margin: 0;
  padding: 16px;
  overflow: auto;
  font-family: ${({ theme }) => theme.fonts.monospace};
  font-size: 14px;
  line-height: 1.5;
  background-color: #1e1e1e;
  color: #d4d4d4;
  max-height: 400px;
`;

const Code = styled.code`
  font-family: inherit;
`;

const LineNumber = styled.span`
  display: inline-block;
  width: 2em;
  padding-right: 1em;
  text-align: right;
  color: #606366;
  user-select: none;
`;

const CommentSpan = styled.span`
  color: #6a9955;
`;

const KeywordSpan = styled.span`
  color: #569cd6;
`;

const StringSpan = styled.span`
  color: #ce9178;
`;

const FunctionSpan = styled.span`
  color: #dcdcaa;
`;

const VariableSpan = styled.span`
  color: #9cdcfe;
`;

const RohitComment = styled.span`
  color: #ff00ff;
  font-style: italic;
`;

// Function to make Python code unnecessarily complicated
const complicatePythonCode = (code: string): string => {
  // Split the code into lines
  const lines = code.split('\n');
  const complicatedCode: string[] = [];
  
  // Add imports
  complicatedCode.push('import functools');
  complicatedCode.push('import itertools');
  complicatedCode.push('import collections');
  complicatedCode.push('import operator');
  complicatedCode.push('from typing import Any, Callable, Dict, List, Optional, Tuple, Union');
  complicatedCode.push('');
  
  // Add a decorator for no reason
  complicatedCode.push('def rohit_decorator(func: Callable) -> Callable:');
  complicatedCode.push('    """A decorator that does absolutely nothing but complicate the code."""');
  complicatedCode.push('    @functools.wraps(func)');
  complicatedCode.push('    def wrapper(*args: Any, **kwargs: Any) -> Any:');
  complicatedCode.push('        # Unnecessary lambda function');
  complicatedCode.push('        process = lambda x: x');
  complicatedCode.push('        result = func(*args, **kwargs)');
  complicatedCode.push('        return process(result)');
  complicatedCode.push('    return wrapper');
  complicatedCode.push('');
  
  // Add a useless class
  complicatedCode.push('class RohitCodeManager:');
  complicatedCode.push('    """A completely unnecessary class to manage code execution."""');
  complicatedCode.push('    def __init__(self) -> None:');
  complicatedCode.push('        self.state: Dict[str, Any] = {}');
  complicatedCode.push('        self.history: List[str] = []');
  complicatedCode.push('');
  complicatedCode.push('    def register(self, name: str, value: Any) -> None:');
  complicatedCode.push('        """Register a value with a name."""');
  complicatedCode.push('        self.state[name] = value');
  complicatedCode.push('        self.history.append(f"Registered {name}")');
  complicatedCode.push('');
  complicatedCode.push('    def execute(self, func: Callable, *args: Any, **kwargs: Any) -> Any:');
  complicatedCode.push('        """Execute a function with the given arguments."""');
  complicatedCode.push('        self.history.append(f"Executing {func.__name__}")');
  complicatedCode.push('        return func(*args, **kwargs)');
  complicatedCode.push('');
  complicatedCode.push('# Create an instance of the manager');
  complicatedCode.push('_manager = RohitCodeManager()');
  complicatedCode.push('');
  
  // Process the original code
  let indentLevel = 0;
  
  for (const line of lines) {
    // Skip empty lines
    if (line.trim() === '') {
      complicatedCode.push('');
      continue;
    }
    
    // Calculate indentation
    const match = line.match(/^(\s*)/);
    const indent = match ? match[1].length : 0;
    indentLevel = Math.floor(indent / 4);
    
    // Check if line defines a function
    if (line.trim().startsWith('def ')) {
      const funcName = line.trim().match(/def\s+([a-zA-Z0-9_]+)\s*\(/)?.[1];
      if (funcName) {
        // Add the decorator
        complicatedCode.push('    '.repeat(indentLevel) + '@rohit_decorator');
        complicatedCode.push(line);
      }
    }
    // If it's a simple assignment
    else if (line.includes('=') && !line.trim().startsWith('#')) {
      const parts = line.split('=');
      if (parts.length >= 2) {
        const varName = parts[0].trim();
        const value = parts.slice(1).join('=').trim();
        
        // Complicate the assignment
        complicatedCode.push('    '.repeat(indentLevel) + `# Store ${varName} in the manager`);
        complicatedCode.push('    '.repeat(indentLevel) + `${varName} = _manager.execute(lambda: ${value})`);
        complicatedCode.push('    '.repeat(indentLevel) + `_manager.register("${varName}", ${varName})`);
      } else {
        complicatedCode.push(line);
      }
    }
    // If it's a print statement
    else if (line.includes('print(')) {
      const printContent = line.match(/print\s*\((.*)\)/)?.[1] || '';
      complicatedCode.push('    '.repeat(indentLevel) + `# Use a higher-order function to print`);
      complicatedCode.push('    '.repeat(indentLevel) + `functools.reduce(lambda _, f: f(), [lambda: None, lambda: print(${printContent})])`);
    }
    // If it's a for loop
    else if (line.trim().startsWith('for ')) {
      const forMatch = line.match(/for\s+(.*)\s+in\s+(.*?):/);
      if (forMatch) {
        const iterator = forMatch[1];
        const iterable = forMatch[2];
        complicatedCode.push('    '.repeat(indentLevel) + `# Unnecessarily complicated for loop`);
        complicatedCode.push('    '.repeat(indentLevel) + `for ${iterator} in itertools.chain.from_iterable([${iterable}]):`);
      } else {
        complicatedCode.push(line);
      }
    }
    // If it's an if statement
    else if (line.trim().startsWith('if ')) {
      const condition = line.trim().replace(/^if\s+/, '').replace(/:$/, '');
      complicatedCode.push('    '.repeat(indentLevel) + `# Overly complex condition check`);
      complicatedCode.push('    '.repeat(indentLevel) + `if operator.truth(${condition}):`);
    }
    // Add Rohit comments to random lines
    else if (Math.random() < 0.3) {
      const rohitComments = [
        "# Rohit would approve this line",
        "# This could be optimized, but Rohit likes it this way",
        "# Rohit's favorite part of the code",
        "# As Rohit always says, 'more code = better code'",
        "# Rohit insists on this implementation"
      ];
      const comment = rohitComments[Math.floor(Math.random() * rohitComments.length)];
      complicatedCode.push(line + '  ' + comment);
    }
    else {
      complicatedCode.push(line);
    }
  }
  
  return complicatedCode.join('\n');
};

// Simple syntax highlighting for Python
const highlightPython = (code: string, rohitMode: boolean): ReactElement[] => {
  const lines = code.split('\n');
  
  return lines.map((line, i) => {
    // Store processed segments with their types and preserve whitespace
    const processedSegments: Array<{type: string | null; text: string}> = [];
    
    // First pass: Preserve all whitespaces by tokenizing the line
    const tokens: string[] = [];
    let currentToken = '';
    let currentWhitespace = '';
    
    // Helper to add current token and whitespace to tokens array
    const addCurrentToken = () => {
      if (currentToken) {
        if (currentWhitespace) {
          tokens.push(currentWhitespace);
          currentWhitespace = '';
        }
        tokens.push(currentToken);
        currentToken = '';
      }
    };
    
    // Tokenize the line character by character
    for (let j = 0; j < line.length; j++) {
      const char = line[j];
      
      if (/\s/.test(char)) {
        // If whitespace, add current token and collect whitespace
        addCurrentToken();
        currentWhitespace += char;
      } else if (/[a-zA-Z0-9_]/.test(char)) {
        // If alphanumeric or underscore, add to current token
        if (currentWhitespace) {
          tokens.push(currentWhitespace);
          currentWhitespace = '';
        }
        currentToken += char;
      } else {
        // If special character, add current token and add special char as separate token
        addCurrentToken();
        if (currentWhitespace) {
          tokens.push(currentWhitespace);
          currentWhitespace = '';
        }
        tokens.push(char);
      }
    }
    
    // Add any remaining token or whitespace
    addCurrentToken();
    if (currentWhitespace) {
      tokens.push(currentWhitespace);
    }
    
    // Process tokens and apply syntax highlighting
    for (let j = 0; j < tokens.length; j++) {
      const token = tokens[j];
      
      // Skip empty tokens
      if (!token) continue;
      
      // Check if token is whitespace
      if (/^\s+$/.test(token)) {
        processedSegments.push({type: null, text: token});
        continue;
      }
      
      // Check if token is a keyword
      if (/^(import|from|def|class|if|elif|else|for|while|return|in|as|with|try|except|finally|raise|assert|and|or|not|is|lambda|None|True|False)$/.test(token)) {
        processedSegments.push({type: 'keyword', text: token});
        continue;
      }
      
      // Check if token is the start of a string
      if ((token === '"' || token === "'") && j < tokens.length - 1) {
        // Simple case: look for matching quote that's not escaped
        let stringContent = token;
        let k = j + 1;
        let foundEnd = false;
        
        while (k < tokens.length) {
          stringContent += tokens[k];
          
          // Check if this token contains the closing quote
          if (tokens[k].endsWith(token) && !tokens[k].endsWith('\\' + token)) {
            foundEnd = true;
            break;
          }
          
          k++;
        }
        
        if (foundEnd) {
          processedSegments.push({type: 'string', text: stringContent});
          j = k; // Skip ahead
          continue;
        }
      }
      
      // Check if token is a function name (followed by open parenthesis)
      if (j < tokens.length - 1 && tokens[j+1] === '(') {
        processedSegments.push({type: 'function', text: token});
        continue;
      }
      
      // Check if token is a variable (followed by equals sign)
      if (j < tokens.length - 2 && tokens[j+1].trim() === '' && tokens[j+2] === '=') {
        processedSegments.push({type: 'variable', text: token});
        continue;
      }
      
      // Check if token is a comment
      if (token === '#') {
        // Combine all remaining tokens as part of the comment
        const commentText = tokens.slice(j).join('');
        processedSegments.push({type: 'comment', text: commentText});
        break; // Comments extend to the end of the line
      }
      
      // Default: just add as plain text
      processedSegments.push({type: null, text: token});
    }
    
    // Add Rohit comments randomly if rohitMode is enabled
    if (rohitMode && Math.random() < 0.1 && !line.includes('#')) {
      const rohitComments = [
        "# Rohit thinks this is elegant",
        "# Rohit would write this differently",
        "# Rohit's code review: needs more complexity",
        "# Rohit approves this line",
        "# Rohit suggests a decorator here"
      ];
      processedSegments.push({
        type: 'rohit', 
        text: rohitComments[Math.floor(Math.random() * rohitComments.length)]
      });
    }
    
    // Convert segments to React elements
    const parts: ReactElement[] = processedSegments.map((segment, j) => {
      if (segment.type === 'keyword') {
        return <KeywordSpan key={j}>{segment.text}</KeywordSpan>;
      } else if (segment.type === 'string') {
        return <StringSpan key={j}>{segment.text}</StringSpan>;
      } else if (segment.type === 'function') {
        return <FunctionSpan key={j}>{segment.text}</FunctionSpan>;
      } else if (segment.type === 'variable') {
        return <VariableSpan key={j}>{segment.text}</VariableSpan>;
      } else if (segment.type === 'comment') {
        return <CommentSpan key={j}>{segment.text}</CommentSpan>;
      } else if (segment.type === 'rohit') {
        return <RohitComment key={j}>{segment.text}</RohitComment>;
      } else {
        return <span key={j}>{segment.text}</span>;
      }
    });
    
    return (
      <div key={i}>
        <LineNumber>{i + 1}</LineNumber>
        {parts}
      </div>
    );
  });
};

export const CodeBlock: React.FC<CodeBlockProps> = ({
  code,
  language = 'python',
  title = 'Code',
  rohitMode = false,
  complicateCode = false,
}) => {
  const [displayedCode, setDisplayedCode] = useState(code);
  const [isComplicated, setIsComplicated] = useState(complicateCode);

  // Update displayed code when isComplicated changes
  useEffect(() => {
    if (language === 'python' && isComplicated) {
      setDisplayedCode(complicatePythonCode(code));
    } else {
      setDisplayedCode(code);
    }
  }, [code, language, isComplicated]);

  // Toggle between normal and "Rohit-fied" code
  const toggleRohitMode = () => {
    setIsComplicated(prev => !prev);
  };

  return (
    <CodeBlockContainer>
      <CodeBlockHeader>
        <CodeBlockTitle>
          {title} - {language.toUpperCase()}
          {isComplicated && language === 'python' && ' (Rohit-fied)'}
        </CodeBlockTitle>
        <CodeBlockControls>
          <CodeBlockButton 
            onClick={toggleRohitMode}
            title={isComplicated ? "Show normal code" : "Show Rohit-fied code"}
            className="code-block-toggle-button"
          >
            {isComplicated ? '🔄' : '🔀'}
          </CodeBlockButton>
        </CodeBlockControls>
      </CodeBlockHeader>
      <Pre>
        <Code>
          {language === 'python' && highlightPython(displayedCode, rohitMode)}
        </Code>
      </Pre>
    </CodeBlockContainer>
  );
}; 