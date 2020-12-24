import * as React from 'react';
import { InputGroup, Input, InputGroupAddon, InputGroupText } from 'reactstrap';
import './SearchBar.scoped.scss';

export interface SearchBarProps {
  placeHolder?: string;
}

const SearchBar = (props: SearchBarProps): React.ReactElement => {
  const { placeHolder = '搜索' } = props;
  return (
    <InputGroup>
      <InputGroupAddon addonType="prepend">
        <InputGroupText>
          <i className="material-icons">search</i>
        </InputGroupText>
      </InputGroupAddon>
      <Input placeholder={placeHolder} />
    </InputGroup>
  );
};

export default SearchBar;
