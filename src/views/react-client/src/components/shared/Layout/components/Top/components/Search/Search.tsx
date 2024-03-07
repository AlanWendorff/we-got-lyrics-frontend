import { FC, FormEvent, useCallback, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { debounce } from 'lodash';
import List from './components/List';
import Bar from './components/Bar';
import searchRepository from '@core/search/infrastructure/repositories/Search.repository';
import searchController from '@core/search/application/Search.controller';
import TSearch from '@core/search/domain/models/Search.model';
import styles from './Search.module.scss';

const Search: FC = () => {
  const location = useLocation();
  const [searchedData, setSearchedData] = useState<TSearch | null>(null);

  useEffect(() => {
    handleDeleteSearchedData();
  }, [location]);

  const handleSearch = (name: string) => {
    if (name === '') {
      handleDeleteSearchedData();
      return;
    }

    searchController(searchRepository())
      .getSearch(name)
      .then((response) => {
        setSearchedData(response);
      });
  };

  const handleDeleteSearchedData = () => {
    setSearchedData(null);
  };

  const debounceHandleSearch = useCallback(debounce(handleSearch, 500), []);

  return (
    <div className={styles.container}>
      <Bar
        onChange={(e: FormEvent<HTMLFormElement>) => {
          e.preventDefault();
          debounceHandleSearch(e.currentTarget.artist.value);
        }}
        onSubmit={(e: FormEvent<HTMLFormElement>) => {
          e.preventDefault();
        }}
      />

      {searchedData && (
        <List
          songs={searchedData.searched_data.songs}
          artists={searchedData.searched_data.artists}
          handleDeleteSearchedData={handleDeleteSearchedData}
        />
      )}
    </div>
  );
};

export default Search;
