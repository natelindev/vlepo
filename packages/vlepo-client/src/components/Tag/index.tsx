import Link from 'next/link';
import React from 'react';

import { BaseTag } from './style';

type TagProps = {
  name: string;
  href: string;
  mainColor?: string | null;
  secondaryColor?: string | null;
};

const Tag = (props: TagProps): React.ReactElement => {
  const { name, href, mainColor, secondaryColor } = props;
  return (
    <Link href={href} passHref>
      <BaseTag mainColor={mainColor} secondaryColor={secondaryColor}>
        {name}
      </BaseTag>
    </Link>
  );
};

export default Tag;
