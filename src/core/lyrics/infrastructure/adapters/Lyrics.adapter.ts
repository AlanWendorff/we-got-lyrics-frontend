import ILyricsDTO from '../../domain/dto/Lyrics.dto';
import TLyricsModel from '../../domain/models/Lyrics.model';

const lyricsAdapter = (dto: ILyricsDTO): TLyricsModel => ({
  lyrics: dto.lyrics
});

export default lyricsAdapter;
