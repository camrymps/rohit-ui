import React from 'react';
import type { InputHTMLAttributes } from 'react';
import styled from 'styled-components';

export interface RadioProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string;
  rohitMode?: boolean; // Easter egg mode
}

const RadioContainer = styled.label`
  display: flex;
  align-items: center;
  font-family: ${({ theme }) => theme.fonts.main};
  font-size: 14px;
  cursor: pointer;
  user-select: none;
`;

const HiddenRadio = styled.input.attrs({ type: 'radio' })`
  position: absolute;
  opacity: 0;
  height: 0;
  width: 0;
`;

const StyledRadio = styled.div<{ checked: boolean; rohitMode: boolean }>`
  width: 12px;
  height: 12px;
  background-color: white;
  border: 1px solid ${({ theme }) => theme.colors.border.default};
  border-radius: 50%;
  box-shadow: ${({ theme }) => theme.shadows.inset};
  margin-right: 8px;
  position: relative;
  
  ${({ checked }) => checked && `
    &:after {
      content: '';
      position: absolute;
      top: 3px;
      left: 3px;
      width: 4px;
      height: 4px;
      background-color: black;
      border-radius: 50%;
    }
  `}
  
  ${({ rohitMode, checked }) => rohitMode && checked && `
    &:after {
      content: '👍';
      position: absolute;
      top: -3px;
      left: -1px;
      font-size: 10px;
      background: none;
      border-radius: 0;
    }
  `}
`;

export const Radio: React.FC<RadioProps> = ({ 
  label, 
  checked = false,
  rohitMode = false,
  onChange,
  ...props 
}) => {
  return (
    <RadioContainer>
      <HiddenRadio 
        checked={checked} 
        onChange={onChange} 
        {...props} 
      />
      <StyledRadio checked={!!checked} rohitMode={rohitMode} />
      {label && <span>{label}</span>}
    </RadioContainer>
  );
}; 