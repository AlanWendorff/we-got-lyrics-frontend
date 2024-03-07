import { TArtist, TSong } from '../models/StoreAssets.model';

interface IStoreAssetsRepository {
  getSongsFromLs: () => TSong[];
  getArtistsFromLs: () => TArtist[];
  deleteSongFromLs: (songId: string) => TSong[] | [];
  deleteArtistFromLs: (artistId: string) => TArtist[] | [];
  addSongOnLs: (song: TSong) => boolean;
  addArtistOnLs: (artist: TArtist) => boolean;
  isArtistSavedOnLs: (artistId: string) => boolean;
  isSongSavedOnLs: (songId: string) => boolean;
}

export default IStoreAssetsRepository;
