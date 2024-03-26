import http from '../../../configuration/http/Http';
import IArtistInfoRepository from '../../domain/repositories/ArtistInfo.repository';
import IArtistInfoDTO from '../../domain/dto/ArtistInfo.dto';
import artistInfoAdapter from '../adapters/ArtistInfo.adapter';
import ISongsDTO from '../../domain/dto/Songs.dto';
import artistSongsAdapter from '../adapters/ArtistSongs.adapter';
import { BASE_URL } from '../../../configuration/constants/env';

const artistInfoRepository = (): IArtistInfoRepository => ({
  getArtistInfo: async (id) => {
    try {
      const response = await http.get<IArtistInfoDTO>(`${BASE_URL}/artists/${id}`);
      return artistInfoAdapter(response);
    } catch (error) {
      throw new Error(`Error getting: ${error}`);
    }
  },
  getArtistSongs: async (artist_id, per_page, page) => {
    try {
      const response = await http.get<ISongsDTO>(
        `${BASE_URL}/artists/${artist_id}/songs/?per_page=${per_page}&sort=popularity&page=${page}`
      );
      return artistSongsAdapter(response);
    } catch (error) {
      throw new Error(`Error getting: ${error}`);
    }
  }
});

export default artistInfoRepository;
