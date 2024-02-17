import http from '../../../configuration/http/Http';
import IArtistInfoRepository from '../../domain/repositories/ArtistInfo.repository';
import IArtistInfoDTO from '../../../configuration/http/dto/ArtistInfo.dto';
import artistInfoMapper from '../mapper/ArtistInfo.mapper';
import ISongsDTO from '../../../../core/configuration/http/dto/Songs.dto';
import artistSongsMapper from '../mapper/ArtistSongs.mapper';
import { BASE_URL } from '../../../configuration/env';

const artistInfoRepository = (): IArtistInfoRepository => ({
  getArtistInfo: async (id) => {
    try {
      const response = await http.get<IArtistInfoDTO>(`${BASE_URL}/artists/${id}`);
      return artistInfoMapper(response);
    } catch (error) {
      throw new Error(`Error getting user: ${error}`);
    }
  },
  getArtistSongs: async (artist_id, per_page, page) => {
    try {
      const response = await http.get<ISongsDTO>(
        `${BASE_URL}/artists/${artist_id}/songs/?per_page=${per_page}&sort=popularity&page=${page}`
      );
      return artistSongsMapper(response);
    } catch (error) {
      throw new Error(`Error getting user: ${error}`);
    }
  }
});

export default artistInfoRepository;
