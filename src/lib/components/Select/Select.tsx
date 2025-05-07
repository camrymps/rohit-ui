import React from 'react';
import type { SelectHTMLAttributes } from 'react';
import styled from 'styled-components';

export interface SelectOption {
  value: string;
  label: string;
}

export interface SelectProps extends Omit<SelectHTMLAttributes<HTMLSelectElement>, 'onChange'> {
  options: SelectOption[];
  label?: string;
  error?: string;
  fullWidth?: boolean;
  onChange?: (value: string) => void;
  rohitMode?: boolean; // Easter egg mode
}

const SelectContainer = styled.div<{ fullWidth: boolean }>`
  display: flex;
  flex-direction: column;
  width: ${({ fullWidth }) => fullWidth ? '100%' : 'auto'};
  font-family: ${({ theme }) => theme.fonts.main};
`;

const Label = styled.label`
  margin-bottom: 4px;
  font-size: 14px;
`;

const SelectWrapper = styled.div<{ hasError: boolean }>`
  position: relative;
  display: inline-block;
  
  &:after {
    content: '';
    position: absolute;
    top: 8px;
    right: 8px;
    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-top: 5px solid black;
    pointer-events: none;
  }
  
  ${({ hasError }) => hasError && `
    select {
      border: 1px solid red;
    }
  `}
`;

const StyledSelect = styled.select<{ rohitMode: boolean }>`
  padding: 4px 24px 4px 8px;
  height: 21px;
  background-color: white;
  border: none;
  box-shadow: ${({ theme }) => theme.shadows.inset};
  font-family: ${({ theme }) => theme.fonts.main};
  font-size: 14px;
  appearance: none;
  
  &:focus {
    outline: 1px dotted ${({ theme }) => theme.colors.border.default};
    outline-offset: -4px;
  }
  
  ${({ rohitMode }) => rohitMode && `
    option {
      &:nth-child(odd) {
        background-color: #ffffcc;
      }
    }
    
    @keyframes rohitSpin {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }
    
    &:focus + .rohit-spinner {
      display: block;
    }
  `}
`;

const ErrorText = styled.div`
  color: ${({ theme }) => theme.colors.error};
  font-size: 12px;
  margin-top: 4px;
`;

const RohitSpinner = styled.div`
  display: none;
  position: absolute;
  top: 3px;
  right: 24px;
  width: 15px;
  height: 15px;
  font-size: 15px;
  animation: rohitSpin 2s linear infinite;
`;

export const Select: React.FC<SelectProps> = ({
  options,
  label,
  error,
  fullWidth = false,
  onChange,
  rohitMode = false,
  ...props
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (onChange) {
      onChange(e.target.value);
    }
  };
  
  return (
    <SelectContainer fullWidth={fullWidth}>
      {label && <Label>{label}</Label>}
      <SelectWrapper hasError={!!error}>
        <StyledSelect 
          onChange={handleChange} 
          rohitMode={rohitMode}
          {...props}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </StyledSelect>
        {rohitMode && <RohitSpinner className="rohit-spinner">🧠</RohitSpinner>}
      </SelectWrapper>
      {error && <ErrorText>{error}</ErrorText>}
    </SelectContainer>
  );
}; 