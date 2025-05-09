import React from 'react';
import styled from 'styled-components';
import { Window } from 'rohit-ui';
import CodeExample from './CodeExample';
import PropsTable from './PropsTable';

const DocContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: var(--win98-navy);
  margin-bottom: 1.5rem;
`;

const Description = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;
  margin-bottom: 2rem;
`;

const Section = styled.section`
  margin-bottom: 3rem;
`;

const SectionTitle = styled.h2`
  font-size: 1.8rem;
  color: var(--win98-navy);
  margin: 2rem 0 1rem;
`;

interface Example {
  title: string;
  description: string;
  code: string;
  children: React.ReactNode;
}

interface Prop {
  name: string;
  type: string;
  required: boolean;
  default?: string;
  description: string;
}

interface DocPageProps {
  title: string;
  description: string;
  examples: Example[];
  props: Prop[];
}

const DocPage: React.FC<DocPageProps> = ({
  title,
  description,
  examples,
  props,
}) => {
  return (
    <DocContainer>
      <Title>{title}</Title>
      <Description>{description}</Description>

      <Section>
        <SectionTitle>Examples</SectionTitle>
        {examples.map((example, index) => (
          <CodeExample
            key={index}
            title={example.title}
            description={example.description}
            code={example.code}
          >
            {example.children}
          </CodeExample>
        ))}
      </Section>

      <Section>
        <SectionTitle>Props</SectionTitle>
        <PropsTable props={props} />
      </Section>
    </DocContainer>
  );
};

export default DocPage; 