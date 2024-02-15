import TArtistInfo from '../models/ArtistInfo.model';
import TArtistSongs from '../models/ArtistSongs.model';

interface IArtistInfoRepository {
  getArtistInfo: (id: string) => Promise<TArtistInfo>;
  getArtistSongs: (artist_id: string, per_page: number, page: number) => Promise<TArtistSongs>;
}

export default IArtistInfoRepository;
