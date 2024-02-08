import http from '../../../configuration/http/Http';
import ILyricsRepository from '../../domain/repositories/Lyrics.repository';
import ILyricsDTO from '../../../configuration/http/dto/Lyrics.dto';

const BASE_URL = process.env.API_URL;

const lyricsRepository = (): ILyricsRepository => ({
  getLyrics: async (url: string) => {
    try {
      return await http.get<ILyricsDTO>(`${BASE_URL}/lyrics/?song_url=${url}`);
    } catch (error) {
      throw new Error(`Error getting user: ${error}`);
    }
  }
});

export default lyricsRepository;
