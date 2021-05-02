import styled from '@emotion/styled';

type SearchResultProp = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  hit: any;
};

const BaseSearchResult = styled.div`
  background-color: ${(props) => props.theme.colors.backgroundSecondary};
`;

const SearchResult = (props: SearchResultProp) => {
  const { hit } = props;
  return <BaseSearchResult>{hit.title ?? hit.content}</BaseSearchResult>;
};

export default SearchResult;
