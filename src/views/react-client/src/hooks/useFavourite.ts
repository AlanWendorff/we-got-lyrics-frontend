import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import storeAssetsController from '@core/storeAssets/application/StoreAssets.controller';
import storeAssetsRepository from '@core/storeAssets/infrastructure/repositories/StoreAssets.repository';
import { TLocalStorageArtistModel, TLocalStorageSongModel } from '@core/storeAssets/domain/models/StoreAssets.model';
import useFavouriteStore from '@/store/useFavourite.store';

interface IUseFavourite {
  isSongStored: boolean;
  isArtistStored: boolean;
  handleSongFav: (song: TLocalStorageSongModel) => void;
  handleArtistFav: (artist: TLocalStorageArtistModel) => void;
  handleIsSongStored: (songId: string) => boolean;
  handleIsArtistStored: (artistId: string) => boolean;
}

const useFavourite = (): IUseFavourite => {
  const { id } = useParams();
  const [isSongStored, setIsSongStored] = useState(false);
  const [isArtistStored, setIsArtistStored] = useState(false);
  const { addArtist, deleteArtist, addSong, deleteSong, setInitialStore, setHasUserFav } = useFavouriteStore((state) => state);

  const handleIsArtistStored = (artistId: string) => {
    const isFinded = storeAssetsController(storeAssetsRepository()).isArtistSavedOnLs(artistId);
    setIsArtistStored(isFinded);
    return isFinded;
  };

  const handleIsSongStored = (songId: string) => {
    const isFinded = storeAssetsController(storeAssetsRepository()).isSongSavedOnLs(songId);
    setIsSongStored(isFinded);
    return isFinded;
  };

  const handleSongFav = (song: TLocalStorageSongModel) => {
    if (isSongStored) {
      deleteSong(String(song.id));
      setIsSongStored(false);
    } else {
      addSong(song);
      setIsSongStored(true);
    }
    setHasUserFav();
  };

  const handleArtistFav = (artist: TLocalStorageArtistModel) => {
    if (isArtistStored) {
      deleteArtist(String(artist.id));
      setIsArtistStored(false);
    } else {
      addArtist(artist);
      setIsArtistStored(true);
    }
    setHasUserFav();
  };

  useEffect(() => {
    try {
      setInitialStore();
      setHasUserFav();
    } catch (err) {
      storeAssetsController(storeAssetsRepository()).initialize();
    }
  }, [id]);

  return { isSongStored, isArtistStored, handleSongFav, handleArtistFav, handleIsSongStored, handleIsArtistStored };
};

export default useFavourite;
