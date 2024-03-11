import songRepository from '@core/song/infrastructure/repositories/Song.repository';
import songController from '@core/song/application/Song.controller';

const getSongById = (id: string) => songController(songRepository()).getSong(String(id));

export default getSongById;
