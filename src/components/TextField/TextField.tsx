import React from 'react';
import type { InputHTMLAttributes } from 'react';
import styled from 'styled-components';

export interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  fullWidth?: boolean;
  rohitMode?: boolean; // Easter egg mode
}

const TextFieldContainer = styled.div<{ fullWidth: boolean }>`
  display: flex;
  flex-direction: column;
  width: ${({ fullWidth }) => fullWidth ? '100%' : 'auto'};
  font-family: ${({ theme }) => theme.fonts.main};
`;

const Label = styled.label`
  margin-bottom: 4px;
  font-size: 14px;
`;

const Input = styled.input<{ hasError: boolean; rohitMode: boolean }>`
  padding: 4px 8px;
  height: 21px;
  background-color: white;
  border: none;
  box-shadow: ${({ theme }) => theme.shadows.inset};
  font-family: ${({ theme }) => theme.fonts.main};
  font-size: 14px;
  
  &:focus {
    outline: 1px dotted ${({ theme }) => theme.colors.border.default};
    outline-offset: -4px;
  }
  
  ${({ hasError }) => hasError && `
    border: 1px solid red;
  `}
  
  ${({ rohitMode }) => rohitMode && `
    &:focus {
      background-color: #ffffcc;
    }
    
    &::placeholder {
      color: #888;
      font-style: italic;
    }
    
    @keyframes rohitBlink {
      0% { opacity: 1; }
      50% { opacity: 0.7; }
      100% { opacity: 1; }
    }
    
    &:hover::placeholder {
      animation: rohitBlink 1s infinite;
      content: "Rohit was here...";
    }
  `}
`;

const ErrorText = styled.div`
  color: ${({ theme }) => theme.colors.error};
  font-size: 12px;
  margin-top: 4px;
`;

export const TextField: React.FC<TextFieldProps> = ({
  label,
  error,
  fullWidth = false,
  rohitMode = false,
  ...props
}) => {
  // Easter egg: 5% chance to change placeholder text
  React.useEffect(() => {
    if (rohitMode && props.placeholder && Math.random() < 0.05) {
      const rohitPlaceholders = [
        "Rohit approves this text...",
        "Type like Rohit would...",
        "Rohit is watching you type...",
        "Rohit suggests typing here...",
        "Rohit's favorite field..."
      ];
      
      const randomPlaceholder = rohitPlaceholders[Math.floor(Math.random() * rohitPlaceholders.length)];
      const inputElement = document.getElementById(props.id || '') as HTMLInputElement;
      if (inputElement) {
        inputElement.placeholder = randomPlaceholder;
      }
    }
  }, [rohitMode, props.placeholder, props.id]);
  
  return (
    <TextFieldContainer fullWidth={fullWidth}>
      {label && <Label>{label}</Label>}
      <Input 
        hasError={!!error}
        rohitMode={rohitMode}
        {...props}
      />
      {error && <ErrorText>{error}</ErrorText>}
    </TextFieldContainer>
  );
}; 