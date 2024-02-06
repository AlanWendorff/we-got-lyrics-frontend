import { FormEvent, useState } from 'react';
import List from './components/List';
import Bar from './components/Bar';
import searchRepository from '@core/search/infrastructure/repositories/Search.repository';
import searchController from '@core/search/application/Search.controller';
import TSearch from '@core/search/domain/models/Search.model';
import styles from './Search.module.scss';

const Search = () => {
  const [searchedData, setSearchedData] = useState<TSearch | null>(null);

  const search = (name: string) => {
    searchController(searchRepository())
      .getSearch(name)
      .then((response) => {
        setSearchedData(response);
      });
  };

  return (
    <div className={styles.container}>
      <Bar
        onSubmit={(e: FormEvent<HTMLFormElement>) => {
          e.preventDefault();
          search(e.currentTarget.artist.value);
        }}
      />

      {searchedData && <List songs={searchedData.searched_data.songs} artists={searchedData.searched_data.artists} />}
    </div>
  );
};

export default Search;
