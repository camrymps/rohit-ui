import React from 'react';
import styled from 'styled-components';
import type { RohitUITheme } from 'rohit-ui/theme/theme';

const CodeContainer = styled.pre<{ theme: RohitUITheme }>`
  background-color: ${({ theme }) => theme.colors.background.main};
  border: 1px solid ${({ theme }) => theme.colors.border.dark};
  padding: 16px;
  margin: 0;
  overflow-x: auto;
  font-family: ${({ theme }) => theme.fonts.monospace};
  font-size: 14px;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.text.primary};
`;

interface CodeBlockProps {
  children: string;
}

export const CodeBlock: React.FC<CodeBlockProps> = ({ children }) => {
  return (
    <CodeContainer>
      <code>{children}</code>
    </CodeContainer>
  );
}; 