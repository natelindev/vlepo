import Bricks, { SizeDetail } from 'bricks.js';
import React, { useEffect, useRef } from 'react';

interface MasonryProps {
  packed: string;
  sizes: SizeDetail[];
  position?: boolean;
  children?: React.ReactNode;
}

export default function Masonry(props: MasonryProps): React.ReactElement {
  const { packed, sizes, children, position } = props;
  const masonryContainer = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const instance = Bricks({
      container: masonryContainer.current as Node,
      packed,
      sizes,
      position,
    });
    instance.resize(true);
    if (children) {
      instance.pack();
    }
    return () => {};
  }, [packed, sizes, children, position]);

  return <div ref={masonryContainer}>{children}</div>;
}
