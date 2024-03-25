import { TLocalStorageArtistModel, TLocalStorageSongModel } from '../models/StoreAssets.model';

interface IStoreAssetsRepository {
  initialize: () => void;
  getSongsFromLs: () => TLocalStorageSongModel[];
  getArtistsFromLs: () => TLocalStorageArtistModel[];
  deleteSongFromLs: (songId: string) => TLocalStorageSongModel[] | [];
  deleteArtistFromLs: (artistId: string) => TLocalStorageArtistModel[] | [];
  addSongOnLs: (song: TLocalStorageSongModel) => void;
  addArtistOnLs: (artist: TLocalStorageArtistModel) => void;
  isArtistSavedOnLs: (artistId: string) => boolean;
  isSongSavedOnLs: (songId: string) => boolean;
}

export default IStoreAssetsRepository;
