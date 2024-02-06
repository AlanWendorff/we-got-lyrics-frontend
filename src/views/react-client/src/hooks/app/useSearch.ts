import { useEffect, useState } from 'react';
import TSearch from '@core/search/domain/models/Search.model'; // Modelo de retorno de datos
import searchController from '@core/search/application/Search.controller'; // Controlador de ...
import searchRepository from '@core/search/infrastructure/repositories/Search.repository'; // Repositorio de ...

interface IUseSearch {
  data: TSearch | null;
  isLoading: boolean;
  error: string;
}

const useSearch = (): IUseSearch => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  const [searchedData, setSearchedData] = useState<TSearch | null>(null);

  const search = (name: string) => {
    searchController(searchRepository())
      .getSearch(name)
      .then((response) => {
        setSearchedData(response);
      })
      .catch((error) => {
        setError(`Error getting artist information ${error}`); // Manejar errores
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return {
    data: searchedData,
    isLoading,
    error
  };
};

export default useSearch;
