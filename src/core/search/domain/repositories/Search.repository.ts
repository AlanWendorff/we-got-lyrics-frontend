import TSearch from '../models/Search.model';

interface ISearchRepository {
  getSearch: (name: string) => Promise<TSearch>;
}

export default ISearchRepository;
