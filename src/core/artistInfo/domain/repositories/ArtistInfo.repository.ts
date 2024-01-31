import TArtistInfo from '../models/ArtistInfo.model';

interface IArtistInfoRepository {
  getArtistInfo: (name: string) => Promise<TArtistInfo>;
}

export default IArtistInfoRepository;
