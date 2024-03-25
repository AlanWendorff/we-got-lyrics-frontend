import http from '../../../configuration/http/Http';
import ILyricsRepository from '../../domain/repositories/Lyrics.repository';
import ILyricsDTO from '../../domain/dto/Lyrics.dto';
import { BASE_URL } from '../../../configuration/constants/env';

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
