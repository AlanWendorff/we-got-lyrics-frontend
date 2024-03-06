import { KEY_FAV_SONGS } from '@/constants/localStorage';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ISong from '@/interfaces/songOnLocalStorage.interface';

interface IUseAddSongToFav {
  isOnFav: boolean;
  handleSetIsOnFav: (song: ISong) => void;
}

const useAddSongToFav = (): IUseAddSongToFav => {
  const { id } = useParams();
  const [isOnFav, setIsOnFav] = useState(false);

  const handleDeleteSongFromFav = () => {
    const LS_FAV_SONGS = localStorage.getItem(KEY_FAV_SONGS);
    const PARSED_LS_FAV_SONGS: ISong[] = JSON.parse(LS_FAV_SONGS!);
    const FAV_SONGS = PARSED_LS_FAV_SONGS.filter((item) => `${item.id}` !== `${id}`);

    localStorage.setItem(KEY_FAV_SONGS, JSON.stringify(FAV_SONGS));

    setIsOnFav(false);
  };

  const handleAddSongToFav = (song: ISong) => {
    const LS_FAV_SONGS = localStorage.getItem(KEY_FAV_SONGS);
    const PARSED_LS_FAV_SONGS: ISong[] = JSON.parse(LS_FAV_SONGS!);

    localStorage.setItem(KEY_FAV_SONGS, JSON.stringify([...PARSED_LS_FAV_SONGS, song]));

    setIsOnFav(true);
  };

  const handleSetIsOnFav = (song: ISong) => (isOnFav ? handleDeleteSongFromFav() : handleAddSongToFav(song));

  /*   useEffect(() => {
    localStorage.setItem(KEY_FAV_SONGS, JSON.stringify([]));
    localStorage.setItem(KEY_FAV_ARTISTS, JSON.stringify([]));
  }, []); */

  useEffect(() => {
    const LS_FAV_SONGS = localStorage.getItem(KEY_FAV_SONGS);

    if (!LS_FAV_SONGS) {
      return;
    }

    const PARSED_LS_FAV_SONGS: ISong[] = JSON.parse(LS_FAV_SONGS!);
    const FAV_SONG: ISong | undefined = PARSED_LS_FAV_SONGS.find((item) => `${item.id}` === `${id}`);

    if (FAV_SONG) setIsOnFav(true);
  }, [handleSetIsOnFav]);

  return { isOnFav, handleSetIsOnFav };
};

export default useAddSongToFav;
