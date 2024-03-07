import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import storeAssetsController from '@core/storeAssets/application/StoreAssets.controller';
import storeAssetsRepository from '@core/storeAssets/infrastructure/repositories/StoreAssets.repository';
import { TArtist, TSong } from '@core/storeAssets/domain/models/StoreAssets.model';

interface IUseFavourite {
  isSongStored: boolean;
  isArtistStored: boolean;
  handleSongFav: (song: TSong) => void;
  handleArtistFav: (artist: TArtist) => void;
  handleGetFavSongs: () => TSong[];
  handleGetFavArtists: () => TArtist[];
}

const useFavourite = (): IUseFavourite => {
  const { id } = useParams();
  const [isSongStored, setIsSongStored] = useState(false);
  const [isArtistStored, setIsArtistStored] = useState(false);

  const handleAddSong = (song: TSong) => setIsSongStored(storeAssetsController(storeAssetsRepository()).addSongOnLs(song));
  const handleDeleteSong = () => setIsSongStored(storeAssetsController(storeAssetsRepository()).deleteSongFromLs(`${id}`));

  const handleAddArtist = (artist: TArtist) => setIsArtistStored(storeAssetsController(storeAssetsRepository()).addArtistOnLs(artist));
  const handleDeleteArtist = () => setIsArtistStored(storeAssetsController(storeAssetsRepository()).deleteArtistFromLs(`${id}`));

  const handleIsArtistStored = () => storeAssetsController(storeAssetsRepository()).isArtistSavedOnLs(`${id}`);
  const handleIsSongStored = () => storeAssetsController(storeAssetsRepository()).isSongSavedOnLs(`${id}`);

  const handleSongFav = (song: TSong) => (isSongStored ? handleDeleteSong() : handleAddSong(song));
  const handleArtistFav = (artist: TArtist) => (isArtistStored ? handleDeleteArtist() : handleAddArtist(artist));

  const handleGetFavSongs = () => storeAssetsController(storeAssetsRepository()).getSongsFromLs();
  const handleGetFavArtists = () => storeAssetsController(storeAssetsRepository()).getArtistsFromLs();

  /*  useEffect(() => {
    localStorage.setItem(KEY_FAV_SONGS, JSON.stringify([]));
    localStorage.setItem(KEY_FAV_ARTISTS, JSON.stringify([]));
  }, []);
 */
  useEffect(() => {
    setIsSongStored(handleIsSongStored());
    setIsArtistStored(handleIsArtistStored());
  }, [id]);

  return { isSongStored, isArtistStored, handleSongFav, handleArtistFav, handleGetFavSongs, handleGetFavArtists };
};

export default useFavourite;
