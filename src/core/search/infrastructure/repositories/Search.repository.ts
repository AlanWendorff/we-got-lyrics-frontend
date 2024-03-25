import http from '../../../configuration/http/Http';
import ISearchRepository from '../../domain/repositories/Search.repository';
import ISearchDTO from '../../domain/dto/Search.dto';
import searchAdapter from '../adapters/Search.adapter';
import { BASE_URL } from '../../../configuration/constants/env';

const searchRepository = (): ISearchRepository => ({
  getSearch: async (name) => {
    try {
      const response = await http.get<ISearchDTO>(`${BASE_URL}/search?q=${name}`);
      return searchAdapter(response, name);
    } catch (error) {
      throw new Error(`Error getting user: ${error}`);
    }
  }
});

export default searchRepository;
