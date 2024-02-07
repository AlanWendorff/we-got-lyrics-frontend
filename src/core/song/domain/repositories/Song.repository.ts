import TSongData from '../models/Song.model';

interface ISongRepository {
  getSong: (id: string) => Promise<TSongData>;
}

export default ISongRepository;
