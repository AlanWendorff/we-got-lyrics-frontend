import TArtistInfo from '@core/artistInfo/domain/models/ArtistInfo.model'; // Modelo de retorno de datos
import artistInfoController from '@core/artistInfo/application/ArtistInfo.controller'; // Controlador de ...
import artistInfoRepository from '@core/artistInfo/infrastructure/repositories/ArtistInfo.repository'; // Repositorio de ...

const getArtistInfo = (artistName: string) => {
  artistInfoController(artistInfoRepository()).getArtistInfo(artistName);
};

export default getArtistInfo;
