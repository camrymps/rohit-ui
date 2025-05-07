// Export components
export * from "./components";

// Export theme
export * from "./theme";

// Version information
export const VERSION = "0.1.0";
export const NAME = "Rohit UI";

// Easter egg
export const ROHIT_QUOTES = [
  "Rohit says: 'This UI is amazing!'",
  "Rohit says: 'Who made this awesome UI kit?'",
  "Rohit says: 'I'm the inspiration for this UI!'",
  "Rohit says: 'Windows 98 was the peak of UI design!'",
  "Rohit says: 'Why did they name it after me?'",
];

export const getRandomRohitQuote = (): string => {
  return ROHIT_QUOTES[Math.floor(Math.random() * ROHIT_QUOTES.length)];
};
