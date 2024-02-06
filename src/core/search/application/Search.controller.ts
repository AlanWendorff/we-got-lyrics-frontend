import ISearchRepository from '../domain/repositories/Search.repository';
import searchService from '../domain/services/Search.service';

interface ISearchController extends ISearchRepository {}

const searchController = (repository: ISearchRepository): ISearchController => ({
  getSearch: (name) => {
    return searchService(repository).getSearch(name);
  }
});

export default searchController;
