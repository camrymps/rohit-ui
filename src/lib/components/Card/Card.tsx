import React from 'react';
import styled, { css, keyframes } from 'styled-components';

export interface CardProps {
  title?: React.ReactNode;
  children: React.ReactNode;
  variant?: 'default' | 'primary' | 'secondary' | 'success' | 'error' | 'warning' | 'info';
  width?: string;
  minHeight?: string;
  elevated?: boolean;
  horizontal?: boolean;
  noPadding?: boolean;
  rohitMode?: boolean;
  className?: string;
  footer?: React.ReactNode;
}

// Rohit mode animation
const pulse = keyframes`
  0% { box-shadow: 0 0 0 0 rgba(255, 0, 255, 0.4); }
  70% { box-shadow: 0 0 0 10px rgba(255, 0, 255, 0); }
  100% { box-shadow: 0 0 0 0 rgba(255, 0, 255, 0); }
`;

const CardContainer = styled.div<{
  width?: string;
  minHeight?: string;
  elevated: boolean;
  horizontal: boolean;
  variant: string;
  rohitMode?: boolean;
}>`
  display: flex;
  flex-direction: ${({ horizontal }) => horizontal ? 'row' : 'column'};
  width: ${({ width }) => width || '100%'};
  min-height: ${({ minHeight }) => minHeight || 'auto'};
  border: 1px solid ${({ theme }) => theme.colors.border.dark};
  background-color: ${({ theme }) => theme.colors.background.main};
  font-family: ${({ theme }) => theme.fonts.main};
  box-shadow: ${({ theme, elevated }) => elevated 
    ? 'rgba(0, 0, 0, 0.15) 0px 5px 15px 0px' 
    : theme.shadows.outset};
  position: relative;
  
  ${({ variant, theme }) => {
    switch (variant) {
      case 'primary':
        return css`
          border-top: 3px solid ${theme.colors.primary};
        `;
      case 'secondary':
        return css`
          border-top: 3px solid ${theme.colors.secondary};
        `;
      case 'success':
        return css`
          border-top: 3px solid ${theme.colors.success};
        `;
      case 'error':
        return css`
          border-top: 3px solid ${theme.colors.error};
        `;
      case 'warning':
        return css`
          border-top: 3px solid ${theme.colors.warning};
        `;
      case 'info':
        return css`
          border-top: 3px solid ${theme.colors.info};
        `;
      default:
        return '';
    }
  }}
  
  ${({ rohitMode }) => rohitMode && css`
    animation: ${pulse} 2s infinite;
    
    &::before {
      content: 'Rohit Approved';
      position: absolute;
      top: -10px;
      right: 10px;
      background-color: ${({ theme }) => theme.colors.primary};
      color: white;
      font-size: 10px;
      padding: 2px 5px;
      transform: rotate(3deg);
      z-index: 1;
    }
  `}
`;

const CardHeader = styled.div<{ variant: string }>`
  padding: 8px 12px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border.dark};
  font-weight: bold;
  display: flex;
  align-items: center;
  gap: 8px;
  
  ${({ variant, theme }) => {
    switch (variant) {
      case 'primary':
        return css`background-color: ${theme.colors.primary}; color: white;`;
      case 'secondary':
        return css`background-color: ${theme.colors.secondary}; color: white;`;
      case 'success':
        return css`background-color: ${theme.colors.success}; color: white;`;
      case 'error':
        return css`background-color: ${theme.colors.error}; color: white;`;
      case 'warning':
        return css`background-color: ${theme.colors.warning}; color: black;`;
      case 'info':
        return css`background-color: ${theme.colors.info}; color: white;`;
      default:
        return '';
    }
  }}
`;

const CardContent = styled.div<{ noPadding: boolean }>`
  padding: ${({ noPadding }) => noPadding ? '0' : '12px'};
  flex: 1;
`;

const CardFooter = styled.div`
  padding: 8px 12px;
  border-top: 1px solid ${({ theme }) => theme.colors.border.dark};
  background-color: ${({ theme }) => theme.colors.background.main};
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 8px;
`;

export const Card: React.FC<CardProps> = ({
  title,
  children,
  variant = 'default',
  width,
  minHeight,
  elevated = false,
  horizontal = false,
  noPadding = false,
  rohitMode = false,
  className,
  footer
}) => {
  return (
    <CardContainer
      width={width}
      minHeight={minHeight}
      elevated={elevated}
      horizontal={horizontal}
      variant={variant}
      rohitMode={rohitMode}
      className={className}
    >
      {title && <CardHeader variant={variant}>{title}</CardHeader>}
      <CardContent noPadding={noPadding}>{children}</CardContent>
      {footer && <CardFooter>{footer}</CardFooter>}
    </CardContainer>
  );
}; 