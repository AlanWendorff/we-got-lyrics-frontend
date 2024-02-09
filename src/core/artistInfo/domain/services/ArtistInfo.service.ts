import IArtistInfoRepository from '../repositories/ArtistInfo.repository';

interface IArtistInfoService extends IArtistInfoRepository {}

const artistInfoService = (repository: IArtistInfoRepository): IArtistInfoService => ({
  getArtistInfo: (id: string) => {
    return repository.getArtistInfo(id);
  }
});

export default artistInfoService;
