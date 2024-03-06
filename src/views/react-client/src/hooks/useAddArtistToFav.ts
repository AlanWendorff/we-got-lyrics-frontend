import { KEY_FAV_ARTISTS } from '@/constants/localStorage';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import IArtist from '@/interfaces/artistOnLocalStorage.interface';

interface IUseAddArtistToFav {
  isOnFav: boolean;
  handleSetIsOnFav: (song: IArtist) => void;
}

const useAddArtistToFav = (): IUseAddArtistToFav => {
  const { id } = useParams();
  const [isOnFav, setIsOnFav] = useState(false);

  const handleDeleteSongFromFav = () => {
    const LS_FAV_SONGS = localStorage.getItem(KEY_FAV_ARTISTS);
    const PARSED_LS_FAV_SONGS: IArtist[] = JSON.parse(LS_FAV_SONGS!);
    const FAV_SONGS = PARSED_LS_FAV_SONGS.filter((item) => `${item.id}` !== `${id}`);

    localStorage.setItem(KEY_FAV_ARTISTS, JSON.stringify(FAV_SONGS));

    setIsOnFav(false);
  };

  const handleAddSongToFav = (song: IArtist) => {
    const LS_FAV_SONGS = localStorage.getItem(KEY_FAV_ARTISTS);
    const PARSED_LS_FAV_SONGS: IArtist[] = JSON.parse(LS_FAV_SONGS!);

    localStorage.setItem(KEY_FAV_ARTISTS, JSON.stringify([...PARSED_LS_FAV_SONGS, song]));

    setIsOnFav(true);
  };

  const handleSetIsOnFav = (song: IArtist) => (isOnFav ? handleDeleteSongFromFav() : handleAddSongToFav(song));

  /*   useEffect(() => {
    localStorage.setItem(KEY_FAV_ARTISTS, JSON.stringify([]));
    localStorage.setItem(KEY_FAV_ARTISTS, JSON.stringify([]));
  }, []); */

  useEffect(() => {
    const LS_FAV_SONGS = localStorage.getItem(KEY_FAV_ARTISTS);

    if (!LS_FAV_SONGS) {
      return;
    }

    const PARSED_LS_FAV_SONGS: IArtist[] = JSON.parse(LS_FAV_SONGS!);
    const FAV_SONG: IArtist | undefined = PARSED_LS_FAV_SONGS.find((item) => `${item.id}` === `${id}`);

    if (FAV_SONG) setIsOnFav(true);
  }, [handleSetIsOnFav]);

  return { isOnFav, handleSetIsOnFav };
};

export default useAddArtistToFav;
