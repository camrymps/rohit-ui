import React from 'react';
import styled from 'styled-components';
import { Button } from 'rohit-ui/components/Button';
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

const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
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

const ButtonDocs: React.FC = () => {
  return (
    <DocsContainer>
      <Title>Button Component</Title>
      <p>
        The Button component is a versatile UI element that follows the Windows 98 design aesthetic.
        It supports various variants, sizes, and states.
      </p>

      <Section id="variants">
        <Subtitle>Variants</Subtitle>
        <ExampleContainer>
          <ExampleTitle>Button Variants</ExampleTitle>
          <ButtonGroup>
            <Button variant={'primary' as const}>Primary</Button>
            <Button variant={'secondary' as const}>Secondary</Button>
            <Button variant={'success' as const}>Success</Button>
            <Button variant={'error' as const}>Error</Button>
            <Button variant={'warning' as const}>Warning</Button>
            <Button variant={'info' as const}>Info</Button>
          </ButtonGroup>
          <CodeBlock>
            {`<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="success">Success</Button>
<Button variant="error">Error</Button>
<Button variant="warning">Warning</Button>
<Button variant="info">Info</Button>`}
          </CodeBlock>
        </ExampleContainer>
      </Section>

      <Section id="sizes">
        <Subtitle>Sizes</Subtitle>
        <ExampleContainer>
          <ExampleTitle>Button Sizes</ExampleTitle>
          <ButtonGroup>
            <Button size={'small' as const}>Small</Button>
            <Button size={'medium' as const}>Medium</Button>
            <Button size={'large' as const}>Large</Button>
          </ButtonGroup>
          <CodeBlock>
            {`<Button size="small">Small</Button>
<Button size="medium">Medium</Button>
<Button size="large">Large</Button>`}
          </CodeBlock>
        </ExampleContainer>
      </Section>

      <Section id="states">
        <Subtitle>States</Subtitle>
        <ExampleContainer>
          <ExampleTitle>Button States</ExampleTitle>
          <ButtonGroup>
            <Button active>Active</Button>
            <Button disabled>Disabled</Button>
            <Button rohitMode>Rohit Mode</Button>
          </ButtonGroup>
          <CodeBlock>
            {`<Button active>Active</Button>
<Button disabled>Disabled</Button>
<Button rohitMode>Rohit Mode</Button>`}
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
              <PropsTableCell>variant</PropsTableCell>
              <PropsTableCell>{`'primary' | 'secondary' | 'success' | 'error' | 'warning' | 'info'`}</PropsTableCell>
              <PropsTableCell>undefined</PropsTableCell>
              <PropsTableCell>The visual style of the button</PropsTableCell>
            </tr>
            <tr>
              <PropsTableCell>size</PropsTableCell>
              <PropsTableCell>{`'small' | 'medium' | 'large'`}</PropsTableCell>
              <PropsTableCell>'medium'</PropsTableCell>
              <PropsTableCell>The size of the button</PropsTableCell>
            </tr>
            <tr>
              <PropsTableCell>fullWidth</PropsTableCell>
              <PropsTableCell>boolean</PropsTableCell>
              <PropsTableCell>false</PropsTableCell>
              <PropsTableCell>Whether the button should take up the full width of its container</PropsTableCell>
            </tr>
            <tr>
              <PropsTableCell>active</PropsTableCell>
              <PropsTableCell>boolean</PropsTableCell>
              <PropsTableCell>false</PropsTableCell>
              <PropsTableCell>Whether the button is in an active state</PropsTableCell>
            </tr>
            <tr>
              <PropsTableCell>rohitMode</PropsTableCell>
              <PropsTableCell>boolean</PropsTableCell>
              <PropsTableCell>false</PropsTableCell>
              <PropsTableCell>Enables special Rohit-themed animations</PropsTableCell>
            </tr>
            <tr>
              <PropsTableCell>onClick</PropsTableCell>
              <PropsTableCell>{`(event: React.MouseEvent<HTMLButtonElement>) => void`}</PropsTableCell>
              <PropsTableCell>undefined</PropsTableCell>
              <PropsTableCell>Function to call when the button is clicked</PropsTableCell>
            </tr>
          </tbody>
        </PropsTable>
      </Section>
    </DocsContainer>
  );
};

export default ButtonDocs; 