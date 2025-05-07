import React, { useState } from 'react';
import styled from 'styled-components';
import type { ReactNode } from 'react';

export interface TabItem {
  id: string;
  label: string;
  content: ReactNode;
  disabled?: boolean;
  icon?: string;
}

export interface TabsProps {
  items: TabItem[];
  defaultActiveTab?: string;
  onChange?: (tabId: string) => void;
  rohitMode?: boolean; // Easter egg mode
}

const TabsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const TabsHeader = styled.div`
  display: flex;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border.dark};
`;

const TabItem = styled.div<{ active: boolean; disabled?: boolean; rohitMode?: boolean }>`
  padding: 6px 12px;
  font-family: ${({ theme }) => theme.fonts.main};
  font-size: 14px;
  background-color: ${({ active, theme }) =>
    active ? theme.colors.background.window : theme.colors.background.main};
  color: ${({ disabled, theme }) =>
    disabled ? theme.colors.text.disabled : theme.colors.text.primary};
  cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};
  border: 1px solid ${({ theme }) => theme.colors.border.dark};
  border-bottom: ${({ active }) => active ? 'none' : '1px solid'};
  margin-right: 2px;
  margin-bottom: ${({ active }) => active ? '-1px' : '0'};
  position: relative;
  display: flex;
  align-items: center;
  user-select: none;
  
  ${({ active, rohitMode }) =>
    active && rohitMode &&
    `
    &:after {
      content: '👍';
      font-size: 12px;
      position: absolute;
      top: -8px;
      right: -4px;
      transform: rotate(15deg);
    }
  `}
  
  &:hover:not([disabled]) {
    background-color: ${({ active, theme, rohitMode }) =>
      active
        ? theme.colors.background.window
        : rohitMode
        ? '#ffffcc'
        : theme.colors.background.main};
  }
`;

const TabIcon = styled.img`
  width: 16px;
  height: 16px;
  margin-right: 6px;
`;

const TabContent = styled.div`
  padding: 16px;
  background-color: ${({ theme }) => theme.colors.background.window};
  border: 1px solid ${({ theme }) => theme.colors.border.dark};
  border-top: none;
  min-height: 100px;
`;

export const Tabs: React.FC<TabsProps> = ({
  items,
  defaultActiveTab,
  onChange,
  rohitMode = false,
}) => {
  const [activeTab, setActiveTab] = useState(defaultActiveTab || (items.length > 0 ? items[0].id : ''));

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
    if (onChange) {
      onChange(tabId);
    }
  };

  // Easter egg: 5% chance to add "Rohit's Tab" text to tab label
  const processedItems = rohitMode
    ? items.map(item => {
        if (Math.random() < 0.05 && !item.disabled) {
          return { ...item, label: `${item.label} (Rohit's Tab)` };
        }
        return item;
      })
    : items;

  const activeTabItem = processedItems.find(item => item.id === activeTab);

  return (
    <TabsContainer>
      <TabsHeader>
        {processedItems.map((item) => (
          <TabItem
            key={item.id}
            active={activeTab === item.id}
            disabled={item.disabled}
            rohitMode={rohitMode}
            onClick={() => !item.disabled && handleTabClick(item.id)}
          >
            {item.icon && <TabIcon src={item.icon} alt="" />}
            {item.label}
          </TabItem>
        ))}
      </TabsHeader>
      {activeTabItem && (
        <TabContent>
          {activeTabItem.content}
        </TabContent>
      )}
    </TabsContainer>
  );
}; 