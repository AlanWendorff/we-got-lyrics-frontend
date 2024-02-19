import ISongRepository from '../repositories/Song.repository';

interface ISongService extends ISongRepository {}

const songService = (repository: ISongRepository): ISongService => ({
  getSong: (id: string, songData: string) => {
    return repository.getSong(id, songData);
  }
});

export default songService;
