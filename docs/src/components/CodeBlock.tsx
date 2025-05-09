import React from 'react';
import styled from 'styled-components';
import type { RohitUITheme } from 'rohit-ui/theme/theme';

const CodeContainer = styled.pre<{ theme: RohitUITheme }>`
  background-color: #1e1e1e;
  border: 2px solid ${({ theme }) => theme.colors.border.dark};
  padding: 16px;
  margin: 0;
  overflow-x: auto;
  font-family: ${({ theme }) => theme.fonts.monospace};
  font-size: 14px;
  line-height: 1.5;
  color: #e0e0e0;
  box-shadow: ${({ theme }) => theme.shadows.outset};

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
  color: #6A9955;
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

interface CodeBlockProps {
  children: string;
  language?: 'python' | 'javascript' | 'typescript' | 'html' | 'css' | 'bash';
}

const highlightCode = (code: string, language?: string) => {
  const lines = code.split('\n');
  return lines.map((line, index) => {
    const tokens = line.split(/(\s+|[(){}[\],;:])/);
    return (
      <div key={index}>
        <LineNumber>{index + 1}</LineNumber>
        {tokens.map((token, tokenIndex) => {
          if (token.trim() === '') return token;

          // Common patterns across languages
          if (token.startsWith('//') || token.startsWith('/*') || token.startsWith('#')) {
            return <CommentSpan key={tokenIndex}>{token}</CommentSpan>;
          }
          if (token.match(/^["'`].*["'`]$/)) {
            return <StringSpan key={tokenIndex}>{token}</StringSpan>;
          }
          if (token.match(/^\d+$/)) {
            return <NumberSpan key={tokenIndex}>{token}</NumberSpan>;
          }
          if (['+', '-', '*', '/', '=', '==', '===', '!=', '!==', '>', '<', '>=', '<=', '&&', '||', '|', '&', '^', '~', '<<', '>>', '>>>', '+=', '-=', '*=', '/=', '%=', '&=', '|=', '^=', '<<=', '>>=', '>>>=', '++', '--', '?', ':', '=>'].includes(token)) {
            return <OperatorSpan key={tokenIndex}>{token}</OperatorSpan>;
          }

          // Language-specific patterns
          if (language === 'typescript' || language === 'javascript') {
            if (['const', 'let', 'var', 'function', 'return', 'if', 'else', 'for', 'while', 'import', 'export', 'from', 'type', 'interface', 'class', 'extends', 'implements', 'async', 'await', 'try', 'catch', 'finally', 'throw', 'new', 'this', 'super', 'static', 'private', 'public', 'protected', 'readonly', 'abstract', 'enum', 'namespace', 'module', 'declare', 'any', 'void', 'never', 'unknown', 'boolean', 'string', 'number', 'symbol', 'object', 'undefined', 'null', 'true', 'false'].includes(token)) {
              return <KeywordSpan key={tokenIndex}>{token}</KeywordSpan>;
            }
            if (token.match(/^[A-Z][a-zA-Z]*$/)) {
              return <ClassSpan key={tokenIndex}>{token}</ClassSpan>;
            }
            if (token.match(/^[a-z][a-zA-Z]*$/) && line.includes('(')) {
              return <FunctionSpan key={tokenIndex}>{token}</FunctionSpan>;
            }
            if (token.match(/^[a-z][a-zA-Z]*$/)) {
              return <VariableSpan key={tokenIndex}>{token}</VariableSpan>;
            }
          } else if (language === 'python') {
            if (['def', 'class', 'if', 'else', 'elif', 'for', 'while', 'import', 'from', 'return', 'True', 'False', 'None', 'async', 'await', 'try', 'except', 'finally', 'raise', 'with', 'as', 'pass', 'break', 'continue', 'global', 'nonlocal', 'lambda', 'yield', 'del', 'assert', 'in', 'is', 'not', 'and', 'or'].includes(token)) {
              return <KeywordSpan key={tokenIndex}>{token}</KeywordSpan>;
            }
            if (token.match(/^[A-Z][a-zA-Z]*$/)) {
              return <ClassSpan key={tokenIndex}>{token}</ClassSpan>;
            }
            if (token.match(/^[a-z][a-zA-Z]*$/) && line.includes('(')) {
              return <FunctionSpan key={tokenIndex}>{token}</FunctionSpan>;
            }
            if (token.match(/^[a-z][a-zA-Z]*$/)) {
              return <VariableSpan key={tokenIndex}>{token}</VariableSpan>;
            }
          } else if (language === 'bash') {
            if (['#', 'if', 'then', 'else', 'fi', 'for', 'do', 'done', 'while', 'until', 'case', 'esac', 'function', 'in', 'select', 'continue', 'break', 'return', 'exit', 'set', 'unset', 'export', 'readonly', 'local', 'declare', 'typeset', 'alias', 'unalias', 'source', '.', 'exec', 'eval', 'trap', 'read', 'echo', 'printf', 'test', '[', ']', '[[', ']]', '((', '))', 'let', 'shift', 'getopts', 'getopt', 'command', 'builtin', 'enable', 'disable', 'type', 'hash', 'help', 'history', 'jobs', 'kill', 'wait', 'suspend', 'logout', 'exit', 'return', 'break', 'continue', 'shift', 'set', 'unset', 'export', 'readonly', 'local', 'declare', 'typeset', 'alias', 'unalias', 'source', '.', 'exec', 'eval', 'trap', 'read', 'echo', 'printf', 'test', '[', ']', '[[', ']]', '((', '))', 'let', 'shift', 'getopts', 'getopt', 'command', 'builtin', 'enable', 'disable', 'type', 'hash', 'help', 'history', 'jobs', 'kill', 'wait', 'suspend', 'logout'].includes(token)) {
              return <KeywordSpan key={tokenIndex}>{token}</KeywordSpan>;
            }
            if (token.startsWith('$')) {
              return <VariableSpan key={tokenIndex}>{token}</VariableSpan>;
            }
            if (token.match(/^[a-z][a-zA-Z]*$/) && line.includes('(')) {
              return <FunctionSpan key={tokenIndex}>{token}</FunctionSpan>;
            }
          }

          return token;
        })}
      </div>
    );
  });
};

export const CodeBlock: React.FC<CodeBlockProps> = ({ children, language }) => {
  return (
    <CodeContainer>
      <Code>{highlightCode(children, language)}</Code>
    </CodeContainer>
  );
}; 