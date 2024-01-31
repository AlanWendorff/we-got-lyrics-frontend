import TArtistInfo from '../models/ArtistInfo.model';
import IArtistInfoRepository from '../repositories/ArtistInfo.repository';

interface IArtistInfoService {
    getArtistInfo: () => Promise<TArtistInfo>;
}

const artistInfoService = (repository: IArtistInfoRepository): IArtistInfoService => ({
    getArtistInfo: () => {
        return repository.getArtistInfo();
    }
});

export default artistInfoService;
