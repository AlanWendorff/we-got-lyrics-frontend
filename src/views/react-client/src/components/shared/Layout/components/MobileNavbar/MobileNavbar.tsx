import { NavLink, useLocation } from 'react-router-dom';
import homeIconOutlined from '@images/shared/home-icon.png';
import homeIconSolid from '@images/shared/home-icon-sol.png';
import downloadIcon from '@images/shared/download-icon.png';
import styles from './MobileNavbar.module.scss';
import { ROOT } from '@/constants/routes';
import { PWA_PROMPT_INCOMPATIBLE_BROWSER } from '@/constants/config';
import useHandleInstallPwa from '@/hooks/useHandleInstallPwa';

const MobileNavbar = () => {
  const { isAppInstalled, handleInstallApp } = useHandleInstallPwa();
  const location = useLocation();
  const isWebOnRoot = location.pathname === ROOT;

  return (
    <div className={styles.container}>
      <NavLink
        className={({ isActive }) => (isActive ? `${styles.control} ${styles.active}` : styles.control)}
        to={ROOT}
        aria-label='Go to home'
      >
        <img src={isWebOnRoot ? homeIconSolid : homeIconOutlined} alt='home icon' />
        Home
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
