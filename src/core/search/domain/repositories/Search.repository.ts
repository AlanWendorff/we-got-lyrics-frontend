import TSearchModel from '../models/Search.model';

interface ISearchRepository {
  getSearch: (name: string) => Promise<TSearchModel>;
}

export default ISearchRepository;
