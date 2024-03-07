import IStoreAssetsRepository from '../domain/repositories/StoreAssets.repository';
import storeAssetsService from '../domain/services/StoreAssets.service';

interface IStoreAssetsController extends IStoreAssetsRepository {}

const storeAssetsController = (repository: IStoreAssetsRepository): IStoreAssetsController => ({
  getSongsFromLs: () => storeAssetsService(repository).getSongsFromLs(),
  getArtistsFromLs: () => storeAssetsService(repository).getArtistsFromLs(),
  deleteSongFromLs: (songId) => storeAssetsService(repository).deleteSongFromLs(songId),
  deleteArtistFromLs: (artistId) => storeAssetsService(repository).deleteArtistFromLs(artistId),
  addSongOnLs: (song) => storeAssetsService(repository).addSongOnLs(song),
  addArtistOnLs: (artist) => storeAssetsService(repository).addArtistOnLs(artist),
  isArtistSavedOnLs: (artistId) => storeAssetsService(repository).isArtistSavedOnLs(artistId),
  isSongSavedOnLs: (songId) => storeAssetsService(repository).isSongSavedOnLs(songId)
});

export default storeAssetsController;
