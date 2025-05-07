import React from 'react';
import styled, { css, keyframes } from 'styled-components';

export interface SpinnerProps {
  size?: 'small' | 'medium' | 'large';
  variant?: 'primary' | 'secondary' | 'success' | 'error' | 'warning' | 'info';
  label?: string;
  inline?: boolean;
  rohitMode?: boolean;
}

// Standard spinner animation
const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

// Rohit mode animations
const bounce = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
`;

const rohitSpin = keyframes`
  0% { transform: rotate(0deg) scale(1); }
  25% { transform: rotate(90deg) scale(1.1); }
  50% { transform: rotate(180deg) scale(1); }
  75% { transform: rotate(270deg) scale(0.9); }
  100% { transform: rotate(360deg) scale(1); }
`;

const getSize = (size: string): string => {
  switch (size) {
    case 'small':
      return '16px';
    case 'large':
      return '36px';
    default:
      return '24px';
  }
};

const getFontSize = (size: string): string => {
  switch (size) {
    case 'small':
      return '10px';
    case 'large':
      return '24px';
    default:
      return '18px';
  }
};

const SpinnerContainer = styled.div<{ inline: boolean }>`
  display: flex;
  flex-direction: ${({ inline }) => inline ? 'row' : 'column'};
  align-items: center;
  gap: 8px;
  ${({ inline }) => !inline && css`
    justify-content: center;
  `}
`;

const RohitSpinnerElement = styled.div<{
  size: string;
}>`
  width: ${({ size }) => getSize(size)};
  height: ${({ size }) => getSize(size)};
  position: relative;
  animation: ${rohitSpin} 1.5s infinite ease-in-out;
  
  &::before {
    content: '😎';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: ${({ size }) => getFontSize(size)};
    animation: ${bounce} 1.5s infinite ease-in-out;
  }
`;

const StandardSpinnerElement = styled.div<{
  size: string;
  variant: string;
}>`
  width: ${({ size }) => getSize(size)};
  height: ${({ size }) => getSize(size)};
  position: relative;
  border: 3px solid ${({ theme }) => theme.colors.background.main};
  border-radius: 0;
  animation: ${spin} 1.2s linear infinite;
  box-shadow: ${({ theme }) => theme.shadows.outset};

  &::before {
    content: "";
    position: absolute;
    top: -3px;
    left: -3px;
    right: -3px;
    bottom: -3px;
    border: 1px solid ${({ theme }) => theme.colors.border.dark};
  }
  
  ${({ variant, theme }) => {
    switch (variant) {
      case 'primary':
        return css`
          border-top-color: ${theme.colors.primary};
        `;
      case 'secondary':
        return css`
          border-top-color: ${theme.colors.secondary};
        `;
      case 'success':
        return css`
          border-top-color: ${theme.colors.success};
        `;
      case 'error':
        return css`
          border-top-color: ${theme.colors.error};
        `;
      case 'warning':
        return css`
          border-top-color: ${theme.colors.warning};
        `;
      case 'info':
        return css`
          border-top-color: ${theme.colors.info};
        `;
      default:
        return css`
          border-top-color: ${theme.colors.primary};
        `;
    }
  }}
`;

const SpinnerLabel = styled.div<{ size: string; rohitMode?: boolean }>`
  font-family: ${({ theme }) => theme.fonts.main};
  font-size: ${({ size }) => size === 'small' ? '12px' : size === 'large' ? '16px' : '14px'};
  color: ${({ theme }) => theme.colors.text.primary};
  
  ${({ rohitMode }) => rohitMode && css`
    font-style: italic;
    &::after {
      content: " (very important)";
      color: ${({ theme }) => theme.colors.secondary};
      font-weight: bold;
    }
  `}
`;

export const Spinner: React.FC<SpinnerProps> = ({
  size = 'medium',
  variant = 'primary',
  label,
  inline = false,
  rohitMode = false
}) => {
  return (
    <SpinnerContainer inline={inline}>
      {rohitMode ? (
        <RohitSpinnerElement size={size} />
      ) : (
        <StandardSpinnerElement size={size} variant={variant} />
      )}
      {label && (
        <SpinnerLabel 
          size={size}
          rohitMode={rohitMode}
        >
          {label}
        </SpinnerLabel>
      )}
    </SpinnerContainer>
  );
}; 