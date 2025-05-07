import React, { useEffect } from 'react';
import styled from 'styled-components';
import type { ReactNode } from 'react';
import { Button } from '../Button';

export interface DialogProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
  buttons?: {
    label: string;
    onClick: () => void;
    variant?: 'primary' | 'secondary' | 'success' | 'error' | 'warning' | 'info';
    rohitMode?: boolean;
  }[];
  width?: string;
  height?: string;
  showCloseButton?: boolean;
  icon?: string;
  rohitMode?: boolean; // Easter egg mode
}

const DialogOverlay = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const DialogContainer = styled.div<{ width: string; height: string; rohitMode: boolean }>`
  background-color: ${({ theme }) => theme.colors.background.window};
  border: 1px solid ${({ theme }) => theme.colors.border.default};
  box-shadow: ${({ theme }) => theme.shadows.outset};
  display: flex;
  flex-direction: column;
  width: ${({ width }) => width};
  ${({ height }) => height && `height: ${height};`}
  max-width: 90vw;
  max-height: 90vh;
  position: relative;
  
  ${({ rohitMode }) =>
    rohitMode &&
    `
    @keyframes rohitShake {
      0%, 100% { transform: translateX(0); }
      10%, 30%, 50%, 70%, 90% { transform: translateX(-2px); }
      20%, 40%, 60%, 80% { transform: translateX(2px); }
    }
    
    animation: rohitShake 0.5s;
  `}
`;

const DialogHeader = styled.div`
  height: 25px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  display: flex;
  align-items: center;
  padding: 0 4px;
  font-family: ${({ theme }) => theme.fonts.main};
  font-weight: bold;
  font-size: 12px;
  user-select: none;
`;

const DialogTitle = styled.div`
  flex-grow: 1;
  display: flex;
  align-items: center;
`;

const DialogIcon = styled.img`
  width: 16px;
  height: 16px;
  margin-right: 6px;
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

const DialogContent = styled.div`
  padding: 16px;
  overflow: auto;
  flex-grow: 1;
`;

const DialogFooter = styled.div`
  padding: 12px 16px;
  display: flex;
  justify-content: flex-end;
  gap: 8px;
  background-color: ${({ theme }) => theme.colors.background.main};
  border-top: 1px solid ${({ theme }) => theme.colors.border.dark};
`;

export const Dialog: React.FC<DialogProps> = ({
  isOpen,
  onClose,
  title,
  children,
  buttons = [{ label: 'OK', onClick: onClose }],
  width = '400px',
  height,
  showCloseButton = true,
  icon,
  rohitMode = false,
}) => {
  // Handle escape key to close dialog
  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (isOpen && event.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscKey);
      // Prevent scrolling of background content
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscKey);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  // Easter egg: 10% chance to add "Rohit says:" prefix to dialog title
  const processedTitle = rohitMode && Math.random() < 0.1
    ? `Rohit says: ${title}`
    : title;

  if (!isOpen) return null;

  return (
    <DialogOverlay isOpen={isOpen} onClick={onClose}>
      <DialogContainer
        width={width}
        height={height || 'auto'}
        rohitMode={rohitMode}
        onClick={(e) => e.stopPropagation()}
      >
        <DialogHeader>
          <DialogTitle>
            {icon && <DialogIcon src={icon} alt="" />}
            {processedTitle}
          </DialogTitle>
          {showCloseButton && (
            <CloseButton onClick={onClose}>✕</CloseButton>
          )}
        </DialogHeader>
        <DialogContent>{children}</DialogContent>
        <DialogFooter>
          {buttons.map((button, index) => (
            <Button
              key={index}
              onClick={button.onClick}
              variant={button.variant}
              rohitMode={button.rohitMode || rohitMode}
            >
              {button.label}
            </Button>
          ))}
        </DialogFooter>
      </DialogContainer>
    </DialogOverlay>
  );
}; 