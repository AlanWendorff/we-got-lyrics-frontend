import ILyricsRepository from '../domain/repositories/Lyrics.repository';
import lyricsService from '../domain/services/Lyrics.service';

interface ILyricsController extends ILyricsRepository {}

const lyricsController = (repository: ILyricsRepository): ILyricsController => ({
  getLyrics: (url: string) => {
    return lyricsService(repository).getLyrics(url);
  }
});

export default lyricsController;
