import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
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
}
