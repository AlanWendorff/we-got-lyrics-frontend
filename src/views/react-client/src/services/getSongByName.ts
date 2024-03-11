import songRepository from '@core/song/infrastructure/repositories/Song.repository';
import songController from '@core/song/application/Song.controller';

const getSongByName = (name: string) => songController(songRepository()).getSongByName(String(name));

export default getSongByName;
