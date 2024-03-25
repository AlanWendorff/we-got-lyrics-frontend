import http from '../../../configuration/http/Http';
import ILyricsRepository from '../../domain/repositories/Lyrics.repository';
import ILyricsDTO from '../../domain/dto/Lyrics.dto';
import lyricsAdapter from '../adapters/Lyrics.adapter';
import { BASE_URL } from '../../../configuration/constants/env';

const lyricsRepository = (): ILyricsRepository => ({
  getLyrics: async (url: string) => {
    try {
      const response = await http.get<ILyricsDTO>(`${BASE_URL}/lyrics/?song_url=${url}`);
      return lyricsAdapter(response);
    } catch (error) {
      throw new Error(`Error getting user: ${error}`);
    }
  }
});

export default lyricsRepository;
