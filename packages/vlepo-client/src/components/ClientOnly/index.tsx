import dynamic from 'next/dynamic';
import { ReactElement } from 'react';

type ClientOnlyProps = { children: ReactElement | ReactElement[] };
const ClientOnly = (props: ClientOnlyProps) => {
  const { children } = props;

  return <>{children}</>;
};

export default dynamic(() => Promise.resolve(ClientOnly), {
  ssr: false,
});
