type SearchResultProp = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  hit: any;
};
const SearchResult = (props: SearchResultProp) => {
  const { hit } = props;
  return <div>{hit.title}</div>;
};

export default SearchResult;
