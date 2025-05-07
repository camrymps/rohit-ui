import React, { useState } from 'react';
import styled from 'styled-components';
import type { ReactNode } from 'react';

export interface AccordionItem {
  id: string;
  title: string;
  content: ReactNode;
  disabled?: boolean;
  icon?: string;
}

export interface AccordionProps {
  items: AccordionItem[];
  defaultExpandedIds?: string[];
  allowMultiple?: boolean;
  rohitMode?: boolean; // Easter egg mode
}

const AccordionContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.border.dark};
  background-color: ${({ theme }) => theme.colors.background.window};
`;

const AccordionItemContainer = styled.div<{ isLast: boolean }>`
  display: flex;
  flex-direction: column;
  border-bottom: ${({ isLast, theme }) =>
    isLast ? 'none' : `1px solid ${theme.colors.border.dark}`};
`;

const AccordionHeader = styled.div<{ expanded: boolean; disabled?: boolean; rohitMode?: boolean }>`
  padding: 8px 12px;
  font-family: ${({ theme }) => theme.fonts.main};
  font-size: 14px;
  background-color: ${({ theme }) => theme.colors.background.main};
  color: ${({ disabled, theme }) =>
    disabled ? theme.colors.text.disabled : theme.colors.text.primary};
  cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};
  display: flex;
  align-items: center;
  user-select: none;
  position: relative;
  
  ${({ expanded, rohitMode }) =>
    expanded && rohitMode &&
    `
    &:after {
      content: '🎉';
      position: absolute;
      right: 30px;
      font-size: 14px;
      animation: rohitPop 0.5s;
    }
    
    @keyframes rohitPop {
      0% { transform: scale(0); }
      70% { transform: scale(1.2); }
      100% { transform: scale(1); }
    }
  `}
`;

const AccordionIcon = styled.img`
  width: 16px;
  height: 16px;
  margin-right: 8px;
`;

const AccordionArrow = styled.span<{ expanded: boolean }>`
  margin-left: auto;
  font-size: 10px;
  transform: ${({ expanded }) => (expanded ? 'rotate(90deg)' : 'rotate(0)')};
  transition: transform 0.2s;
  
  &:after {
    content: '▶';
  }
`;

const AccordionContent = styled.div<{ expanded: boolean }>`
  padding: ${({ expanded }) => (expanded ? '12px' : '0')};
  height: ${({ expanded }) => (expanded ? 'auto' : '0')};
  overflow: hidden;
  transition: padding 0.2s;
  display: ${({ expanded }) => (expanded ? 'block' : 'none')};
`;

export const Accordion: React.FC<AccordionProps> = ({
  items,
  defaultExpandedIds = [],
  allowMultiple = false,
  rohitMode = false,
}) => {
  const [expandedIds, setExpandedIds] = useState<string[]>(defaultExpandedIds);

  const toggleItem = (id: string) => {
    if (expandedIds.includes(id)) {
      setExpandedIds(expandedIds.filter((itemId) => itemId !== id));
    } else {
      if (allowMultiple) {
        setExpandedIds([...expandedIds, id]);
      } else {
        setExpandedIds([id]);
      }
    }
  };

  // Easter egg: 5% chance to add "Rohit's section" to accordion titles
  const processedItems = rohitMode
    ? items.map(item => {
        if (Math.random() < 0.05 && !item.disabled) {
          return { ...item, title: `${item.title} (Rohit's section)` };
        }
        return item;
      })
    : items;

  return (
    <AccordionContainer>
      {processedItems.map((item, index) => {
        const isExpanded = expandedIds.includes(item.id);
        return (
          <AccordionItemContainer key={item.id} isLast={index === items.length - 1}>
            <AccordionHeader
              expanded={isExpanded}
              disabled={item.disabled}
              rohitMode={rohitMode}
              onClick={() => !item.disabled && toggleItem(item.id)}
            >
              {item.icon && <AccordionIcon src={item.icon} alt="" />}
              {item.title}
              <AccordionArrow expanded={isExpanded} />
            </AccordionHeader>
            <AccordionContent expanded={isExpanded}>
              {item.content}
            </AccordionContent>
          </AccordionItemContainer>
        );
      })}
    </AccordionContainer>
  );
}; 