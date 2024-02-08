import ILyricsRepository from '../repositories/Lyrics.repository';

interface ILyricsService extends ILyricsRepository {}

const lyricsService = (repository: ILyricsRepository): ILyricsService => ({
  getLyrics: (url: string) => {
    return repository.getLyrics(url);
  }
});

export default lyricsService;
