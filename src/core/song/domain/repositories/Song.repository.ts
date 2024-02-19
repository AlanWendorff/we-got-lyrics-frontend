import TSongData from '../models/Song.model';

interface ISongRepository {
  getSong: (id: string, songData: string) => Promise<TSongData>;
}

export default ISongRepository;
