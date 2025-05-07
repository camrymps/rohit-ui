import React from 'react';
import type { InputHTMLAttributes } from 'react';
import styled from 'styled-components';

export interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string;
  rohitMode?: boolean; // Easter egg mode
}

const CheckboxContainer = styled.label`
  display: flex;
  align-items: center;
  font-family: ${({ theme }) => theme.fonts.main};
  font-size: 14px;
  cursor: pointer;
  user-select: none;
`;

const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  position: absolute;
  opacity: 0;
  height: 0;
  width: 0;
`;

const StyledCheckbox = styled.div<{ checked: boolean; rohitMode: boolean }>`
  width: 13px;
  height: 13px;
  background-color: white;
  border: 1px solid ${({ theme }) => theme.colors.border.default};
  box-shadow: ${({ theme }) => theme.shadows.inset};
  margin-right: 8px;
  position: relative;
  
  ${({ checked }) => checked && `
    &:after {
      content: '';
      position: absolute;
      top: 1px;
      left: 3px;
      width: 5px;
      height: 8px;
      border: solid black;
      border-width: 0 2px 2px 0;
      transform: rotate(45deg);
    }
  `}
  
  ${({ rohitMode, checked }) => rohitMode && checked && `
    &:after {
      content: '🤓';
      position: absolute;
      top: -2px;
      left: 0;
      font-size: 10px;
      border: none;
      transform: none;
    }
  `}
`;

export const Checkbox: React.FC<CheckboxProps> = ({ 
  label, 
  checked = false,
  rohitMode = false,
  onChange,
  ...props 
}) => {
  return (
    <CheckboxContainer>
      <HiddenCheckbox 
        checked={checked} 
        onChange={onChange} 
        {...props} 
      />
      <StyledCheckbox checked={!!checked} rohitMode={rohitMode} />
      {label && <span>{label}</span>}
    </CheckboxContainer>
  );
}; 