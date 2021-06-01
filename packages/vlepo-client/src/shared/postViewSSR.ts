import { GetServerSidePropsContext } from 'next';
import { fetchQuery } from 'relay-hooks';
import { postViewQuery } from 'src/__generated__/postViewQuery.graphql';
import { initEnvironment } from 'src/relay';

import { postQuery } from './postView';

export const postViewSSR = (slug?: string) => async (context: GetServerSidePropsContext) => {
  const { query, res } = context;
  const { environment, relaySSR } = initEnvironment();
  const postSlug = slug ?? (query.postSlug as string);

  await new Promise((resolve, reject) => {
    fetchQuery<postViewQuery>(environment, postQuery, {
      slug: postSlug,
    }).subscribe({
      complete: () => resolve(undefined),
      error: (err: Error) => reject(err),
    });
  });

  const [relayData] = await relaySSR.getCache();
  const [queryString, queryPayload] = relayData ?? [];

  if (!queryPayload?.data?.post) {
    return {
      redirect: {
        destination: '/404',
        permanent: false,
      },
    };
  }
  res.setHeader('Cache-Control', 's-maxage=604800, stale-while-revalidate');

  return {
    props: {
      relayData: relayData && 'json' in queryPayload ? [[queryString, queryPayload.json]] : null,
    },
  };
};
