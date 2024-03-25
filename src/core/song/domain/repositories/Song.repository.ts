import TSongDetailModel from '../models/Song.model';

interface ISongRepository {
  getSong: (id: string) => Promise<TSongDetailModel>;
  getSongByName: (name: string) => Promise<TSongDetailModel>;
}

export default ISongRepository;
