// Remove the import for DefaultTheme since we're not extending it anymore
// import type { DefaultTheme } from "styled-components";

// Define RohitUITheme without extending DefaultTheme
export interface RohitUITheme {
  name: string;
  colors: {
    primary: string;
    secondary: string;
    success: string;
    error: string;
    warning: string;
    info: string;
    background: {
      main: string;
      window: string;
      desktop: string;
    };
    text: {
      primary: string;
      secondary: string;
      disabled: string;
    };
    border: {
      light: string;
      dark: string;
      default: string;
    };
  };
  fonts: {
    main: string;
    monospace: string;
  };
  spacing: {
    unit: number;
  };
  borderRadius: {
    small: number;
    default: number;
    large: number;
  };
  shadows: {
    inset: string;
    outset: string;
  };
}

// Windows 98 inspired theme
export const windows98Theme: RohitUITheme = {
  name: "Windows 98",
  colors: {
    primary: "#000080", // Navy blue
    secondary: "#008080", // Teal
    success: "#008000", // Green
    error: "#FF0000", // Red
    warning: "#FFA500", // Orange
    info: "#0000FF", // Blue
    background: {
      main: "#C0C0C0", // Silver
      window: "#C0C0C0", // Silver
      desktop: "#008080", // Teal
    },
    text: {
      primary: "#000000", // Black
      secondary: "#808080", // Gray
      disabled: "#A9A9A9", // Dark Gray
    },
    border: {
      light: "#FFFFFF", // White
      dark: "#808080", // Gray
      default: "#000000", // Black
    },
  },
  fonts: {
    main: '"MS Sans Serif", "Segoe UI", Tahoma, sans-serif',
    monospace: '"Courier New", monospace',
  },
  spacing: {
    unit: 4,
  },
  borderRadius: {
    small: 0,
    default: 0,
    large: 0,
  },
  shadows: {
    inset: "inset 1px 1px 0px #808080, inset -1px -1px 0px #FFFFFF",
    outset: "inset -1px -1px 0px #808080, inset 1px 1px 0px #FFFFFF",
  },
};

// Rohit's Special Theme (a funky variation)
export const rohitSpecialTheme: RohitUITheme = {
  name: "Rohit Special",
  colors: {
    primary: "#FF00FF", // Hot Pink
    secondary: "#00FFFF", // Cyan
    success: "#00FF00", // Lime Green
    error: "#FF0000", // Red
    warning: "#FFFF00", // Yellow
    info: "#0000FF", // Blue
    background: {
      main: "#C0C0C0", // Silver
      window: "#C0C0C0", // Silver
      desktop: "#FF00FF", // Hot Pink
    },
    text: {
      primary: "#000000", // Black
      secondary: "#808080", // Gray
      disabled: "#A9A9A9", // Dark Gray
    },
    border: {
      light: "#FFFFFF", // White
      dark: "#808080", // Gray
      default: "#000000", // Black
    },
  },
  fonts: {
    main: '"Comic Sans MS", "MS Sans Serif", "Segoe UI", Tahoma, sans-serif',
    monospace: '"Courier New", monospace',
  },
  spacing: {
    unit: 4,
  },
  borderRadius: {
    small: 0,
    default: 0,
    large: 0,
  },
  shadows: {
    inset: "inset 1px 1px 0px #808080, inset -1px -1px 0px #FFFFFF",
    outset: "inset -1px -1px 0px #808080, inset 1px 1px 0px #FFFFFF",
  },
};

// Default theme
export const defaultTheme = windows98Theme;
