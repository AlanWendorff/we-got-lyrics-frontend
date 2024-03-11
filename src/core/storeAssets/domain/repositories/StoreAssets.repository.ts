import { TArtist, TSong } from '../models/StoreAssets.model';

interface IStoreAssetsRepository {
  initialize: () => void;
  getSongsFromLs: () => TSong[];
  getArtistsFromLs: () => TArtist[];
  deleteSongFromLs: (songId: string) => TSong[] | [];
  deleteArtistFromLs: (artistId: string) => TArtist[] | [];
  addSongOnLs: (song: TSong) => void;
  addArtistOnLs: (artist: TArtist) => void;
  isArtistSavedOnLs: (artistId: string) => boolean;
  isSongSavedOnLs: (songId: string) => boolean;
}

export default IStoreAssetsRepository;
