import algoliasearch from 'algoliasearch';
import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';
import { Hits, InstantSearch } from 'react-instantsearch-dom';

import { Search } from '@emotion-icons/material-outlined';

import SearchResult from './SearchResult';
import { BaseSearchBar, SearchInput } from './style';

const searchClient = algoliasearch(
  process.env.NEXT_PUBLIC_ALGOLIA_APP_ID,
  process.env.NEXT_PUBLIC_ALGOLIA_API_KEY,
);

const SearchBar = (): React.ReactElement => {
  const [showSearchResult, setShowSearchResult] = useState(false);
  const searchInputRef = useRef<HTMLInputElement | null>(null);
  const router = useRouter();

  const routerChangeBlur = () => {
    searchInputRef.current?.blur();
    setShowSearchResult(false);
  };

  useEffect(() => {
    router.events.on('routeChangeStart', routerChangeBlur);
    return () => {
      router.events.off('routeChangeStart', routerChangeBlur);
    };
  }, [router.events]);

  return (
    <BaseSearchBar
      onFocus={() => setShowSearchResult(true)}
      onBlur={() => {
        setShowSearchResult(false);
      }}
      onKeyUp={(e) => {
        if (e.key === 'Escape') {
          searchInputRef.current?.blur();
        }
      }}
      show={showSearchResult}
    >
      <Search size={24} />
      <InstantSearch
        indexName={process.env.NEXT_PUBLIC_ALGOLIA_INDEX_NAME}
        searchClient={searchClient}
      >
        {/** @ts-expect-error algolia search typing inaccurate */}
        <SearchInput inputRef={searchInputRef} />
        <Hits hitComponent={SearchResult} />
      </InstantSearch>
    </BaseSearchBar>
  );
};

export default SearchBar;
