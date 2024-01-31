import IArtistInfoRepository from '../repositories/ArtistInfo.repository';

interface IArtistInfoService extends IArtistInfoRepository {}

const artistInfoService = (repository: IArtistInfoRepository): IArtistInfoService => ({
    getArtistInfo: (name) => {
        return repository.getArtistInfo(name);
    }
});

export default artistInfoService;
