import { FC, FormEvent, useCallback, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { debounce } from 'lodash';
import List from './components/List';
import Bar from './components/Bar';
import searchRepository from '@core/search/infrastructure/repositories/Search.repository';
import searchController from '@core/search/application/Search.controller';
import TSearchModel from '@core/search/domain/models/Search.model';
import styles from './Header.module.scss';
import ListMobile from './components/ListMobile';

const Header: FC = () => {
  const location = useLocation();
  const [searchedData, setSearchedData] = useState<TSearchModel | null>(null);
  const [isListShown, setIsListShown] = useState(false);

  useEffect(() => {
    setIsListShown(false);
  }, [location]);

  const handleSearch = (name: string) => {
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

  const handleIsListShown = () => {
    setIsListShown(!isListShown);
  };

  const debounceHandleSearch = useCallback(debounce(handleSearch, 500), []);

  return (
    <header className={`${styles.outerContainer} ${searchedData && isListShown && styles.blur}`}>
      <div className={styles.innerContainer}>
        <Bar
          onChange={(e: FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            debounceHandleSearch(e.currentTarget.search.value);
          }}
          onSubmit={(e: FormEvent<HTMLFormElement>) => {
            e.preventDefault();
          }}
          onClick={() => setIsListShown(true)}
        />

        {searchedData && isListShown && (
          <>
            <List
              songs={searchedData.searched_data.songs}
              artists={searchedData.searched_data.artists}
              handleIsListShown={handleIsListShown}
            />
            <ListMobile
              songs={searchedData.searched_data.songs}
              artists={searchedData.searched_data.artists}
              handleIsListShown={handleIsListShown}
            />
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
