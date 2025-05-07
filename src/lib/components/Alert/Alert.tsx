import React from 'react';
import styled, { css, keyframes } from 'styled-components';

export interface AlertProps {
  variant?: 'info' | 'warning' | 'error' | 'success';
  title?: string;
  children: React.ReactNode;
  icon?: boolean;
  closable?: boolean;
  onClose?: () => void;
  rohitMode?: boolean;
}

const getIcon = (variant: string): string => {
  switch (variant) {
    case 'info':
      return '💬';
    case 'warning':
      return '⚠️';
    case 'error':
      return '❌';
    case 'success':
      return '✅';
    default:
      return '💬';
  }
};

const wiggle = keyframes`
  0% { transform: rotate(0deg); }
  25% { transform: rotate(-5deg); }
  50% { transform: rotate(0deg); }
  75% { transform: rotate(5deg); }
  100% { transform: rotate(0deg); }
`;

const AlertContainer = styled.div<{ variant: string; rohitMode?: boolean }>`
  position: relative;
  padding: 16px;
  margin-bottom: 16px;
  border: 1px solid ${({ theme }) => theme.colors.border.dark};
  background-color: ${({ theme }) => theme.colors.background.main};
  font-family: ${({ theme }) => theme.fonts.main};
  color: ${({ theme }) => theme.colors.text.primary};
  display: flex;
  flex-direction: column;
  box-shadow: ${({ theme }) => theme.shadows.outset};
  
  ${({ variant, theme }) => {
    switch (variant) {
      case 'info':
        return css`
          border-left: 4px solid ${theme.colors.info};
        `;
      case 'warning':
        return css`
          border-left: 4px solid ${theme.colors.warning};
        `;
      case 'error':
        return css`
          border-left: 4px solid ${theme.colors.error};
        `;
      case 'success':
        return css`
          border-left: 4px solid ${theme.colors.success};
        `;
      default:
        return css`
          border-left: 4px solid ${theme.colors.info};
        `;
    }
  }}
  
  ${({ rohitMode }) => rohitMode && css`
    animation: ${wiggle} 0.5s ease-in-out infinite;
    animation-delay: 2s;
    
    &:hover {
      animation-play-state: paused;
    }
    
    &::after {
      content: 'Rohit says: Very important!';
      position: absolute;
      bottom: -8px;
      right: 8px;
      font-size: 10px;
      color: ${({ theme }) => theme.colors.secondary};
      font-style: italic;
      transform: rotate(-5deg);
    }
  `}
`;

const AlertHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
  justify-content: space-between;
`;

const AlertTitle = styled.div<{ variant: string }>`
  font-weight: bold;
  display: flex;
  align-items: center;
  gap: 8px;
  
  ${({ variant, theme }) => {
    switch (variant) {
      case 'info':
        return css`color: ${theme.colors.info};`;
      case 'warning':
        return css`color: ${theme.colors.warning};`;
      case 'error':
        return css`color: ${theme.colors.error};`;
      case 'success':
        return css`color: ${theme.colors.success};`;
      default:
        return css`color: ${theme.colors.info};`;
    }
  }}
`;

const AlertContent = styled.div`
  margin-left: 28px;
`;

const CloseButton = styled.button`
  width: 16px;
  height: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.background.main};
  border: none;
  box-shadow: ${({ theme }) => theme.shadows.outset};
  cursor: pointer;
  font-family: ${({ theme }) => theme.fonts.main};
  font-size: 10px;
  padding: 0;
  
  &:active {
    box-shadow: ${({ theme }) => theme.shadows.inset};
  }
`;

export const Alert: React.FC<AlertProps> = ({ 
  variant = 'info',
  title,
  children,
  icon = true,
  closable = false,
  onClose,
  rohitMode = false
}) => {
  const defaultTitle = variant.charAt(0).toUpperCase() + variant.slice(1);
  
  return (
    <AlertContainer variant={variant} rohitMode={rohitMode}>
      <AlertHeader>
        <AlertTitle variant={variant}>
          {icon && <span>{getIcon(variant)}</span>}
          {title || defaultTitle}
        </AlertTitle>
        {closable && <CloseButton onClick={onClose}>×</CloseButton>}
      </AlertHeader>
      <AlertContent>{children}</AlertContent>
    </AlertContainer>
  );
}; 