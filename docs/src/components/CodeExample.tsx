import React from 'react';
import styled from 'styled-components';
import { Window } from 'rohit-ui';

const ExampleContainer = styled.div`
  margin-bottom: 2rem;
`;

const ExampleTitle = styled.h3`
  font-size: 1.2rem;
  color: var(--win98-navy);
  margin-bottom: 1rem;
`;

const ExampleDescription = styled.p`
  margin-bottom: 1rem;
  line-height: 1.6;
`;

const CodeBlock = styled.pre`
  background-color: var(--win98-white);
  border: 2px solid var(--win98-gray);
  padding: 1rem;
  margin: 1rem 0;
  overflow-x: auto;
  font-family: 'Consolas', monospace;
`;

const ExampleContent = styled.div`
  padding: 1rem;
  background-color: var(--win98-white);
  border: 2px solid var(--win98-gray);
  border-radius: 4px;
`;

interface CodeExampleProps {
  title: string;
  description: string;
  code: string;
  children: React.ReactNode;
}

const CodeExample: React.FC<CodeExampleProps> = ({
  title,
  description,
  code,
  children,
}) => {
  return (
    <ExampleContainer>
      <ExampleTitle>{title}</ExampleTitle>
      <ExampleDescription>{description}</ExampleDescription>
      <Window title="Example">
        <ExampleContent>{children}</ExampleContent>
      </Window>
      <Window title="Code">
        <CodeBlock>{code}</CodeBlock>
      </Window>
    </ExampleContainer>
  );
};

export default CodeExample; 