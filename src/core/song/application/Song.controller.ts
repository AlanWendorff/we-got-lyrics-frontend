import ISongRepository from '../domain/repositories/Song.repository';
import songService from '../domain/services/Song.service';

interface ISongController extends ISongRepository {}

const songController = (repository: ISongRepository): ISongController => ({
  getSong: (id: string, songData: string) => {
    return songService(repository).getSong(id, songData);
  }
});

export default songController;
