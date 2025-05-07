import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import type { ReactNode } from 'react';

export interface MenuItem {
  id: string;
  label: string;
  disabled?: boolean;
  onClick?: () => void;
  divider?: boolean;
  submenu?: MenuItem[];
  shortcut?: string;
  icon?: string;
}

export interface MenuProps {
  items: MenuItem[];
  trigger: ReactNode;
  align?: 'left' | 'right';
  rohitMode?: boolean; // Easter egg mode
}

const MenuContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const MenuTrigger = styled.div`
  display: inline-block;
  cursor: pointer;
`;

const MenuDropdown = styled.div<{ visible: boolean; align: 'left' | 'right' }>`
  position: absolute;
  top: 100%;
  ${({ align }) => (align === 'left' ? 'left: 0;' : 'right: 0;')}
  min-width: 180px;
  background-color: ${({ theme }) => theme.colors.background.main};
  border: 1px solid ${({ theme }) => theme.colors.border.default};
  box-shadow: ${({ theme }) => theme.shadows.outset};
  z-index: 1000;
  display: ${({ visible }) => (visible ? 'block' : 'none')};
  padding: 2px;
`;

const MenuItem = styled.div<{ disabled?: boolean; active?: boolean; rohitMode?: boolean }>`
  padding: 4px 20px 4px 8px;
  font-family: ${({ theme }) => theme.fonts.main};
  font-size: 14px;
  color: ${({ disabled, theme }) =>
    disabled ? theme.colors.text.disabled : theme.colors.text.primary};
  cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};
  display: flex;
  align-items: center;
  position: relative;
  
  ${({ active, theme }) =>
    active &&
    `
    background-color: ${theme.colors.primary};
    color: white;
  `}
  
  &:hover:not([disabled]) {
    background-color: ${({ theme, rohitMode }) => 
      rohitMode ? '#FF00FF' : theme.colors.primary};
    color: white;
  }
  
  ${({ rohitMode }) =>
    rohitMode &&
    `
    &:hover:not([disabled])::after {
      content: '👈';
      position: absolute;
      right: 4px;
      animation: rohitPoint 0.5s infinite alternate;
    }
    
    @keyframes rohitPoint {
      from { transform: translateX(0); }
      to { transform: translateX(-3px); }
    }
  `}
`;

const MenuDivider = styled.div`
  height: 1px;
  background-color: ${({ theme }) => theme.colors.border.dark};
  margin: 4px 0;
`;

const MenuItemIcon = styled.img`
  width: 16px;
  height: 16px;
  margin-right: 8px;
`;

const MenuItemShortcut = styled.span`
  margin-left: auto;
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: 12px;
`;

const SubMenuArrow = styled.span`
  margin-left: auto;
  &:after {
    content: '▶';
    font-size: 10px;
  }
`;

const SubMenu = styled.div<{ visible: boolean }>`
  position: absolute;
  left: 100%;
  top: -2px;
  min-width: 180px;
  background-color: ${({ theme }) => theme.colors.background.main};
  border: 1px solid ${({ theme }) => theme.colors.border.default};
  box-shadow: ${({ theme }) => theme.shadows.outset};
  z-index: 1001;
  display: ${({ visible }) => (visible ? 'block' : 'none')};
  padding: 2px;
`;

export const Menu: React.FC<MenuProps> = ({
  items,
  trigger,
  align = 'left',
  rohitMode = false,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  // Close the menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        setActiveSubmenu(null);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const handleMenuItemClick = (item: MenuItem) => {
    if (item.disabled) return;
    
    if (item.submenu) {
      setActiveSubmenu(activeSubmenu === item.id ? null : item.id);
    } else {
      if (item.onClick) {
        item.onClick();
      }
      setIsOpen(false);
      setActiveSubmenu(null);
    }
  };

  // Easter egg: 5% chance to add "Rohit's Choice" to menu items
  const processedItems = rohitMode 
    ? items.map(item => {
        if (Math.random() < 0.05 && !item.divider) {
          return { ...item, label: `${item.label} (Rohit's Choice!)` };
        }
        return item;
      })
    : items;

  const renderMenuItems = (menuItems: MenuItem[]) => {
    return menuItems.map((item) => {
      if (item.divider) {
        return <MenuDivider key={item.id} />;
      }

      return (
        <MenuItem
          key={item.id}
          disabled={item.disabled}
          active={activeSubmenu === item.id}
          rohitMode={rohitMode}
          onClick={() => handleMenuItemClick(item)}
        >
          {item.icon && <MenuItemIcon src={item.icon} alt="" />}
          {item.label}
          {item.shortcut && <MenuItemShortcut>{item.shortcut}</MenuItemShortcut>}
          {item.submenu && <SubMenuArrow />}
          
          {item.submenu && (
            <SubMenu visible={activeSubmenu === item.id}>
              {renderMenuItems(item.submenu)}
            </SubMenu>
          )}
        </MenuItem>
      );
    });
  };

  return (
    <MenuContainer ref={menuRef}>
      <MenuTrigger onClick={() => setIsOpen(!isOpen)}>
        {trigger}
      </MenuTrigger>
      <MenuDropdown visible={isOpen} align={align}>
        {renderMenuItems(processedItems)}
      </MenuDropdown>
    </MenuContainer>
  );
}; 