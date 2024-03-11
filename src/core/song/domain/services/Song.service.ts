import ISongRepository from '../repositories/Song.repository';

interface ISongService extends ISongRepository {}

const songService = (repository: ISongRepository): ISongService => ({
  getSong: (id: string) => {
    return repository.getSong(id);
  },
  getSongByName: (name: string) => {
    return repository.getSongByName(name);
  }
});

export default songService;
