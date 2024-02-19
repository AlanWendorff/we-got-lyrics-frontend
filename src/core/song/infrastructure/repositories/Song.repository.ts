import http from '../../../configuration/http/Http';
import ISongRepository from '../../domain/repositories/Song.repository';
import ISongDTO from '../../../configuration/http/dto/Song.dto';
import songMapper from '../mappers/Song.mapper';
import { BASE_URL } from '../../../configuration/env';

const songRepository = (): ISongRepository => ({
  getSong: async (id: string, songData: string) => {
    try {
      const response = await http.get<ISongDTO>(`${BASE_URL}/songs/${id}?song_data=${songData}`);
      return songMapper(response);
    } catch (error) {
      throw new Error(`Error getting user: ${error}`);
    }
  }
});

export default songRepository;
