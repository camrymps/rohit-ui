import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import type { RohitUITheme } from 'rohit-ui/theme/theme';
import { CodeBlock } from '../components/CodeBlock';

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
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
`;

const Text = styled.p<{ theme: RohitUITheme }>`
  font-family: ${({ theme }) => theme.fonts.main};
  color: ${({ theme }) => theme.colors.text.primary};
  line-height: 1.5;
  margin-bottom: 15px;
`;

const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.colors.primary};
  text-decoration: none;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }
`;

const Section = styled.section`
  margin-bottom: 40px;
`;

const GettingStarted: React.FC = () => {
  return (
    <Container>
      <Title>Getting Started</Title>
      <Text>
        Welcome to Rohit UI! This guide will help you get started with installing and using the
        library in your React application.
      </Text>

      <Section>
        <Subtitle>Installation</Subtitle>
        <Text>
          You can install Rohit UI using npm or yarn:
        </Text>
        <CodeBlock>
          {`# Using npm
npm install rohit-ui styled-components

# Using yarn
yarn add rohit-ui styled-components`}
        </CodeBlock>
      </Section>

      <Section>
        <Subtitle>Theme Setup</Subtitle>
        <Text>
          Rohit UI uses styled-components for styling and requires a theme provider. Wrap your
          application with the RohitThemeProvider component:
        </Text>
        <CodeBlock>
          {`import React from 'react';
import { RohitThemeProvider } from 'rohit-ui';

const App = () => {
  return (
    <RohitThemeProvider>
      {/* Your app content */}
    </RohitThemeProvider>
  );
};`}
        </CodeBlock>
      </Section>

      <Section>
        <Subtitle>Using Components</Subtitle>
        <Text>
          Import and use components from Rohit UI in your React components:
        </Text>
        <CodeBlock>
          {`import React from 'react';
import { Button, Checkbox, Radio } from 'rohit-ui';

const MyComponent = () => {
  return (
    <div>
      <Button variant="primary">Click Me</Button>
      <Checkbox label="Check me" />
      <Radio name="option" value="1" label="Choose me" />
    </div>
  );
};`}
        </CodeBlock>
      </Section>

      <Section>
        <Subtitle>TypeScript Support</Subtitle>
        <Text>
          Rohit UI is built with TypeScript and includes type definitions out of the box. You'll get
          proper type checking and autocompletion in your IDE.
        </Text>
        <CodeBlock>
          {`import React from 'react';
import type { ButtonProps } from 'rohit-ui';
import { Button } from 'rohit-ui';

const MyButton: React.FC<ButtonProps> = (props) => {
  return <Button {...props} />;
};`}
        </CodeBlock>
      </Section>

      <Section>
        <Subtitle>Customizing Themes</Subtitle>
        <Text>
          You can customize the theme by providing your own theme object to the RohitThemeProvider:
        </Text>
        <CodeBlock>
          {`import React from 'react';
import { RohitThemeProvider } from 'rohit-ui';
import type { RohitUITheme } from 'rohit-ui';

const customTheme: RohitUITheme = {
  colors: {
    primary: '#0000ff',
    secondary: '#ff0000',
    // ... other color overrides
  },
  fonts: {
    main: 'Arial, sans-serif',
    // ... other font overrides
  },
  // ... other theme customizations
};

const App = () => {
  return (
    <RohitThemeProvider initialTheme={customTheme}>
      {/* Your app content */}
    </RohitThemeProvider>
  );
};`}
        </CodeBlock>
      </Section>

      <Section>
        <Subtitle>Next Steps</Subtitle>
        <Text>
          Now that you have Rohit UI set up, explore the component documentation to learn more about
          each component's props and usage:
        </Text>
        <ul>
          <li>
            <StyledLink to="/components/button">Button</StyledLink> - Basic button component
          </li>
          <li>
            <StyledLink to="/components/checkbox">Checkbox</StyledLink> - Checkbox input component
          </li>
          <li>
            <StyledLink to="/components/radio">Radio</StyledLink> - Radio input component
          </li>
        </ul>
      </Section>
    </Container>
  );
};

export default GettingStarted; 