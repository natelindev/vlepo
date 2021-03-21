import React from 'react';

import { Search } from '@emotion-icons/material-outlined';

import { Input, InputGroup, InputGroupAddon, InputGroupText } from './style';

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
