import React, { MouseEventHandler, useRef, useState } from 'react';
import { useOnClickOutside } from 'src/hooks/useOnClickOutside';

import { BaseDropdown, BaseDropdownMenu } from './style';

type DropProps<P> = {
  className?: string;
  position?: 'left' | 'right';
  children: [React.ReactElement<P>, ...React.ReactNode[]];
};

const DropDown = <P extends { onClick: (e: MouseEventHandler) => void }>(props: DropProps<P>) => {
  const { children, className, position = 'left' } = props;
  const [showDropDown, setShowDropDown] = useState(false);
  const dropDownRef = useRef(null);

  useOnClickOutside(dropDownRef, () => {
    setShowDropDown(false);
  });

  const newProps: Partial<{ onClick: (e: MouseEventHandler) => void }> = {
    onClick: () => setShowDropDown(!showDropDown),
  };

  return (
    <BaseDropdown ref={dropDownRef}>
      {(children &&
        children.length > 0 &&
        React.isValidElement(children[0]) &&
        typeof children[0] !== 'number') ||
      typeof children[0] !== 'string' ||
      typeof children[0] !== 'undefined'
        ? React.cloneElement(children[0], newProps)
        : children[0]}
      <BaseDropdownMenu position={position} show={showDropDown} className={className}>
        {children && children.length > 1 && children.slice(1)}
      </BaseDropdownMenu>
    </BaseDropdown>
  );
};

export { DropdownToggle } from './style';

export default DropDown;
