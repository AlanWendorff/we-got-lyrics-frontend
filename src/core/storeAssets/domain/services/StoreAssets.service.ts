import IStoreAssetsRepository from '../repositories/StoreAssets.repository';

interface IStoreAssetsService extends IStoreAssetsRepository {}

const storeAssetsService = (repository: IStoreAssetsRepository): IStoreAssetsService => ({
  initialize: () => repository.initialize(),
  getSongsFromLs: () => repository.getSongsFromLs(),
  getArtistsFromLs: () => repository.getArtistsFromLs(),
  deleteSongFromLs: (songId) => repository.deleteSongFromLs(songId),
  deleteArtistFromLs: (artistId) => repository.deleteArtistFromLs(artistId),
  addSongOnLs: (song) => repository.addSongOnLs(song),
  addArtistOnLs: (artist) => repository.addArtistOnLs(artist),
  isArtistSavedOnLs: (artistId) => repository.isArtistSavedOnLs(artistId),
  isSongSavedOnLs: (songId) => repository.isSongSavedOnLs(songId)
});

export default storeAssetsService;
