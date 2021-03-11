import React from 'react';

import { Search } from '@emotion-icons/material-outlined';
import styled from '@emotion/styled';

const InputGroup = styled.div`
  position: relative;
  display: flex;
  align-items: stretch;

  background-color: #ffffff;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;

  flex-grow: 0;
  transition: all 0.12s;
  text-transform: none;

  &:focus-within {
    box-shadow: 0 2px 0 0 #5cc6ee;
    flex-grow: 1;
  }
`;

const InputGroupAddon = styled.div`
  margin-right: -1px;
  display: flex;
`;

const InputGroupText = styled.span`
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;

  border: none;
  background: none;
  padding: 0;
  padding-top: 0.375rem;
  padding-bottom: 0.375rem;
  padding-left: 0.5rem;

  display: flex;
  align-items: center;
  margin-bottom: 0;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #495057;
  text-align: center;
  white-space: nowrap;
  border-radius: 0.25rem;
`;

const Input = styled.input`
  border: none;
  background: none;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  position: relative;
  flex: 1 1 auto;
  width: 1%;
  margin-bottom: 0;
  display: block;
  height: calc(1.5em + 0.75rem + 2px);
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #495057;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  overflow: visible;
  margin: 0;
  font-family: inherit;
  outline: none;
`;

export interface SearchBarProps {
  placeHolder?: string;
  className?: string;
}

const SearchBar = (props: SearchBarProps): React.ReactElement => {
  const { placeHolder = 'Search', className } = props;
  return (
    <InputGroup className={className}>
      <InputGroupAddon>
        <InputGroupText>
          <Search height="24px" width="24px" />
        </InputGroupText>
      </InputGroupAddon>
      <Input placeholder={placeHolder} />
    </InputGroup>
  );
};

export default SearchBar;
