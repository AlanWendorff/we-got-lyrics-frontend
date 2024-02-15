import IArtistInfoRepository from '../repositories/ArtistInfo.repository';

interface IArtistInfoService extends IArtistInfoRepository {}

const artistInfoService = (repository: IArtistInfoRepository): IArtistInfoService => ({
  getArtistInfo: (id: string) => {
    return repository.getArtistInfo(id);
  },
  getArtistSongs: (artist_id: string, per_page: number, page: number) => {
    return repository.getArtistSongs(artist_id, per_page, page);
  }
});

export default artistInfoService;
