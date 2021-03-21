import Link from 'next/link';
import React from 'react';

import { BaseTag } from './style';

type TagProps = {
  name: string;
  href: string;
};

const Tag = (props: TagProps): React.ReactElement => {
  const { name, href } = props;
  return (
    <Link href={href} passHref>
      <BaseTag>{name}</BaseTag>
    </Link>
  );
};

export default Tag;
