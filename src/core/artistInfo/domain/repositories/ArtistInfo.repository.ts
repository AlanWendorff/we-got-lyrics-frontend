import TArtistInfoModel from '../models/ArtistInfo.model';
import TArtistSongs from '../models/ArtistSongs.model';

interface IArtistInfoRepository {
  getArtistInfo: (id: string) => Promise<TArtistInfoModel>;
  getArtistSongs: (artist_id: string, per_page: number, page: number) => Promise<TArtistSongs>;
}

export default IArtistInfoRepository;
