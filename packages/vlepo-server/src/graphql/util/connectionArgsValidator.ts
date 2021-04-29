type orderByType =
  | {
      key: string;
      order?: 'asc' | 'desc' | null | undefined;
    }[]
  | null
  | undefined;

export const connectionArgsValidator = <T>(keys: (keyof T)[]) => (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  args: Record<string, any>,
): void => {
  const { first, last, before, after, orderBy } = args;
  // default rules
  if (!first && !last) {
    throw new Error('invalid connection args: first and last is required');
  }
  if (first && last) {
    throw new Error('invalid connection args: first and last cannot exist at the same time');
  }
  if (first && before) {
    throw new Error(
      'invalid connection args: first and before cannot exist at the same time, use first and after instead',
    );
  }
  if (last && after) {
    throw new Error(
      'invalid connection args: last and after cannot exist at the same time,use last and before instead',
    );
  }
  // additional rules
  if (orderBy) {
    if (
      !(orderBy as NonNullable<orderByType>)
        .map((o) => o.key)
        .every((k) => keys.includes(k as keyof T))
    ) {
      throw new Error(`invalid connection args: orderBy key can only be one of ${keys.join(',')}`);
    }
  }
};

export const orderByArgs = (orderBy: orderByType) =>
  orderBy?.reduce(
    (prev, curr) => ({
      ...prev,
      [curr.key]: curr.order,
    }),
    {},
  );
