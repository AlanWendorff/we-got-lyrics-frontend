import { KEY_FAV_SONGS, KEY_FAV_ARTISTS } from '../../../configuration/constants/localStorage';
import { TLocalStorageArtistModel, TLocalStorageSongModel } from '../../domain/models/StoreAssets.model';
import IStoreAssetsRepository from '../../domain/repositories/StoreAssets.repository';
import getItemAdapter from '../adapters/GetItem.adapter';

const storeAssetsRepository = (): IStoreAssetsRepository => ({
  initialize: () => {
    localStorage.setItem(KEY_FAV_SONGS, JSON.stringify([]));
    localStorage.setItem(KEY_FAV_ARTISTS, JSON.stringify([]));
  },
  getSongsFromLs: () => getItemAdapter(KEY_FAV_SONGS) as TLocalStorageSongModel[],
  getArtistsFromLs: () => getItemAdapter(KEY_FAV_ARTISTS) as TLocalStorageArtistModel[],
  deleteSongFromLs: (songId) => {
    const items = getItemAdapter(KEY_FAV_SONGS) as TLocalStorageSongModel[];
    const filteredItems = items.filter((item) => String(item.id) !== songId);

    localStorage.setItem(KEY_FAV_SONGS, JSON.stringify(filteredItems));

    return filteredItems;
  },
  deleteArtistFromLs: (artistId) => {
    const items = getItemAdapter(KEY_FAV_ARTISTS) as TLocalStorageArtistModel[];
    const filteredItems = items.filter((item) => String(item.id) !== artistId);

    localStorage.setItem(KEY_FAV_ARTISTS, JSON.stringify(filteredItems));

    return filteredItems;
  },
  addSongOnLs: (song) => {
    const items = getItemAdapter(KEY_FAV_SONGS) as TLocalStorageSongModel[];
    localStorage.setItem(KEY_FAV_SONGS, JSON.stringify([...items, song]));
  },
  addArtistOnLs: (artist) => {
    const items = getItemAdapter(KEY_FAV_ARTISTS) as TLocalStorageArtistModel[];
    localStorage.setItem(KEY_FAV_ARTISTS, JSON.stringify([...items, artist]));
  },
  isArtistSavedOnLs: (artistId) => {
    const items = getItemAdapter(KEY_FAV_ARTISTS) as TLocalStorageArtistModel[];
    const found: TLocalStorageArtistModel | undefined = items.find((item) => String(item.id) === artistId);

    return !!found;
  },
  isSongSavedOnLs: (songId) => {
    const items = getItemAdapter(KEY_FAV_SONGS) as TLocalStorageSongModel[];
    const found: TLocalStorageSongModel | undefined = items.find((item) => String(item.id) === songId);

    return !!found;
  }
});

export default storeAssetsRepository;
