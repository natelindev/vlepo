import React, { useContext, useEffect } from 'react';
import { graphql } from 'react-relay';
import { useQuery } from 'relay-hooks';
import { useMetaData_BlogQuery } from 'src/__generated__/useMetaData_BlogQuery.graphql';

export const MetaDataContext = React.createContext<
  | {
      title?: string | null | undefined;
      setTitle?: React.Dispatch<React.SetStateAction<string | undefined | null>>;
      subtitle?: string | null | undefined;
      setSubtitle?: React.Dispatch<React.SetStateAction<string | undefined | null>>;
    }
  | Record<string, never>
>({});

const blogQuery = graphql`
  query useMetaData_BlogQuery($id: String!) {
    blog(where: { id: $id }) {
      name
      subtitle
    }
  }
`;

export const useMetaData = () => {
  const { data } = useQuery<useMetaData_BlogQuery>(blogQuery, {
    id: process.env.NEXT_PUBLIC_DEFAULT_BLOG_ID,
  });

  const { title, subtitle, setTitle, setSubtitle } = useContext(MetaDataContext);

  useEffect(() => {
    setTitle?.(data?.blog?.name ?? process.env.NEXT_PUBLIC_DEFAULT_BLOG_NAME);
    setSubtitle?.(data?.blog?.subtitle ?? process.env.NEXT_PUBLIC_DEFAULT_BLOG_SUBTITLE);
  }, [data?.blog, setTitle, setSubtitle]);

  return { title, subtitle, setTitle, setSubtitle };
};
