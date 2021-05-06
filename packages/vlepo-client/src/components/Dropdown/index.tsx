import React, { MouseEventHandler, useRef, useState } from 'react';
import { useOnClickOutside } from 'src/hooks/useOnClickOutside';

import { BaseDropdown, BaseDropdownMenu } from './style';

type DropProps<P> = {
  className?: string;
  variant?: 'left' | 'right';
  children: [React.ReactElement<P>, ...React.ReactNode[]];
} & Omit<React.ComponentProps<typeof BaseDropdownMenu>, 'variant'>;

const DropDown = <P extends { onClick: (e: MouseEventHandler) => void }>(props: DropProps<P>) => {
  const { children, variant = 'left', ...rest } = props;
  const [showDropDown, setShowDropDown] = useState(false);
  const dropDownRef = useRef(null);

  useOnClickOutside(dropDownRef, () => {
    setShowDropDown(false);
  });

  const newProps: (
    oldOnClick?: (e: MouseEventHandler) => void,
  ) => Partial<{ onClick: (e: MouseEventHandler) => void }> = (
    oldOnClick?: (e: MouseEventHandler) => void,
  ) => ({
    onClick: (e: MouseEventHandler) => {
      setShowDropDown(!showDropDown);
      oldOnClick?.(e);
    },
  });

  return (
    <BaseDropdown ref={dropDownRef}>
      {children &&
      children.length > 0 &&
      React.isValidElement(children[0]) &&
      typeof children[0] !== 'number' &&
      typeof children[0] !== 'string' &&
      typeof children[0] !== 'boolean' &&
      typeof children[0] !== 'undefined'
        ? React.cloneElement(children[0], newProps(children[0].props.onClick))
        : children[0]}
      <BaseDropdownMenu {...rest} variant={variant} show={showDropDown}>
        {children &&
          children.length > 1 &&
          children
            .slice(1)
            .map((child) =>
              child &&
              React.isValidElement(child) &&
              typeof child !== 'number' &&
              typeof child !== 'string' &&
              typeof child !== 'boolean' &&
              typeof child !== 'undefined'
                ? React.cloneElement(child, newProps(child.props.onClick))
                : child,
            )}
      </BaseDropdownMenu>
    </BaseDropdown>
  );
};

export { DropdownToggle } from './style';

export default DropDown;
