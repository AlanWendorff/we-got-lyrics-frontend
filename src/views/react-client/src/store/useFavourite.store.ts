import { create } from 'zustand';
import { TLocalStorageArtistModel, TLocalStorageSongModel } from '@core/storeAssets/domain/models/StoreAssets.model';
import storeAssetsController from '@core/storeAssets/application/StoreAssets.controller';
import storeAssetsRepository from '@core/storeAssets/infrastructure/repositories/StoreAssets.repository';

interface IUseFavouriteStore {
  songs: TLocalStorageSongModel[];
  artists: TLocalStorageArtistModel[];
  hasUserFav: boolean;
  setHasUserFav: () => void;
  setInitialStore: () => void;
  addSong: (song: TLocalStorageSongModel) => void;
  deleteSong: (songId: string) => void;
  addArtist: (artist: TLocalStorageArtistModel) => void;
  deleteArtist: (artistId: string) => void;
}

const useFavouriteStore = create<IUseFavouriteStore>((set) => ({
  songs: [],
  artists: [],
  hasUserFav: false,
  setHasUserFav: () => {
    set((store) => ({
      hasUserFav: !(store.artists.length === 0 && store.songs.length === 0)
    }));
  },
  setInitialStore: () => {
    set(() => ({
      songs: storeAssetsController(storeAssetsRepository()).getSongsFromLs(),
      artists: storeAssetsController(storeAssetsRepository()).getArtistsFromLs()
    }));
  },
  addSong: (song) => {
    set((state: IUseFavouriteStore) => ({ songs: [...state.songs, song] }));
    storeAssetsController(storeAssetsRepository()).addSongOnLs(song);
  },
  deleteSong: (songId) => {
    set(() => ({ songs: storeAssetsController(storeAssetsRepository()).deleteSongFromLs(songId) }));
  },
  addArtist: (artist) => {
    set((state: IUseFavouriteStore) => ({ artists: [...state.artists, artist] }));
    storeAssetsController(storeAssetsRepository()).addArtistOnLs(artist);
  },
  deleteArtist: (artistId) => {
    set(() => ({ artists: storeAssetsController(storeAssetsRepository()).deleteArtistFromLs(artistId) }));
  }
}));

export default useFavouriteStore;
