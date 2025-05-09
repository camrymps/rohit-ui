import React, { useState } from 'react';
import styled from 'styled-components';
import { Radio } from 'rohit-ui/components/Radio';
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

const RadioGroup = styled.div`
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

const RadioDocs: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState('option1');

  return (
    <DocsContainer>
      <Title>Radio Component</Title>
      <p>
        The Radio component is a Windows 98-style radio input that supports various states and labels.
      </p>

      <Section id="basic">
        <Subtitle>Basic Usage</Subtitle>
        <ExampleContainer>
          <ExampleTitle>Basic Radio</ExampleTitle>
          <RadioGroup>
            <Radio
              name="demo"
              value="option1"
              label="Option 1"
              checked={selectedOption === 'option1'}
              onChange={(e) => setSelectedOption(e.target.value)}
            />
            <Radio
              name="demo"
              value="option2"
              label="Option 2"
              checked={selectedOption === 'option2'}
              onChange={(e) => setSelectedOption(e.target.value)}
            />
            <Radio
              name="demo"
              value="option3"
              label="Option 3"
              checked={selectedOption === 'option3'}
              onChange={(e) => setSelectedOption(e.target.value)}
            />
          </RadioGroup>
          <CodeBlock>
            {`const [selectedOption, setSelectedOption] = useState('option1');

<Radio
  name="demo"
  value="option1"
  label="Option 1"
  checked={selectedOption === 'option1'}
  onChange={(e) => setSelectedOption(e.target.value)}
/>
<Radio
  name="demo"
  value="option2"
  label="Option 2"
  checked={selectedOption === 'option2'}
  onChange={(e) => setSelectedOption(e.target.value)}
/>
<Radio
  name="demo"
  value="option3"
  label="Option 3"
  checked={selectedOption === 'option3'}
  onChange={(e) => setSelectedOption(e.target.value)}
/>`}
          </CodeBlock>
        </ExampleContainer>
      </Section>

      <Section id="disabled">
        <Subtitle>Disabled State</Subtitle>
        <ExampleContainer>
          <ExampleTitle>Disabled Radio</ExampleTitle>
          <RadioGroup>
            <Radio
              name="disabled-demo"
              value="disabled1"
              label="Disabled radio"
              disabled
            />
            <Radio
              name="disabled-demo"
              value="disabled2"
              label="Disabled checked radio"
              checked
              disabled
            />
          </RadioGroup>
          <CodeBlock>
            {`<Radio
  name="disabled-demo"
  value="disabled1"
  label="Disabled radio"
  disabled
/>
<Radio
  name="disabled-demo"
  value="disabled2"
  label="Disabled checked radio"
  checked
  disabled
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
              <PropsTableCell>Whether the radio is checked</PropsTableCell>
            </tr>
            <tr>
              <PropsTableCell>disabled</PropsTableCell>
              <PropsTableCell>boolean</PropsTableCell>
              <PropsTableCell>false</PropsTableCell>
              <PropsTableCell>Whether the radio is disabled</PropsTableCell>
            </tr>
            <tr>
              <PropsTableCell>label</PropsTableCell>
              <PropsTableCell>string</PropsTableCell>
              <PropsTableCell>undefined</PropsTableCell>
              <PropsTableCell>The label text for the radio</PropsTableCell>
            </tr>
            <tr>
              <PropsTableCell>name</PropsTableCell>
              <PropsTableCell>string</PropsTableCell>
              <PropsTableCell>undefined</PropsTableCell>
              <PropsTableCell>The name attribute for the radio group</PropsTableCell>
            </tr>
            <tr>
              <PropsTableCell>value</PropsTableCell>
              <PropsTableCell>string</PropsTableCell>
              <PropsTableCell>undefined</PropsTableCell>
              <PropsTableCell>The value of the radio option</PropsTableCell>
            </tr>
            <tr>
              <PropsTableCell>onChange</PropsTableCell>
              <PropsTableCell>{`(event: React.ChangeEvent<HTMLInputElement>) => void`}</PropsTableCell>
              <PropsTableCell>undefined</PropsTableCell>
              <PropsTableCell>Function to call when the radio is selected</PropsTableCell>
            </tr>
          </tbody>
        </PropsTable>
      </Section>
    </DocsContainer>
  );
};

export default RadioDocs; 