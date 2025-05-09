import React from 'react';
import type { ButtonHTMLAttributes } from 'react';
import styled, { css } from 'styled-components';
import type { RohitUITheme } from '../../theme/theme';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'success' | 'error' | 'warning' | 'info';
  size?: 'small' | 'medium' | 'large';
  fullWidth?: boolean;
  active?: boolean;
  rohitMode?: boolean; // Easter egg mode that adds silly animations
}

const ButtonStyled = styled.button<ButtonProps & { theme: RohitUITheme }>`
  font-family: ${({ theme }) => theme.fonts.main};
  font-size: 14px;
  padding: ${({ size }) => {
    switch (size) {
      case 'small': return '2px 8px';
      case 'large': return '8px 24px';
      default: return '4px 16px';
    }
  }};
  border: none;
  position: relative;
  background-color: ${({ theme }) => theme.colors.background.main};
  color: ${({ theme }) => theme.colors.text.primary};
  cursor: pointer;
  box-shadow: ${({ theme, active }) => active ? theme.shadows.inset : theme.shadows.outset};
  width: ${({ fullWidth }) => fullWidth ? '100%' : 'auto'};
  text-align: center;
  outline: none;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border: 1px solid ${({ theme }) => theme.colors.border.default};
    pointer-events: none;
  }
  
  &:active {
    box-shadow: ${({ theme }) => theme.shadows.inset};
    padding-top: 5px;
    padding-bottom: 3px;
  }
  
  &:focus {
    outline: 1px dotted ${({ theme }) => theme.colors.border.default};
    outline-offset: -5px;
  }
  
  &:disabled {
    color: ${({ theme }) => theme.colors.text.disabled};
    cursor: not-allowed;
  }
  
  ${({ variant, theme }) => {
    switch (variant) {
      case 'primary':
        return css`
          background-color: ${theme.colors.primary};
          color: white;
        `;
      case 'secondary':
        return css`
          background-color: ${theme.colors.secondary};
          color: white;
        `;
      case 'success':
        return css`
          background-color: ${theme.colors.success};
          color: white;
        `;
      case 'error':
        return css`
          background-color: ${theme.colors.error};
          color: white;
        `;
      case 'warning':
        return css`
          background-color: ${theme.colors.warning};
          color: black;
        `;
      case 'info':
        return css`
          background-color: ${theme.colors.info};
          color: white;
        `;
      default:
        return '';
    }
  }}
  
  ${({ rohitMode }) => rohitMode && css`
    @keyframes rohitPulse {
      0% { transform: scale(1); }
      50% { transform: scale(1.05); }
      100% { transform: scale(1); }
    }
    
    animation: rohitPulse 1s infinite;
    
    &:hover {
      animation: none;
      transform: rotate(1deg);
    }
  `}
`;

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant,
  size = 'medium',
  fullWidth = false,
  active = false,
  rohitMode = false,
  ...props 
}) => {
  return (
    <ButtonStyled 
      variant={variant}
      size={size}
      fullWidth={fullWidth}
      active={active}
      rohitMode={rohitMode}
      {...props}
    >
      {children}
    </ButtonStyled>
  );
}; 