import http from '../../../configuration/http/Http';
import IArtistInfoRepository from '../../domain/repositories/ArtistInfo.repository';
import IArtistInfoDTO from '../../../configuration/http/dto/ArtistInfo.dto';
import artistInfoMapper from '../mapper/ArtistInfo.mapper';

const BASE_URL = process.env.API_URL;

const artistInfoRepository = (): IArtistInfoRepository => ({
  getArtistInfo: async (name) => {
    try {
      const response = await http.get<IArtistInfoDTO>(`${BASE_URL}/search?q=${name}`);
      return artistInfoMapper(response);
    } catch (error) {
      throw new Error(`Error getting user: ${error}`);
    }
  }
});

export default artistInfoRepository;
