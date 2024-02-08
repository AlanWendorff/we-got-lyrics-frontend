import TLyricsData from '../models/Lyrics.model';

interface ILyricsRepository {
  getLyrics: (url: string) => Promise<TLyricsData>;
}

export default ILyricsRepository;
