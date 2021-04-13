import dynamic from 'next/dynamic';
import { ReactNode } from 'react';

type ClientOnlyProps = { children: ReactNode };
const ClientOnly = (props: ClientOnlyProps) => {
  const { children } = props;

  return <>{children}</>;
};

export default dynamic(() => Promise.resolve(ClientOnly), {
  ssr: false,
});
