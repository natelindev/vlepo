import { a } from 'react-spring';
import { display, DisplayProps, margin, MarginProps, width, WidthProps } from 'styled-system';

import styled from '@emotion/styled';

import SearchBar from '../SearchBar';

export const BaseNavbar = styled.nav`
  display: flex;
  position: fixed;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  flex-flow: row nowrap;
  box-shadow: ${(props) => props.theme.shadows.Navbar};
  background-color: ${(props) => props.theme.colors.navbar};
  backdrop-filter: saturate(180%) blur(5px);
  height: ${(props) => props.theme.heights.navbar};
  z-index: ${(props) => props.theme.zIndices.Navbar};
`;

export const NavBrand = styled.a<MarginProps & DisplayProps>`
  display: inline-block;
  padding-top: 0.3125rem;
  padding-bottom: 0.3125rem;
  font-size: 1.25rem;
  line-height: inherit;
  white-space: nowrap;
  text-decoration: none;
  color: ${(props) => props.theme.colors.text};
  ${margin}
  ${display}
`;

export const NavbarCollapse = styled.div`
  flex-basis: 100%;
  flex-grow: 1;
`;

export const LeftNavCollapse = styled(NavbarCollapse)<DisplayProps>`
  margin-left: 0.5rem;
  flex-grow: 0;
  flex-basis: auto;
  ${display}
  margin-top: auto;
  margin-bottom: auto;
  @media only screen and (max-width: ${(props) => props.theme.breakpoints[1]}) {
    position: absolute;
    flex-direction: column;
    top: 100%;
    height: auto;
  }
`;

export const RightNavCollapse = styled(NavbarCollapse)<DisplayProps>`
  flex-grow: 0;
  ${display}
`;

export const NavbarNav = styled.div`
  display: flex;
  padding-left: 0;
  margin-bottom: 0;
  list-style: none;
  height: 100%;
`;

export const NavItem = styled.li<WidthProps & MarginProps>`
  cursor: pointer;
  ${width}
  ${margin}
  text-decoration: none;
`;

export const NavSearchBar = styled(SearchBar)`
  margin-left: auto;
  margin-right: 0.5rem;
`;

export const NavbarToggler = styled.div<DisplayProps & MarginProps>`
  ${display}
  ${margin}
  width: 2.2rem;
  height: 2.2rem;
  max-width: 2.2rem;
  max-height: 2.2rem;
  min-width: 2.2rem;
  min-height: 2.2rem;
  margin-top: 1.1rem;
  margin-left: 1rem;
  margin-right: 0;
  margin-bottom: auto;
`;

export const TogglerBar = styled(a.div)`
  background-color: ${(props) => props.theme.colors.text};
  display: block;
  width: 1.5em;
  height: 2px;
  border-radius: 1px;
  margin-top: 0.3rem;
`;
