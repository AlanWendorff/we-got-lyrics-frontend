import IArtistInfoRepository from '../domain/repositories/ArtistInfo.repository';
import artistInfoService from '../domain/services/ArtistInfo.service';

const artistInfoController = (repository: IArtistInfoRepository) => ({
    getArtistInfo: () => {
        return artistInfoService(repository).getArtistInfo();
    }
});

export default artistInfoController;
