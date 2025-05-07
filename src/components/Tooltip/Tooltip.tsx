import React, { useState } from 'react';
import styled from 'styled-components';
import type { ReactNode } from 'react';

export interface TooltipProps {
  children: ReactNode;
  content: ReactNode;
  position?: 'top' | 'right' | 'bottom' | 'left';
  delay?: number;
  rohitMode?: boolean; // Easter egg mode
}

const TooltipContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const TooltipTrigger = styled.div`
  display: inline-block;
`;

const TooltipContent = styled.div<{
  visible: boolean;
  position: 'top' | 'right' | 'bottom' | 'left';
  rohitMode: boolean;
}>`
  position: absolute;
  background-color: #ffffcc;
  color: ${({ theme }) => theme.colors.text.primary};
  padding: 6px 8px;
  border: 1px solid ${({ theme }) => theme.colors.border.default};
  box-shadow: ${({ theme }) => theme.shadows.outset};
  font-family: ${({ theme }) => theme.fonts.main};
  font-size: 12px;
  white-space: nowrap;
  z-index: 1000;
  visibility: ${({ visible }) => (visible ? 'visible' : 'hidden')};
  opacity: ${({ visible }) => (visible ? 1 : 0)};
  transition: opacity 0.2s;
  
  ${({ position }) => {
    switch (position) {
      case 'top':
        return `
          bottom: 100%;
          left: 50%;
          transform: translateX(-50%);
          margin-bottom: 5px;
        `;
      case 'right':
        return `
          left: 100%;
          top: 50%;
          transform: translateY(-50%);
          margin-left: 5px;
        `;
      case 'bottom':
        return `
          top: 100%;
          left: 50%;
          transform: translateX(-50%);
          margin-top: 5px;
        `;
      case 'left':
        return `
          right: 100%;
          top: 50%;
          transform: translateY(-50%);
          margin-right: 5px;
        `;
      default:
        return '';
    }
  }}
  
  ${({ rohitMode }) => rohitMode && `
    &:after {
      content: '👉 Rohit tip!';
      display: block;
      margin-top: 4px;
      font-style: italic;
      font-size: 10px;
      color: #808080;
    }
    
    @keyframes rohitBounce {
      0%, 100% { transform: translateX(-50%); }
      50% { transform: translateX(-50%) translateY(-3px); }
    }
    
    animation: ${Math.random() > 0.5 ? 'rohitBounce 1s infinite' : 'none'};
  `}
`;

export const Tooltip: React.FC<TooltipProps> = ({
  children,
  content,
  position = 'top',
  delay = 300,
  rohitMode = false,
}) => {
  const [visible, setVisible] = useState(false);
  const [timeoutId, setTimeoutId] = useState<number | null>(null);

  const handleMouseEnter = () => {
    const id = window.setTimeout(() => {
      setVisible(true);
    }, delay);
    setTimeoutId(id);
  };

  const handleMouseLeave = () => {
    if (timeoutId) {
      clearTimeout(timeoutId);
      setTimeoutId(null);
    }
    setVisible(false);
  };

  return (
    <TooltipContainer
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <TooltipTrigger>{children}</TooltipTrigger>
      <TooltipContent visible={visible} position={position} rohitMode={rohitMode}>
        {content}
      </TooltipContent>
    </TooltipContainer>
  );
}; 