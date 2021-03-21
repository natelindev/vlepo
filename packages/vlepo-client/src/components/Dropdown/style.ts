import styled from '@emotion/styled';

import { ZIndex } from '../ZIndex';

export type BaseDropDownProps = {
  show?: boolean;
  position: 'left' | 'right';
};

export const BaseDropdownMenu = styled.div<BaseDropDownProps>`
  position: absolute;
  top: 100%;
  ${(props) => props.position}: 5px;
  z-index: ${ZIndex.DropDownMenu};
  display: ${(props) => (props.show ? 'flex' : 'none')};
  flex-direction: column;
  float: left;
  min-width: 10rem;
  padding: 0.3rem;
  margin: 0.125rem 0 0;
  font-size: 1rem;
  color: #212529;
  text-align: left;
  list-style: none;
  background-color: #fff;
  background-clip: padding-box;
  box-shadow: 0 12px 28px 0 rgba(0, 0, 0, 0.2), 0 2px 4px 0 rgba(0, 0, 0, 0.1),
    inset 0 0 0 1px rgba(255, 255, 255, 0.5);
  border-radius: 0.25rem;

  > *:hover {
    border-radius: 0.4rem;
    transition: 0.1s background-color ease-in;
    background-color: #f2f2f2;
  }
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
