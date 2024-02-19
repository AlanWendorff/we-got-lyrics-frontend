import { FormEvent, useCallback, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { debounce } from 'lodash';
import List from './components/List';
import Bar from './components/Bar';
import searchRepository from '@core/search/infrastructure/repositories/Search.repository';
import searchController from '@core/search/application/Search.controller';
import TSearch from '@core/search/domain/models/Search.model';
import styles from './Search.module.scss';
import HomeBtn from '../HomeBtn/HomeBtn';

const Search = () => {
  const location = useLocation();
  const [searchedData, setSearchedData] = useState<TSearch | null>(null);

  const search = (name: string) => {
    if (name === '') {
      setSearchedData(null);
      return;
    }

    searchController(searchRepository())
      .getSearch(name)
      .then((response) => {
        setSearchedData(response);
      });
  };

  useEffect(() => {
    setSearchedData(null);
  }, [location]);

  const debounceSearching = useCallback(debounce(search, 500), []);

  return (
    <div className={styles.container__fixed}>
      <HomeBtn /> {/* only if is not location ROOT & styles from search same */}
      <div className={styles.container__relative}>
        <Bar
          onChange={(e: FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            debounceSearching(e.currentTarget.artist.value);
          }}
          onSubmit={(e: FormEvent<HTMLFormElement>) => {
            e.preventDefault();
          }}
        />

        {searchedData && <List songs={searchedData.searched_data.songs} artists={searchedData.searched_data.artists} />}
      </div>
    </div>
  );
};

export default Search;
