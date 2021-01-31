import React from 'react';
import HoverShare from 'src/components/HoverShare';

import { useScrollPosition } from '../hooks/scrollPosition';

export default () => {
  const scrollPosition = useScrollPosition();
  return <>{scrollPosition > 30 && <HoverShare />}</>;
};
