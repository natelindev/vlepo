import React, { useContext, useEffect } from 'react';
import { useQuery } from 'relay-hooks';
import { graphql } from 'relay-runtime';
import { useMetaData_BlogQuery } from 'src/__generated__/useMetaData_BlogQuery.graphql';

export const MetaDataContext = React.createContext<
  | {
      title?: string | null | undefined;
      setTitle?: React.Dispatch<React.SetStateAction<string | undefined | null>>;
      slogan?: string | null | undefined;
      setSlogan?: React.Dispatch<React.SetStateAction<string | undefined | null>>;
    }
  | Record<string, never>
>({
  title: process.env.NEXT_PUBLIC_DEFAULT_BLOG_NAME,
  slogan: process.env.NEXT_PUBLIC_DEFAULT_BLOG_SLOGAN,
});

const blogQuery = graphql`
  query useMetaData_BlogQuery($id: String!) {
    blog(where: { id: $id }) {
      name
      slogan
    }
  }
`;

export const useMetaData = () => {
  const { data } = useQuery<useMetaData_BlogQuery>(blogQuery, {
    id: process.env.NEXT_PUBLIC_DEFAULT_BLOG_ID,
  });

  const { title, slogan, setTitle, setSlogan } = useContext(MetaDataContext);

  useEffect(() => {
    setTitle?.(data?.blog?.name ?? process.env.NEXT_PUBLIC_DEFAULT_BLOG_NAME);
    setSlogan?.(data?.blog?.slogan ?? process.env.NEXT_PUBLIC_DEFAULT_BLOG_SLOGAN);
  }, [data?.blog, setTitle, setSlogan]);

  return { title, slogan, setTitle, setSlogan };
};
