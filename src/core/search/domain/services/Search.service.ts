import ISearchRepository from '../repositories/Search.repository';

interface ISearchService extends ISearchRepository {}

const searchService = (repository: ISearchRepository): ISearchService => ({
  getSearch: (name) => {
    return repository.getSearch(name);
  }
});

export default searchService;
