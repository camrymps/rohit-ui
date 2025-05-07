import React, { useState } from 'react';
import styled from 'styled-components';
import type { ReactNode } from 'react';

export interface WindowProps {
  title: string;
  children: ReactNode;
  width?: string;
  height?: string;
  initialPosition?: { x: number; y: number };
  resizable?: boolean;
  minimizable?: boolean;
  maximizable?: boolean;
  closable?: boolean;
  onClose?: () => void;
  active?: boolean;
  icon?: string;
}

const WindowWrapper = styled.div<{
  width: string;
  height: string;
  position: { x: number; y: number };
  active: boolean;
  isMaximized: boolean;
}>`
  position: absolute;
  top: ${({ position, isMaximized }) => isMaximized ? '0' : `${position.y}px`};
  left: ${({ position, isMaximized }) => isMaximized ? '0' : `${position.x}px`};
  width: ${({ width, isMaximized }) => isMaximized ? '100%' : width};
  height: ${({ height, isMaximized }) => isMaximized ? '100%' : height};
  background-color: ${({ theme }) => theme.colors.background.window};
  box-shadow: ${({ theme }) => theme.shadows.outset};
  display: flex;
  flex-direction: column;
  z-index: ${({ active }) => active ? 100 : 1};
  resize: ${({ isMaximized }) => isMaximized ? 'none' : 'both'};
  overflow: hidden;
  
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
`;

const TitleBar = styled.div<{ active: boolean }>`
  height: 25px;
  background-color: ${({ active, theme }) => 
    active ? theme.colors.primary : theme.colors.background.main};
  color: ${({ active, theme }) => 
    active ? 'white' : theme.colors.text.primary};
  display: flex;
  align-items: center;
  padding: 0 4px;
  font-family: ${({ theme }) => theme.fonts.main};
  font-weight: bold;
  font-size: 12px;
  user-select: none;
  cursor: move;
`;

const TitleBarIcon = styled.img`
  width: 16px;
  height: 16px;
  margin-right: 4px;
`;

const TitleBarText = styled.div`
  flex-grow: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 2px;
`;

const WindowButton = styled.button`
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

const WindowContent = styled.div`
  flex-grow: 1;
  padding: ${({ theme }) => theme.spacing.unit * 2}px;
  overflow: auto;
  background-color: ${({ theme }) => theme.colors.background.window};
`;

const StatusBar = styled.div`
  height: 20px;
  background-color: ${({ theme }) => theme.colors.background.main};
  border-top: 1px solid ${({ theme }) => theme.colors.border.dark};
  box-shadow: ${({ theme }) => theme.shadows.inset};
  display: flex;
  align-items: center;
  padding: 0 4px;
  font-family: ${({ theme }) => theme.fonts.main};
  font-size: 11px;
`;

// Easter egg: Rohit's face cursor when dragging windows
const rohitCursorCSS = `
  cursor: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><text y="28" font-size="24">👨‍💻</text></svg>'), auto;
`;

export const Window: React.FC<WindowProps> = ({
  title,
  children,
  width = '400px',
  height = '300px',
  initialPosition = { x: 50, y: 50 },
  resizable = true,
  minimizable = true,
  maximizable = true,
  closable = true,
  onClose,
  active = true,
  icon,
}) => {
  const [position, setPosition] = useState(initialPosition);
  const [isMaximized, setIsMaximized] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const [showRohitEasterEgg, setShowRohitEasterEgg] = useState(false);
  
  // Track window dragging
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!isMaximized) {
      setIsDragging(true);
      setDragOffset({
        x: e.clientX - position.x,
        y: e.clientY - position.y,
      });
      
      // Easter egg: 1% chance to show Rohit cursor
      if (Math.random() < 0.01) {
        setShowRohitEasterEgg(true);
      }
    }
  };
  
  const handleMouseMove = (e: MouseEvent) => {
    if (isDragging) {
      setPosition({
        x: e.clientX - dragOffset.x,
        y: e.clientY - dragOffset.y,
      });
    }
  };
  
  const handleMouseUp = () => {
    setIsDragging(false);
    setShowRohitEasterEgg(false);
  };
  
  // Add and remove event listeners for dragging
  React.useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
    } else {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    }
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging]);
  
  const toggleMaximize = () => {
    setIsMaximized(!isMaximized);
  };
  
  return (
    <WindowWrapper 
      width={width}
      height={height}
      position={position}
      active={active}
      isMaximized={isMaximized}
      style={{ cursor: showRohitEasterEgg ? 'grabbing' : undefined }}
    >
      <TitleBar 
        active={active} 
        onMouseDown={handleMouseDown}
        style={{ cursor: showRohitEasterEgg ? 'grabbing' : 'move' }}
      >
        {icon && <TitleBarIcon src={icon} alt="Window Icon" />}
        <TitleBarText>{title}</TitleBarText>
        <ButtonGroup>
          {minimizable && (
            <WindowButton>_</WindowButton>
          )}
          {maximizable && (
            <WindowButton onClick={toggleMaximize}>
              {isMaximized ? '❐' : '□'}
            </WindowButton>
          )}
          {closable && (
            <WindowButton onClick={onClose}>✕</WindowButton>
          )}
        </ButtonGroup>
      </TitleBar>
      <WindowContent>
        {children}
      </WindowContent>
      <StatusBar>
        Ready
      </StatusBar>
    </WindowWrapper>
  );
}; 