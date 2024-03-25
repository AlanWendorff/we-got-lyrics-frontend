import TLyricsModel from '../models/Lyrics.model';

interface ILyricsRepository {
  getLyrics: (url: string) => Promise<TLyricsModel>;
}

export default ILyricsRepository;
