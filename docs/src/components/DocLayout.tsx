import React from 'react';
import styled from 'styled-components';
import { Window } from 'rohit-ui';

const DocContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const DocHeader = styled.div`
  margin-bottom: 2rem;
`;

const DocTitle = styled.h1`
  font-size: 2rem;
  color: var(--win98-navy);
  margin-bottom: 0.5rem;
`;

const DocDescription = styled.p`
  color: var(--win98-black);
  font-size: 1.1rem;
  line-height: 1.5;
`;

const Section = styled.section`
  margin-bottom: 3rem;
`;

const SectionTitle = styled.h2`
  font-size: 1.5rem;
  color: var(--win98-navy);
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid var(--win98-gray);
`;

const Example = styled.div`
  margin-bottom: 2rem;
  padding: 1rem;
  background-color: var(--win98-white);
  border: 2px solid var(--win98-gray);
  border-radius: 4px;
`;

const ExampleHeader = styled.div`
  margin-bottom: 1rem;
`;

const ExampleTitle = styled.h3`
  font-size: 1.2rem;
  color: var(--win98-navy);
  margin-bottom: 0.5rem;
`;

const ExampleContent = styled.div`
  margin-bottom: 1rem;
`;

const ExampleCode = styled.div`
  background-color: var(--win98-silver);
  padding: 1rem;
  border-radius: 4px;
  overflow-x: auto;
`;

const PropsTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 1rem;
`;

const PropsTableHeader = styled.th`
  text-align: left;
  padding: 0.5rem;
  background-color: var(--win98-silver);
  border: 1px solid var(--win98-gray);
`;

const PropsTableCell = styled.td`
  padding: 0.5rem;
  border: 1px solid var(--win98-gray);
`;

interface DocLayoutProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

export const DocLayout: React.FC<DocLayoutProps> = ({ title, description, children }) => {
  return (
    <DocContainer>
      <DocHeader>
        <DocTitle>{title}</DocTitle>
        <DocDescription>{description}</DocDescription>
      </DocHeader>

      <Window title={title}>
        {children}
      </Window>
    </DocContainer>
  );
};

export {
  Section,
  SectionTitle,
  Example,
  ExampleHeader,
  ExampleTitle,
  ExampleContent,
  ExampleCode,
  PropsTable,
  PropsTableHeader,
  PropsTableCell,
}; 