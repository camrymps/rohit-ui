import React, { useState, type ChangeEvent } from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import type { RohitUITheme } from 'rohit-ui/theme/theme';

const LayoutContainer = styled.div<{ theme: RohitUITheme }>`
  display: flex;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.background.desktop};
`;

const Sidebar = styled.nav<{ theme: RohitUITheme }>`
  width: 300px;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  overflow-y: auto;
  background-color: ${({ theme }) => theme.colors.background.window};
  border-right: 2px solid ${({ theme }) => theme.colors.border.dark};
  padding: 1rem;
  z-index: 100;
`;

const MainContent = styled.main`
  flex: 1;
  margin-left: 300px;
  padding: 2rem;
  max-width: 900px;
`;

const SearchContainer = styled.div`
  margin-bottom: 1.5rem;
`;

const SearchInput = styled.input<{ theme: RohitUITheme }>`
  width: 100%;
  padding: 0.5rem;
  font-family: ${({ theme }) => theme.fonts.main};
  font-size: 14px;
  background-color: ${({ theme }) => theme.colors.background.main};
  color: ${({ theme }) => theme.colors.text.primary};
  border: 2px solid ${({ theme }) => theme.colors.border.dark};
  outline: none;

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

const NavGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const NavTitle = styled.h3<{ theme: RohitUITheme }>`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.text.primary};
  margin-bottom: 0.5rem;
  padding: 0.5rem;
  background-color: ${({ theme }) => theme.colors.background.main};
  border: 2px solid ${({ theme }) => theme.colors.border.dark};
  font-weight: bold;
`;

const NavList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const NavItem = styled.li`
  margin-bottom: 0.25rem;
`;

const NavLink = styled(Link)<{ $active?: boolean; theme: RohitUITheme }>`
  display: block;
  padding: 0.5rem;
  color: ${({ theme }) => theme.colors.text.primary};
  text-decoration: none;
  background-color: ${props => props.$active ? props.theme.colors.primary : props.theme.colors.background.main};
  color: ${props => props.$active ? props.theme.colors.background.main : props.theme.colors.text.primary};
  border: 2px solid ${({ theme }) => theme.colors.border.dark};
  transition: all 0.2s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.background.main};
  }
`;

const SubNavList = styled.ul`
  list-style: none;
  padding-left: 1rem;
  margin: 0.5rem 0;
`;

const SubNavItem = styled.li`
  margin-bottom: 0.25rem;
`;

const SubNavLink = styled(Link)<{ $active?: boolean; theme: RohitUITheme }>`
  display: block;
  padding: 0.25rem 0.5rem;
  color: ${({ theme }) => theme.colors.text.primary};
  text-decoration: none;
  background-color: ${props => props.$active ? props.theme.colors.primary : 'transparent'};
  color: ${props => props.$active ? props.theme.colors.background.main : props.theme.colors.text.primary};
  border: 1px solid ${({ theme }) => theme.colors.border.dark};
  transition: all 0.2s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.background.main};
  }
`;

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <LayoutContainer>
      <Sidebar>
        <SearchContainer>
          <SearchInput
            placeholder="Search documentation..."
            value={searchQuery}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setSearchQuery(e.target.value)}
          />
        </SearchContainer>

        <NavGroup>
          <NavTitle>Getting Started</NavTitle>
          <NavList>
            <NavItem>
              <NavLink to="/" $active={location.pathname === '/'}>
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/getting-started" $active={location.pathname === '/getting-started'}>
                Getting Started
              </NavLink>
            </NavItem>
          </NavList>
        </NavGroup>

        <NavGroup>
          <NavTitle>Basic Components</NavTitle>
          <NavList>
            <NavItem>
              <NavLink to="/components/button" $active={location.pathname === '/components/button'}>
                Button
              </NavLink>
              <SubNavList>
                <SubNavItem>
                  <SubNavLink to="/components/button#variants" $active={location.hash === '#variants'}>
                    Variants
                  </SubNavLink>
                </SubNavItem>
                <SubNavItem>
                  <SubNavLink to="/components/button#sizes" $active={location.hash === '#sizes'}>
                    Sizes
                  </SubNavLink>
                </SubNavItem>
                <SubNavItem>
                  <SubNavLink to="/components/button#states" $active={location.hash === '#states'}>
                    States
                  </SubNavLink>
                </SubNavItem>
              </SubNavList>
            </NavItem>
            <NavItem>
              <NavLink to="/components/checkbox" $active={location.pathname === '/components/checkbox'}>
                Checkbox
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/components/radio" $active={location.pathname === '/components/radio'}>
                Radio
              </NavLink>
            </NavItem>
          </NavList>
        </NavGroup>

        <NavGroup>
          <NavTitle>Complex Components</NavTitle>
          <NavList>
            <NavItem>
              <NavLink to="/components/window" $active={location.pathname === '/components/window'}>
                Window
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/components/dialog" $active={location.pathname === '/components/dialog'}>
                Dialog
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/components/menu" $active={location.pathname === '/components/menu'}>
                Menu
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/components/tabs" $active={location.pathname === '/components/tabs'}>
                Tabs
              </NavLink>
            </NavItem>
          </NavList>
        </NavGroup>
      </Sidebar>
      <MainContent>{children}</MainContent>
    </LayoutContainer>
  );
};

export default Layout; 