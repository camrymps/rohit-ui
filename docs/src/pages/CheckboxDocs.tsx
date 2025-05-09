import React from 'react';
import styled from 'styled-components';
import { Checkbox } from 'rohit-ui/components/Checkbox';
import type { RohitUITheme } from 'rohit-ui/theme/theme';
import { CodeBlock } from '../components/CodeBlock';

const DocsContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

const Section = styled.section`
  margin-bottom: 40px;
  scroll-margin-top: 20px;
`;

const Title = styled.h1<{ theme: RohitUITheme }>`
  font-family: ${({ theme }) => theme.fonts.main};
  color: ${({ theme }) => theme.colors.text.primary};
  margin-bottom: 20px;
`;

const Subtitle = styled.h2<{ theme: RohitUITheme }>`
  font-family: ${({ theme }) => theme.fonts.main};
  color: ${({ theme }) => theme.colors.text.primary};
  margin: 30px 0 15px;
  scroll-margin-top: 20px;
`;

const ExampleContainer = styled.div<{ theme: RohitUITheme }>`
  margin: 20px 0;
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.background.main};
  border: 1px solid ${({ theme }) => theme.colors.border.dark};
`;

const ExampleTitle = styled.h3<{ theme: RohitUITheme }>`
  font-family: ${({ theme }) => theme.fonts.main};
  color: ${({ theme }) => theme.colors.text.primary};
  margin-bottom: 15px;
`;

const CheckboxGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 20px;
`;

const PropsTable = styled.table<{ theme: RohitUITheme }>`
  width: 100%;
  border-collapse: collapse;
  margin: 20px 0;
  font-family: ${({ theme }) => theme.fonts.main};
`;

const PropsTableHeader = styled.th<{ theme: RohitUITheme }>`
  text-align: left;
  padding: 8px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border.dark};
  color: ${({ theme }) => theme.colors.text.primary};
`;

const PropsTableCell = styled.td<{ theme: RohitUITheme }>`
  padding: 8px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border.dark};
  color: ${({ theme }) => theme.colors.text.primary};
`;

const CheckboxDocs: React.FC = () => {
  return (
    <DocsContainer>
      <Title>Checkbox Component</Title>
      <p>
        The Checkbox component is a Windows 98-style checkbox input that supports various states and labels.
      </p>

      <Section id="basic">
        <Subtitle>Basic Usage</Subtitle>
        <ExampleContainer>
          <ExampleTitle>Basic Checkbox</ExampleTitle>
          <CheckboxGroup>
            <Checkbox label="Unchecked checkbox" />
            <Checkbox label="Checked checkbox" checked />
            <Checkbox label="Disabled checkbox" disabled />
            <Checkbox label="Disabled checked checkbox" checked disabled />
          </CheckboxGroup>
          <CodeBlock>
            {`<Checkbox label="Unchecked checkbox" />
<Checkbox label="Checked checkbox" checked />
<Checkbox label="Disabled checkbox" disabled />
<Checkbox label="Disabled checked checkbox" checked disabled />`}
          </CodeBlock>
        </ExampleContainer>
      </Section>

      <Section id="controlled">
        <Subtitle>Controlled Checkbox</Subtitle>
        <ExampleContainer>
          <ExampleTitle>Controlled Checkbox</ExampleTitle>
          <CheckboxGroup>
            <Checkbox
              label="Click me to toggle"
              checked={false}
              onChange={(e) => console.log('Checkbox toggled:', e.target.checked)}
            />
          </CheckboxGroup>
          <CodeBlock>
            {`<Checkbox
  label="Click me to toggle"
  checked={checked}
  onChange={(e) => setChecked(e.target.checked)}
/>`}
          </CodeBlock>
        </ExampleContainer>
      </Section>

      <Section id="props">
        <Subtitle>Props</Subtitle>
        <PropsTable>
          <thead>
            <tr>
              <PropsTableHeader>Prop</PropsTableHeader>
              <PropsTableHeader>Type</PropsTableHeader>
              <PropsTableHeader>Default</PropsTableHeader>
              <PropsTableHeader>Description</PropsTableHeader>
            </tr>
          </thead>
          <tbody>
            <tr>
              <PropsTableCell>checked</PropsTableCell>
              <PropsTableCell>boolean</PropsTableCell>
              <PropsTableCell>false</PropsTableCell>
              <PropsTableCell>Whether the checkbox is checked</PropsTableCell>
            </tr>
            <tr>
              <PropsTableCell>disabled</PropsTableCell>
              <PropsTableCell>boolean</PropsTableCell>
              <PropsTableCell>false</PropsTableCell>
              <PropsTableCell>Whether the checkbox is disabled</PropsTableCell>
            </tr>
            <tr>
              <PropsTableCell>label</PropsTableCell>
              <PropsTableCell>string</PropsTableCell>
              <PropsTableCell>undefined</PropsTableCell>
              <PropsTableCell>The label text for the checkbox</PropsTableCell>
            </tr>
            <tr>
              <PropsTableCell>onChange</PropsTableCell>
              <PropsTableCell>{`(event: React.ChangeEvent<HTMLInputElement>) => void`}</PropsTableCell>
              <PropsTableCell>undefined</PropsTableCell>
              <PropsTableCell>Function to call when the checkbox is toggled</PropsTableCell>
            </tr>
          </tbody>
        </PropsTable>
      </Section>
    </DocsContainer>
  );
};

export default CheckboxDocs; 