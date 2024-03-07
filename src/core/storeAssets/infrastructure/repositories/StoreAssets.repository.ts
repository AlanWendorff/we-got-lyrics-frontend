import { KEY_FAV_SONGS, KEY_FAV_ARTISTS } from '../../../configuration/localStorage/localStorage';
import { TArtist, TSong } from '../../domain/models/StoreAssets.model';
import IStoreAssetsRepository from '../../domain/repositories/StoreAssets.repository';

const storeAssetsRepository = (): IStoreAssetsRepository => ({
  getSongsFromLs: () => {
    const GETTED_ITEMS = localStorage.getItem(KEY_FAV_SONGS);
    return JSON.parse(GETTED_ITEMS!) as TSong[];
  },
  getArtistsFromLs: () => {
    const GETTED_ITEMS = localStorage.getItem(KEY_FAV_ARTISTS);
    return JSON.parse(GETTED_ITEMS!) as TArtist[];
  },
  deleteSongFromLs: (songId) => {
    const GETTED_ITEMS = localStorage.getItem(KEY_FAV_SONGS);
    const PARSED_ITEMS: TSong[] = JSON.parse(GETTED_ITEMS!);
    const FAV_SONGS = PARSED_ITEMS.filter((item) => `${item.id}` !== songId);

    localStorage.setItem(KEY_FAV_SONGS, JSON.stringify(FAV_SONGS));

    return false;
  },
  deleteArtistFromLs: (artistId) => {
    const GETTED_ITEMS = localStorage.getItem(KEY_FAV_ARTISTS);
    const PARSED_ITEMS: TArtist[] = JSON.parse(GETTED_ITEMS!);
    const FAV_SONGS = PARSED_ITEMS.filter((item) => `${item.id}` !== artistId);

    localStorage.setItem(KEY_FAV_ARTISTS, JSON.stringify(FAV_SONGS));

    return false;
  },
  addSongOnLs: (song) => {
    const GETTED_ITEMS = localStorage.getItem(KEY_FAV_SONGS);
    const PARSED_ITEMS: TSong[] = JSON.parse(GETTED_ITEMS!);

    localStorage.setItem(KEY_FAV_SONGS, JSON.stringify([...PARSED_ITEMS, song]));

    return true;
  },
  addArtistOnLs: (artist) => {
    const GETTED_ITEMS = localStorage.getItem(KEY_FAV_ARTISTS);
    const PARSED_ITEMS: TSong[] = JSON.parse(GETTED_ITEMS!);

    localStorage.setItem(KEY_FAV_ARTISTS, JSON.stringify([...PARSED_ITEMS, artist]));

    return true;
  },
  isArtistSavedOnLs: (artistId) => {
    const GETTED_ITEMS = localStorage.getItem(KEY_FAV_ARTISTS);
    const PARSED_ITEMS: TArtist[] = JSON.parse(GETTED_ITEMS!);

    const FINDED: TArtist | undefined = PARSED_ITEMS.find((item) => `${item.id}` === artistId);

    if (FINDED) return true;

    return false;
  },
  isSongSavedOnLs: (songId) => {
    const GETTED_ITEMS = localStorage.getItem(KEY_FAV_SONGS);
    const PARSED_ITEMS: TSong[] = JSON.parse(GETTED_ITEMS!);

    const FINDED: TSong | undefined = PARSED_ITEMS.find((item) => `${item.id}` === songId);

    if (FINDED) return true;

    return false;
  }
});

export default storeAssetsRepository;
