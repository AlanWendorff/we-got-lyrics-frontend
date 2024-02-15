import IArtistInfoRepository from '../domain/repositories/ArtistInfo.repository';
import artistInfoService from '../domain/services/ArtistInfo.service';

interface IArtistInfoController extends IArtistInfoRepository {}

const artistInfoController = (repository: IArtistInfoRepository): IArtistInfoController => ({
  getArtistInfo: (id: string) => {
    return artistInfoService(repository).getArtistInfo(id);
  },
  getArtistSongs: (artist_id: string, per_page: number, page: number) => {
    return artistInfoService(repository).getArtistSongs(artist_id, per_page, page);
  }
});

export default artistInfoController;
