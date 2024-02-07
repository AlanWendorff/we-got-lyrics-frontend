import ISongRepository from '../repositories/Song.repository';

interface ISongService extends ISongRepository {}

const songService = (repository: ISongRepository): ISongService => ({
  getSong: (id: string) => {
    return repository.getSong(id);
  }
});

export default songService;
