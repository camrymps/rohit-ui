import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import type { RohitUITheme } from 'rohit-ui/theme/theme';

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

const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 20px 0;
`;

const FeatureItem = styled.li<{ theme: RohitUITheme }>`
  font-family: ${({ theme }) => theme.fonts.main};
  color: ${({ theme }) => theme.colors.text.primary};
  margin-bottom: 10px;
  padding-left: 20px;
  position: relative;

  &:before {
    content: '→';
    position: absolute;
    left: 0;
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const Home: React.FC = () => {
  return (
    <Container>
      <Title>Rohit UI</Title>
      <Text>
        Welcome to Rohit UI, a Windows 98-inspired React component library that brings retro aesthetics
        to modern web applications. Built with TypeScript and styled-components, Rohit UI offers a
        collection of customizable components that capture the nostalgic charm of the classic Windows
        interface.
      </Text>

      <Subtitle>Features</Subtitle>
      <FeatureList>
        <FeatureItem>Windows 98-inspired design system</FeatureItem>
        <FeatureItem>Built with TypeScript for type safety</FeatureItem>
        <FeatureItem>Customizable themes and styling</FeatureItem>
        <FeatureItem>Accessible and responsive components</FeatureItem>
        <FeatureItem>Easy to integrate with React applications</FeatureItem>
        <FeatureItem>Comprehensive documentation and examples</FeatureItem>
      </FeatureList>

      <Subtitle>Getting Started</Subtitle>
      <Text>
        Ready to add some retro charm to your React application? Check out our{' '}
        <StyledLink to="/getting-started">Getting Started</StyledLink> guide to learn how to install
        and use Rohit UI in your project.
      </Text>

      <Subtitle>Components</Subtitle>
      <Text>
        Explore our collection of components, starting with the basic building blocks like{' '}
        <StyledLink to="/components/button">Button</StyledLink>,{' '}
        <StyledLink to="/components/checkbox">Checkbox</StyledLink>, and{' '}
        <StyledLink to="/components/radio">Radio</StyledLink>. Each component comes with detailed
        documentation, examples, and customization options.
      </Text>

      <Subtitle>Customization</Subtitle>
      <Text>
        Rohit UI components are built with styled-components and support theme customization. You can
        easily modify colors, fonts, spacing, and other design tokens to match your application's
        needs while maintaining the Windows 98 aesthetic.
      </Text>

      <Subtitle>Contributing</Subtitle>
      <Text>
        We welcome contributions from the community! Whether it's bug fixes, new features, or
        documentation improvements, feel free to check out our GitHub repository and contribute to
        making Rohit UI even better.
      </Text>
    </Container>
  );
};

export default Home; 