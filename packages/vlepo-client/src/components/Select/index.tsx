import { useState } from 'react';

import { BaseSelect, Option } from './style';

type SelectProps<T> = {
  options: { key: string; value: T }[];
};

const Select = <T extends string | number | readonly string[] | undefined>(
  props: SelectProps<T>,
) => {
  const { options } = props;

  const [selectedValue, setSelectedValue] = useState<T>();

  return (
    <BaseSelect>
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
