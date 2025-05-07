import React from 'react';
import styled, { css, keyframes } from 'styled-components';

export interface BadgeProps {
  content?: string | number;
  variant?: 'primary' | 'secondary' | 'success' | 'error' | 'warning' | 'info';
  size?: 'small' | 'medium' | 'large';
  className?: string;
  max?: number;
  dot?: boolean;
  rohitMode?: boolean;
  children?: React.ReactNode;
}

// For Rohit Mode
const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.2); }
  100% { transform: scale(1); }
`;

const float = keyframes`
  0% { transform: translateY(0); }
  50% { transform: translateY(-3px); }
  100% { transform: translateY(0); }
`;

const BadgeContainer = styled.div`
  position: relative;
  display: inline-flex;
`;

type BadgeContentProps = {
  variant: string;
  size: string;
  dot: boolean;
  rohitMode?: boolean;
  standalone: boolean;
};

const getBadgeSize = (size: string) => {
  switch (size) {
    case 'small':
      return '16px';
    case 'large':
      return '24px';
    default:
      return '20px';
  }
};

const BadgeContent = styled.span<BadgeContentProps>`
  position: ${props => props.standalone ? 'relative' : 'absolute'};
  top: ${props => props.standalone ? 'auto' : '-8px'};
  right: ${props => props.standalone ? 'auto' : '-8px'};
  height: ${props => props.dot ? '8px' : getBadgeSize(props.size)};
  width: ${props => props.dot ? '8px' : 'auto'};
  min-width: ${props => props.dot ? '8px' : getBadgeSize(props.size)};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${props => props.dot ? '50%' : '0'};
  font-size: ${props => {
    switch (props.size) {
      case 'small':
        return '10px';
      case 'large':
        return '14px';
      default:
        return '12px';
    }
  }};
  padding: ${props => props.dot ? '0' : '0 4px'};
  font-family: ${({ theme }) => theme.fonts.main};
  font-weight: bold;
  z-index: 1;
  box-shadow: ${({ theme }) => theme.shadows.outset};
  
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
        return css`
          background-color: ${theme.colors.primary};
          color: white;
        `;
    }
  }}
  
  ${({ rohitMode }) =>
    rohitMode &&
    css`
      animation: ${pulse} 1s infinite, ${float} 2s infinite;
      
      &::before {
        content: '🔥';
        position: absolute;
        top: -10px;
        left: -4px;
        font-size: 10px;
        transform: rotate(-20deg);
      }
      
      &::after {
        content: '🔥';
        position: absolute;
        top: -10px;
        right: -4px;
        font-size: 10px;
        transform: rotate(20deg);
      }
    `}
`;

export const Badge: React.FC<BadgeProps> = ({
  content,
  variant = 'primary',
  size = 'medium',
  className,
  max = 99,
  dot = false,
  rohitMode = false,
  children
}) => {
  const displayContent = dot 
    ? '' 
    : typeof content === 'number' && content > max 
      ? `${max}+` 
      : content;
  
  // If no children are provided, render badge as standalone
  if (!children) {
    return (
      <BadgeContent
        variant={variant}
        size={size}
        className={className}
        dot={dot}
        rohitMode={rohitMode}
        standalone={true}
      >
        {!dot && displayContent}
      </BadgeContent>
    );
  }
  
  return (
    <BadgeContainer className={className}>
      {children}
      <BadgeContent
        variant={variant}
        size={size}
        dot={dot}
        rohitMode={rohitMode}
        standalone={false}
      >
        {!dot && displayContent}
      </BadgeContent>
    </BadgeContainer>
  );
}; 