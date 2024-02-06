import http from '../../../configuration/http/Http';
import ISearchRepository from '../../domain/repositories/Search.repository';
import ISearchDTO from '../../../configuration/http/dto/Search.dto';
import searchMapper from '../mapper/Search.mapper';

const BASE_URL = process.env.API_URL as string;

const searchRepository = (): ISearchRepository => ({
  getSearch: async (name) => {
    try {
      const response = await http.get<ISearchDTO>(`${BASE_URL}/search?q=${name}`);
      return searchMapper(response);
    } catch (error) {
      throw new Error(`Error getting user: ${error}`);
    }
  }
});

export default searchRepository;
