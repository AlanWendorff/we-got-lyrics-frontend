import TArtistInfo from '../models/ArtistInfo.model';

interface IArtistInfoRepository {
  getArtistInfo: (id: string) => Promise<TArtistInfo>;
}

export default IArtistInfoRepository;
