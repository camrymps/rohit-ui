import React from 'react';
import styled from 'styled-components';

export interface ProgressBarProps {
  value: number;
  max?: number;
  label?: string;
  showValue?: boolean;
  fullWidth?: boolean;
  rohitMode?: boolean; // Easter egg mode
}

const ProgressBarContainer = styled.div<{ fullWidth: boolean }>`
  display: flex;
  flex-direction: column;
  width: ${({ fullWidth }) => fullWidth ? '100%' : '200px'};
  font-family: ${({ theme }) => theme.fonts.main};
`;

const Label = styled.label`
  margin-bottom: 4px;
  font-size: 14px;
  display: flex;
  justify-content: space-between;
`;

const ProgressBarWrapper = styled.div`
  height: 16px;
  background-color: white;
  border: none;
  box-shadow: ${({ theme }) => theme.shadows.inset};
  position: relative;
  overflow: hidden;
`;

const ProgressBarFill = styled.div<{ 
  percentage: number; 
  rohitMode: boolean;
}>`
  height: 100%;
  width: ${({ percentage }) => `${percentage}%`};
  background-color: ${({ theme }) => theme.colors.primary};
  transition: width 0.3s ease;
  
  ${({ rohitMode }) => rohitMode && `
    background: repeating-linear-gradient(
      45deg,
      #ff00ff,
      #ff00ff 10px,
      #00ffff 10px,
      #00ffff 20px
    );
    
    @keyframes rohitMove {
      0% { background-position: 0 0; }
      100% { background-position: 28px 0; }
    }
    
    animation: rohitMove 1s linear infinite;
  `}
`;

export const ProgressBar: React.FC<ProgressBarProps> = ({
  value,
  max = 100,
  label,
  showValue = false,
  fullWidth = false,
  rohitMode = false,
}) => {
  // Ensure value is between 0 and max
  const clampedValue = Math.min(Math.max(0, value), max);
  const percentage = (clampedValue / max) * 100;
  
  return (
    <ProgressBarContainer fullWidth={fullWidth}>
      {(label || showValue) && (
        <Label>
          {label && <span>{label}</span>}
          {showValue && <span>{`${clampedValue}/${max}`}</span>}
        </Label>
      )}
      <ProgressBarWrapper>
        <ProgressBarFill 
          percentage={percentage} 
          rohitMode={rohitMode}
        />
      </ProgressBarWrapper>
    </ProgressBarContainer>
  );
}; 