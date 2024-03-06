import useHandleInstallPwa from '@/hooks/useHandleInstallPwa';
import { ROOT } from '@/constants/routes';
import { NavLink, useLocation } from 'react-router-dom';
import styles from './Controls.module.scss';
import homeIconOutlined from '@images/shared/home-icon.png';
import homeIconSolid from '@images/shared/home-icon-sol.png';
import downloadIcon from '@images/shared/download-icon.png';
import { BROWSER_NAME } from '@/constants/config';
import { EBrowserList } from '@/constants/enum';

const Controls = () => {
  const location = useLocation();

  const isWebOnRoot = location.pathname === ROOT;
  const { isAppInstalled, handleInstallApp } = useHandleInstallPwa();
  const showInstallAppIf = () => BROWSER_NAME === EBrowserList.Firefox || BROWSER_NAME === EBrowserList.Safari;

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

      {showInstallAppIf() ||
        (!isAppInstalled && (
          <button className={styles.control} onClick={handleInstallApp} aria-label='Install app on device'>
            <img src={downloadIcon} alt='download icon' />
            <p className={styles.title}>Install PWA</p>
          </button>
        ))}
    </div>
  );
};
export default Controls;
