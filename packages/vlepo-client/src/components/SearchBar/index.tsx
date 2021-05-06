import algoliasearch from 'algoliasearch';
import { useRouter } from 'next/router';
import { useCallback, useContext, useEffect, useRef } from 'react';
import { Hits, InstantSearch } from 'react-instantsearch-dom';
import { useOnClickOutside } from 'src/hooks/useOnClickOutside';

import { Search } from '@emotion-icons/material-outlined';

import { SearchBarContext } from '../Navbar';
import SearchResult from './SearchResult';
import { BaseSearchBar, SearchInput } from './style';

const searchClient = algoliasearch(
  process.env.NEXT_PUBLIC_ALGOLIA_APP_ID,
  process.env.NEXT_PUBLIC_ALGOLIA_API_KEY,
);

const SearchBar = (): React.ReactElement => {
  const { showSearch = false, setShowSearch } = useContext(SearchBarContext);
  const searchInputRef = useRef<HTMLInputElement | null>(null);
  const searchBarRef = useRef<HTMLDivElement | null>(null);
  const router = useRouter();

  const hideSearchCallback = useCallback(() => {
    searchInputRef.current?.blur();
    setShowSearch?.(false);
  }, [setShowSearch]);

  const showSearchCallback = useCallback(() => {
    setShowSearch?.(true);
    setTimeout(() => searchInputRef.current?.focus(), 0);
  }, [setShowSearch]);

  useOnClickOutside(searchBarRef, hideSearchCallback);

  useEffect(() => {
    router.events.on('routeChangeStart', hideSearchCallback);
    return () => {
      router.events.off('routeChangeStart', hideSearchCallback);
    };
  }, [router.events, hideSearchCallback]);

  return (
    <BaseSearchBar
      ref={searchBarRef}
      onFocus={showSearchCallback}
      onKeyUp={(e) => {
        if (e.key === 'Escape') {
          hideSearchCallback();
        }
      }}
      show={showSearch}
    >
      <Search size={24} onClick={showSearchCallback} />
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
