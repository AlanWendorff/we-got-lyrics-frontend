import httpMock from '@/core/configuration/http/Http.mock';
import IArtistInfoRepository from '../../domain/repositories/ArtistInfo.repository';
import IArtistInfoDTO from '../../../configuration/http/dto/ArtistInfo.dto';
import artistInfoMapper from '../mapper/ArtistInfo.mapper';

const BASE_URL = '';
//process.env.GENIUS_API_URL;

const artistInfoRepository = (): IArtistInfoRepository => ({
    getArtistInfo: async () => {
        try {
            const response = await httpMock.get<IArtistInfoDTO>(`${BASE_URL}/artistInfo`); //using mock
            return artistInfoMapper(response);
        } catch (error) {
            throw new Error(`Error getting user: ${error}`);
        }
    }
});

export default artistInfoRepository;
