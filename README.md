# Rohit UI

A fully functional React-based UI kit with a Windows 98 retro theme. This UI kit is designed to be both a joke for a friend named Rohit and a fully usable, open-source component library.

## Features

- 🖥️ Windows 98 inspired design
- 🎨 Themeable components with easy color customization
- 🧩 Multiple components (Button, Checkbox, Radio, TextField, Select, ProgressBar, Window)
- 😂 Easter eggs and silly features related to "Rohit"
- 📱 Responsive design
- 🔄 Easy to use with React

## Installation

```bash
npm install rohit-ui
```

## Usage

```jsx
import React from "react";
import { RohitThemeProvider, Button, TextField } from "rohit-ui";

const App = () => {
  return (
    <RohitThemeProvider>
      <div>
        <h1>My Awesome App</h1>
        <Button>Click Me!</Button>
        <TextField label="Enter your name" placeholder="Type here..." />
      </div>
    </RohitThemeProvider>
  );
};

export default App;
```

## Components

### Button

```jsx
<Button
  variant="primary" // 'primary', 'secondary', 'success', 'error', 'warning', 'info'
  size="medium" // 'small', 'medium', 'large'
  fullWidth={false}
  active={false}
  rohitMode={false} // Enables silly animations
  onClick={() => console.log("Clicked!")}
>
  Click Me!
</Button>
```

### Checkbox

```jsx
<Checkbox
  label="Accept terms"
  checked={isChecked}
  onChange={() => setIsChecked(!isChecked)}
  rohitMode={false} // Enables silly features
/>
```

### Radio

```jsx
<Radio
  name="options"
  value="option1"
  label="Option 1"
  checked={selectedOption === "option1"}
  onChange={() => setSelectedOption("option1")}
  rohitMode={false} // Enables silly features
/>
```

### TextField

```jsx
<TextField
  label="Username"
  value={username}
  onChange={(e) => setUsername(e.target.value)}
  placeholder="Enter username"
  error="Username is required" // Optional error message
  fullWidth={true}
  rohitMode={false} // Enables silly features
/>
```

### Select

```jsx
const options = [
  { value: "option1", label: "Option 1" },
  { value: "option2", label: "Option 2" },
];

<Select
  label="Choose an option"
  options={options}
  value={selectedValue}
  onChange={(value) => setSelectedValue(value)}
  error="Please select an option" // Optional error message
  fullWidth={true}
  rohitMode={false} // Enables silly features
/>;
```

### ProgressBar

```jsx
<ProgressBar
  value={50}
  max={100}
  label="Download Progress"
  showValue={true}
  fullWidth={true}
  rohitMode={false} // Enables silly features
/>
```

### Window

```jsx
<Window
  title="My Window"
  width="400px"
  height="300px"
  initialPosition={{ x: 50, y: 50 }}
  resizable={true}
  minimizable={true}
  maximizable={true}
  closable={true}
  onClose={() => console.log("Window closed")}
  active={true}
  icon="path/to/icon.png" // Optional
>
  <div>Window content goes here</div>
</Window>
```

## Theming

Rohit UI comes with two built-in themes:

- Windows 98 Theme (default)
- Rohit Special Theme (a funky variation)

You can switch between themes or create your own:

```jsx
import { useRohitTheme } from "rohit-ui";

const MyComponent = () => {
  const { theme, setTheme, availableThemes } = useRohitTheme();

  const switchTheme = () => {
    // Switch to the next available theme
    const currentIndex = availableThemes.findIndex(
      (t) => t.name === theme.name
    );
    const nextIndex = (currentIndex + 1) % availableThemes.length;
    setTheme(availableThemes[nextIndex]);
  };

  return (
    <div>
      <p>Current theme: {theme.name}</p>
      <button onClick={switchTheme}>Switch Theme</button>
    </div>
  );
};
```

## Creating Custom Themes

```jsx
import { RohitThemeProvider, RohitUITheme } from "rohit-ui";

const myCustomTheme: RohitUITheme = {
  name: "My Custom Theme",
  colors: {
    primary: "#ff0000",
    secondary: "#00ff00",
    // ... other color properties
  },
  // ... other theme properties
};

const App = () => {
  return (
    <RohitThemeProvider initialTheme={myCustomTheme}>
      {/* Your app content */}
    </RohitThemeProvider>
  );
};
```

## License

MIT

## Credits

Created as a joke for Rohit, but with love for the Windows 98 aesthetic and the open-source community.
