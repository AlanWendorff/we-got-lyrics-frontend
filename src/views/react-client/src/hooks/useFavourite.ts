import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import storeAssetsController from '@core/storeAssets/application/StoreAssets.controller';
import storeAssetsRepository from '@core/storeAssets/infrastructure/repositories/StoreAssets.repository';
import { TArtist, TSong } from '@core/storeAssets/domain/models/StoreAssets.model';
import { KEY_FAV_SONGS, KEY_FAV_ARTISTS } from '@core/configuration/localStorage/localStorage';

interface IUseFavourite {
  isSongStored: boolean;
  isArtistStored: boolean;
  hasUserFav: boolean;
  handleSongFav: (song: TSong) => void;
  handleArtistFav: (artist: TArtist) => void;
  handleGetFavSongs: () => TSong[];
  handleGetFavArtists: () => TArtist[];
}

const useFavourite = (): IUseFavourite => {
  const { id } = useParams();
  const [isSongStored, setIsSongStored] = useState(false);
  const [isArtistStored, setIsArtistStored] = useState(false);
  const [hasUserFav, setHasUserFav] = useState(false);

  const handleAddSong = (song: TSong) => setIsSongStored(storeAssetsController(storeAssetsRepository()).addSongOnLs(song));
  const handleDeleteSong = () => setIsSongStored(storeAssetsController(storeAssetsRepository()).deleteSongFromLs(`${id}`));

  const handleAddArtist = (artist: TArtist) => setIsArtistStored(storeAssetsController(storeAssetsRepository()).addArtistOnLs(artist));
  const handleDeleteArtist = () => setIsArtistStored(storeAssetsController(storeAssetsRepository()).deleteArtistFromLs(`${id}`));

  const handleIsArtistStored = () => setIsArtistStored(storeAssetsController(storeAssetsRepository()).isArtistSavedOnLs(`${id}`));
  const handleIsSongStored = () => setIsSongStored(storeAssetsController(storeAssetsRepository()).isSongSavedOnLs(`${id}`));

  const handleSongFav = (song: TSong) => (isSongStored ? handleDeleteSong() : handleAddSong(song));
  const handleArtistFav = (artist: TArtist) => (isArtistStored ? handleDeleteArtist() : handleAddArtist(artist));

  const handleGetFavSongs = () => storeAssetsController(storeAssetsRepository()).getSongsFromLs();
  const handleGetFavArtists = () => storeAssetsController(storeAssetsRepository()).getArtistsFromLs();

  useEffect(() => {
    try {
      setHasUserFav(!(handleGetFavArtists().length === 0 && handleGetFavSongs().length === 0));
      handleIsSongStored();
      handleIsArtistStored();
    } catch (err) {
      localStorage.setItem(KEY_FAV_SONGS, JSON.stringify([]));
      localStorage.setItem(KEY_FAV_ARTISTS, JSON.stringify([]));
    }
  }, [id]);

  return { hasUserFav, isSongStored, isArtistStored, handleSongFav, handleArtistFav, handleGetFavSongs, handleGetFavArtists };
};

export default useFavourite;
