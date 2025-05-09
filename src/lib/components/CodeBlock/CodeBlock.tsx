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
  border: 2px solid ${({ theme }) => theme.colors.border.dark};
  background-color: #1e1e1e;
  display: flex;
  flex-direction: column;
  box-shadow: ${({ theme }) => theme.shadows.outset};
  margin: 1rem 0;
`;

const CodeBlockHeader = styled.div`
  height: 28px;
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
  border-bottom: 2px solid ${({ theme }) => theme.colors.border.dark};
`;

const CodeBlockTitle = styled.div`
  display: flex;
  align-items: center;
  text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.5);
`;

const CodeBlockControls = styled.div`
  display: flex;
  gap: 8px;
`;

const CodeBlockButton = styled.button`
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.background.main};
  border: 2px solid ${({ theme }) => theme.colors.border.dark};
  box-shadow: ${({ theme }) => theme.shadows.outset};
  cursor: pointer;
  font-family: ${({ theme }) => theme.fonts.main};
  font-size: 12px;
  padding: 0;
  
  &:active {
    box-shadow: ${({ theme }) => theme.shadows.inset};
  }

  &:hover {
    filter: brightness(1.1);
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

  &::-webkit-scrollbar {
    width: 16px;
    height: 16px;
  }

  &::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.background.main};
    border: 1px solid ${({ theme }) => theme.colors.border.dark};
  }

  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.background.main};
    border: 1px solid ${({ theme }) => theme.colors.border.dark};
    box-shadow: inset -1px -1px 0 ${({ theme }) => theme.colors.border.light},
                inset 1px 1px 0 ${({ theme }) => theme.colors.border.dark};
  }

  &::-webkit-scrollbar-corner {
    background: ${({ theme }) => theme.colors.background.main};
  }
`;

const Code = styled.code`
  font-family: inherit;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
`;

const LineNumber = styled.span`
  display: inline-block;
  width: 3em;
  padding-right: 1em;
  text-align: right;
  color: #858585;
  user-select: none;
  border-right: 1px solid #404040;
  margin-right: 1em;
`;

const CommentSpan = styled.span`
  color: #6A9955;
  font-style: italic;
`;

const KeywordSpan = styled.span`
  color: #569CD6;
  font-weight: bold;
`;

const StringSpan = styled.span`
  color: #CE9178;
`;

const FunctionSpan = styled.span`
  color: #DCDCAA;
`;

const VariableSpan = styled.span`
  color: #9CDCFE;
`;

const NumberSpan = styled.span`
  color: #B5CEA8;
`;

const OperatorSpan = styled.span`
  color: #D4D4D4;
`;

const ClassSpan = styled.span`
  color: #4EC9B0;
`;

const RohitComment = styled.span`
  color: #FF69B4;
  font-style: italic;
  text-shadow: 0 0 5px rgba(255, 105, 180, 0.3);
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
    const processedSegments: Array<{type: string | null; text: string}> = [];
    let currentToken = '';
    let currentWhitespace = '';
    
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
    
    const tokens: string[] = [];
    
    // Tokenize the line character by character
    for (let j = 0; j < line.length; j++) {
      const char = line[j];
      
      if (/\s/.test(char)) {
        addCurrentToken();
        currentWhitespace += char;
      } else if (/[a-zA-Z0-9_]/.test(char)) {
        if (currentWhitespace) {
          tokens.push(currentWhitespace);
          currentWhitespace = '';
        }
        currentToken += char;
      } else {
        addCurrentToken();
        if (currentWhitespace) {
          tokens.push(currentWhitespace);
          currentWhitespace = '';
        }
        tokens.push(char);
      }
    }
    
    addCurrentToken();
    if (currentWhitespace) {
      tokens.push(currentWhitespace);
    }
    
    // Process tokens and apply syntax highlighting
    for (let j = 0; j < tokens.length; j++) {
      const token = tokens[j];
      
      if (!token) continue;
      
      if (/^\s+$/.test(token)) {
        processedSegments.push({type: null, text: token});
        continue;
      }
      
      // Keywords
      if (/^(import|from|def|class|if|elif|else|for|while|return|in|as|with|try|except|finally|raise|assert|and|or|not|is|lambda|None|True|False)$/.test(token)) {
        processedSegments.push({type: 'keyword', text: token});
        continue;
      }
      
      // Numbers
      if (/^-?\d*\.?\d+$/.test(token)) {
        processedSegments.push({type: 'number', text: token});
        continue;
      }
      
      // Operators
      if (/^[+\-*/%=<>!&|^~]+$/.test(token)) {
        processedSegments.push({type: 'operator', text: token});
        continue;
      }
      
      // Class names (capitalized words)
      if (/^[A-Z][a-zA-Z0-9]*$/.test(token)) {
        processedSegments.push({type: 'class', text: token});
        continue;
      }
      
      // Strings
      if ((token === '"' || token === "'") && j < tokens.length - 1) {
        let stringContent = token;
        let k = j + 1;
        let foundEnd = false;
        
        while (k < tokens.length) {
          stringContent += tokens[k];
          if (tokens[k].endsWith(token) && !tokens[k].endsWith('\\' + token)) {
            foundEnd = true;
            break;
          }
          k++;
        }
        
        if (foundEnd) {
          processedSegments.push({type: 'string', text: stringContent});
          j = k;
          continue;
        }
      }
      
      // Function names
      if (j < tokens.length - 1 && tokens[j+1] === '(') {
        processedSegments.push({type: 'function', text: token});
        continue;
      }
      
      // Variables
      if (j < tokens.length - 2 && tokens[j+1].trim() === '' && tokens[j+2] === '=') {
        processedSegments.push({type: 'variable', text: token});
        continue;
      }
      
      // Comments
      if (token === '#') {
        const commentText = tokens.slice(j).join('');
        processedSegments.push({type: 'comment', text: commentText});
        break;
      }
      
      processedSegments.push({type: null, text: token});
    }
    
    // Add Rohit comments
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
      switch (segment.type) {
        case 'keyword':
          return <KeywordSpan key={j}>{segment.text}</KeywordSpan>;
        case 'string':
          return <StringSpan key={j}>{segment.text}</StringSpan>;
        case 'function':
          return <FunctionSpan key={j}>{segment.text}</FunctionSpan>;
        case 'variable':
          return <VariableSpan key={j}>{segment.text}</VariableSpan>;
        case 'comment':
          return <CommentSpan key={j}>{segment.text}</CommentSpan>;
        case 'rohit':
          return <RohitComment key={j}>{segment.text}</RohitComment>;
        case 'number':
          return <NumberSpan key={j}>{segment.text}</NumberSpan>;
        case 'operator':
          return <OperatorSpan key={j}>{segment.text}</OperatorSpan>;
        case 'class':
          return <ClassSpan key={j}>{segment.text}</ClassSpan>;
        default:
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