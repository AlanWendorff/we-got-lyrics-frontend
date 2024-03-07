import { NavLink, useLocation } from 'react-router-dom';

import homeIconOl from '@images/navbar/home-icon-ol.png';
import homeIconSol from '@images/navbar/home-icon-sol.png';

import artistIconOl from '@images/navbar/artist-icon-ol.png';
import artistIconSol from '@images/navbar/artist-icon-sol.png';

import musicIconOl from '@images/navbar/music-icon-ol.png';
import musicIconSol from '@images/navbar/music-icon-sol.png';

import downloadIcon from '@images/navbar/download-icon.png';

import styles from './MobileNavbar.module.scss';
import { ROOT, STORED_ARTISTS, STORED_SONGS } from '@/constants/routes';
import { PWA_PROMPT_INCOMPATIBLE_BROWSER } from '@/constants/config';
import useHandleInstallPwa from '@/hooks/useHandleInstallPwa';

const MobileNavbar = () => {
  const { isAppInstalled, handleInstallApp } = useHandleInstallPwa();
  const location = useLocation();
  const isWebOnRoot = location.pathname === ROOT;
  const isWebOnArtists = location.pathname === STORED_ARTISTS;
  const isWebOnSongs = location.pathname === STORED_SONGS;

  return (
    <div className={styles.container}>
      <NavLink
        className={({ isActive }) => (isActive ? `${styles.control} ${styles.active}` : styles.control)}
        to={ROOT}
        aria-label='Go to home'
      >
        <img src={isWebOnRoot ? homeIconSol : homeIconOl} alt='home icon' />
        Home
      </NavLink>

      <NavLink
        className={({ isActive }) => (isActive ? `${styles.control} ${styles.active}` : styles.control)}
        to={STORED_ARTISTS}
        aria-label='Go to home'
      >
        <img src={isWebOnArtists ? artistIconSol : artistIconOl} alt='home icon' />
        Fav Artists
      </NavLink>

      <NavLink
        className={({ isActive }) => (isActive ? `${styles.control} ${styles.active}` : styles.control)}
        to={STORED_SONGS}
        aria-label='Go to home'
      >
        <img src={isWebOnSongs ? musicIconSol : musicIconOl} alt='home icon' />
        Fav Songs
      </NavLink>

      {PWA_PROMPT_INCOMPATIBLE_BROWSER ||
        (!isAppInstalled && (
          <button className={styles.control} onClick={handleInstallApp} aria-label='Install app on device'>
            <img src={downloadIcon} alt='download icon' />
            <p className={styles.title}>Install PWA</p>
          </button>
        ))}
    </div>
  );
};
export default MobileNavbar;
