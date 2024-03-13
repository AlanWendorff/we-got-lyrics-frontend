import ISongRepository from '../domain/repositories/Song.repository';
import songService from '../domain/services/Song.service';

interface ISongController extends ISongRepository {}

const songController = (repository: ISongRepository): ISongController => ({
  getSong: (id: string) => {
    return songService(repository).getSong(id);
  },
  getSongByName: (name: string) => {
    return songService(repository).getSongByName(name);
  }
});

export default songController;
