import Link from 'next/link';
import { match } from 'ts-pattern';

import styled from '@emotion/styled';

import { OverlayLink } from '../Link';

type SearchResultProp = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  hit: any;
};

const BaseResultCard = styled.div`
  padding: 0.25rem 0.5rem;
`;

type ResultCardProps = {
  href?: string;
  children?: React.ReactNode;
} & React.ComponentProps<typeof BaseResultCard>;

const ResultCard = (props: ResultCardProps) => {
  const { href, children, ...rest } = props;
  return (
    <BaseResultCard {...rest}>
      {children}
      {href ? (
        <Link href={href} passHref>
          <OverlayLink />
        </Link>
      ) : null}
    </BaseResultCard>
  );
};

const SearchResult = (props: SearchResultProp) => {
  const { hit } = props;
  return (
    <>
      {match(hit.__typename)
        .with('Post', () => <ResultCard href={`/posts/${hit.slug}`}>{hit.title}</ResultCard>)
        .with('Thought', () => hit.content)
        .otherwise(() => null)}
    </>
  );
};

export default SearchResult;
