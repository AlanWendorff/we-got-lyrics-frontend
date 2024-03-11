import { KEY_FAV_SONGS, KEY_FAV_ARTISTS } from '../../../configuration/constants/localStorage';
import { TArtist, TSong } from '../../domain/models/StoreAssets.model';
import IStoreAssetsRepository from '../../domain/repositories/StoreAssets.repository';
import getItemMapper from '../mappers/GetItem.mapper';

const storeAssetsRepository = (): IStoreAssetsRepository => ({
  initialize: () => {
    localStorage.setItem(KEY_FAV_SONGS, JSON.stringify([]));
    localStorage.setItem(KEY_FAV_ARTISTS, JSON.stringify([]));
  },
  getSongsFromLs: () => getItemMapper(KEY_FAV_SONGS) as TSong[],
  getArtistsFromLs: () => getItemMapper(KEY_FAV_ARTISTS) as TArtist[],
  deleteSongFromLs: (songId) => {
    const items = getItemMapper(KEY_FAV_SONGS) as TSong[];
    const filteredItems = items.filter((item) => String(item.id) !== songId);

    localStorage.setItem(KEY_FAV_SONGS, JSON.stringify(filteredItems));

    return filteredItems;
  },
  deleteArtistFromLs: (artistId) => {
    const items = getItemMapper(KEY_FAV_ARTISTS) as TArtist[];
    const filteredItems = items.filter((item) => String(item.id) !== artistId);

    localStorage.setItem(KEY_FAV_ARTISTS, JSON.stringify(filteredItems));

    return filteredItems;
  },
  addSongOnLs: (song) => {
    const items = getItemMapper(KEY_FAV_SONGS) as TSong[];
    localStorage.setItem(KEY_FAV_SONGS, JSON.stringify([...items, song]));
  },
  addArtistOnLs: (artist) => {
    const items = getItemMapper(KEY_FAV_ARTISTS) as TArtist[];
    localStorage.setItem(KEY_FAV_ARTISTS, JSON.stringify([...items, artist]));
  },
  isArtistSavedOnLs: (artistId) => {
    const items = getItemMapper(KEY_FAV_ARTISTS) as TArtist[];
    const found: TArtist | undefined = items.find((item) => String(item.id) === artistId);

    return !!found;
  },
  isSongSavedOnLs: (songId) => {
    const items = getItemMapper(KEY_FAV_SONGS) as TSong[];
    const found: TSong | undefined = items.find((item) => String(item.id) === songId);

    return !!found;
  }
});

export default storeAssetsRepository;
