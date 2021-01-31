import Link from 'next/link';
import React, { ReactElement } from 'react';

import styled from '@emotion/styled';

const BaseTag = styled.a`
  color: #f8f9fa;
  border-color: #f8f9fa;

  &:hover {
    color: #212529;
    background-color: #f8f9fa;
    border-color: #f8f9fa;
  }

  &:focus,
  &.focus {
    box-shadow: 0 0 0 0.2rem rgba(248, 249, 250, 0.5);
  }

  &.disabled,
  &:disabled {
    color: #f8f9fa;
    background-color: transparent;
  }

  &:not(:disabled):not(.disabled):active {
    color: #212529;
    background-color: #f8f9fa;
    border-color: #f8f9fa;
  }

  &:not(:disabled):not(.disabled):active:focus {
    box-shadow: 0 0 0 0.2rem rgba(248, 249, 250, 0.5);
  }
`;

type TagProps = {
  name: string;
  href: string;
};

const Tag = (props: TagProps): ReactElement => {
  const { name, href } = props;
  return (
    <Link href={href} passHref>
      <BaseTag>{name}</BaseTag>
    </Link>
  );
};

export default Tag;
