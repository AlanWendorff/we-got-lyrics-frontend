import http from '../../../configuration/http/Http';
import ISongRepository from '../../domain/repositories/Song.repository';
import ISongDTO from '../../domain/dto/Song.dto';
import songAdapter from '../adapters/Song.adapter';
import { BASE_URL } from '../../../configuration/constants/env';

const songRepository = (): ISongRepository => ({
  getSong: async (id: string) => {
    try {
      const response = await http.get<ISongDTO>(`${BASE_URL}/songs/${id}?song_data=`);
      return songAdapter(response);
    } catch (error) {
      throw new Error(`Error getting user: ${error}`);
    }
  },
  getSongByName: async (name: string) => {
    try {
      const response = await http.get<ISongDTO>(`${BASE_URL}/songs/000?song_data=${name}`);
      return songAdapter(response);
    } catch (error) {
      throw new Error(`Error getting user: ${error}`);
    }
  }
});

export default songRepository;
