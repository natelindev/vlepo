import React, { useState } from 'react';

import { BaseSelect, Option } from './style';

type SelectProps<T> = {
  options: { key: string; value: T }[];
  innerRef?: React.Ref<HTMLSelectElement>;
};

const Select = <T extends string | number | readonly string[] | undefined>(
  props: SelectProps<T>,
) => {
  const { options, innerRef, ...rest } = props;

  const [selectedValue, setSelectedValue] = useState<T>();

  return (
    <BaseSelect ref={innerRef} {...rest}>
      {options.map((o) => (
        <Option
          key={o.key}
          active={selectedValue === o.value}
          value={o.value}
          onClick={() => setSelectedValue(o.value)}
        >
          {o.key}
        </Option>
      ))}
    </BaseSelect>
  );
};

export default Select;
