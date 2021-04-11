import { Section } from 'src/components/Layout/style';
import { H1 } from 'src/components/Typography';

import type { NextPageContext } from 'next';

type ErrorProps = { statusCode: number };

const ErrorPage = (props: ErrorProps) => {
  const { statusCode } = props;
  return (
    <Section mx="auto" my="auto">
      <H1>
        {statusCode ? `An error ${statusCode} occurred on server` : 'An error occurred on client'}
      </H1>
    </Section>
  );
};

ErrorPage.getInitialProps = ({ res, err }: NextPageContext) => {
  const statusCode = res?.statusCode ?? err?.statusCode ?? 404;
  return { statusCode };
};

export default ErrorPage;
