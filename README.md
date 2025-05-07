# Rohit UI

A Windows 98-style React UI kit created as a humorous tribute to someone named Rohit. This library provides a set of React components that mimic the classic Windows 98 aesthetic with an extra fun twist.

## Features

- Complete Windows 98 aesthetic
- Fully themeable with two built-in themes: Windows 98 (default) and "Rohit Special"
- "Rohit Mode" easter egg on each component that adds silly animations or behaviors
- TypeScript support for all components
- Built with styled-components

## Components

### Basic Components

- Button - Classic Windows 98 buttons with various variants
- Checkbox - Square checkbox with label
- Radio - Radio button with label
- TextField - Text input field with label
- Select - Dropdown selection field
- ProgressBar - Visual indicator for tasks
- Window - Draggable window component with title bar

### Advanced Components

- Tooltip - Information tooltip on hover
- Menu - Windows 98-style cascading menus
- Tabs - Tabbed interface for content organization
- Dialog - Modal dialog boxes
- Accordion - Collapsible sections

### Special Components

- CodeBlock - Component for displaying Python code with syntax highlighting that can "Rohit-ify" code by making it unnecessarily complicated

## Installation

```bash
npm install rohit-ui
# or
yarn add rohit-ui
```

## Usage

```jsx
import React from "react";
import { RohitThemeProvider, Button, Window, TextField } from "rohit-ui";

function App() {
  return (
    <RohitThemeProvider>
      <Window title="My App" width="400px" height="300px">
        <TextField label="Enter your name" />
        <Button variant="primary">Submit</Button>

        {/* Enable Rohit Mode for fun animations */}
        <Button rohitMode>Rohit Mode!</Button>
      </Window>
    </RohitThemeProvider>
  );
}
```

## Rohit Mode

Each component includes a `rohitMode` prop that enables silly animations or behaviors as a fun easter egg. For example, buttons will pulse and rotate slightly on hover.

## Theming

The library comes with two built-in themes:

- Windows 98 Theme - A faithful recreation of the classic Windows 98 UI
- Rohit Special Theme - A funky variation with bright colors and Comic Sans MS

You can switch themes or create your own:

```jsx
import { RohitThemeProvider, useRohitTheme, Button } from "rohit-ui";

function MyComponent() {
  const { theme, setTheme, availableThemes } = useRohitTheme();

  return (
    <div>
      <p>Current theme: {theme.name}</p>
      <Button onClick={() => setTheme(availableThemes[1])}>Switch Theme</Button>
    </div>
  );
}
```

## Development

This project uses Vite for development and building.

```bash
# Run the example app
npm run dev

# Build the library
npm run build

# Build the example app
npm run build:example
```

## Project Structure

- `/src/lib` - The actual UI component library
- `/src/example` - An example app showcasing all components

## License

MIT
