import Link from 'next/link';
import React, { ReactElement } from 'react';

import styled from '@emotion/styled';

import { ZIndex } from './ZIndex';

const BaseTag = styled.a`
  color: #f8f9fa;

  margin-bottom: auto;

  margin-left: 0.15rem;
  margin-right: 0.15rem;

  text-decoration: none;
  padding: 0.3rem;
  border: 1px solid #f8f9fa;
  border-radius: 0.2rem;

  transition: all 0.1s ease-in;

  &:hover {
    color: #212529;
    background-color: rgba(255, 255, 255, 0.5);
    border-color: #f8f9fa;
    backdrop-filter: saturate(180%) blur(5px);
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

  z-index: ${ZIndex.Tags};
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
