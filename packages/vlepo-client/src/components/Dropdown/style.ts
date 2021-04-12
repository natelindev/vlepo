import { margin, MarginProps, variant } from 'styled-system';

import styled from '@emotion/styled';

import { BaseNavLink } from '../NavLink/style';

export type BaseDropDownProps = {
  show?: boolean;
  variant?: 'left' | 'right';
};

export const BaseDropdownMenu = styled.div<BaseDropDownProps & MarginProps>`
  ${variant({
    variants: {
      left: {
        left: '5px',
      },
      right: {
        right: '5px',
      },
    },
  })}
  position: absolute;
  top: 100%;
  z-index: ${(props) => props.theme.zIndices.DropDownMenu};
  display: ${(props) => (props.show ? 'flex' : 'none')};
  flex-direction: column;
  float: left;
  min-width: 10rem;
  padding: 0.3rem;
  margin: 0.125rem 0 0;
  font-size: 1rem;
  color: ${(props) => props.theme.colors.backgroundSecondary};
  text-align: left;
  list-style: none;
  background-color: ${(props) => props.theme.colors.backgroundSecondary};
  background-clip: padding-box;
  box-shadow: ${(props) => props.theme.shadows.Dropdown};
  border-radius: 0.25rem;

  > ${BaseNavLink} {
    box-shadow: none;
  }

  ${margin}
`;

export const BaseDropdown = styled.div`
  cursor: pointer;
  margin-top: auto;
  margin-bottom: auto;
  position: relative;
  display: inline-block;
`;

export const DropdownToggle = styled.div`
  white-space: nowrap;
  cursor: pointer;

  &::after {
    display: inline-block;
    margin-left: 0.255em;
    vertical-align: 0.255em;
    content: '';
    border-top: 0.3em solid;
    border-right: 0.3em solid transparent;
    border-bottom: 0;
    border-left: 0.3em solid transparent;
  }

  &:empty::after {
    margin-left: 0;
  }
`;
