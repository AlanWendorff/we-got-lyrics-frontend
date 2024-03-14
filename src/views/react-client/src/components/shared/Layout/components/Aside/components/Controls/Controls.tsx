import useHandleInstallPwa from '@/hooks/useHandleInstallPwa';
import { ROOT } from '@/constants/routes';
import { NavLink, useLocation } from 'react-router-dom';
import styles from './Controls.module.scss';
import homeIconOutlined from '@images/shared/home-icon.png';
import homeIconSolid from '@images/shared/home-icon-sol.png';
import downloadIcon from '@images/shared/download-icon.png';
import { PWA_PROMPT_INCOMPATIBLE_BROWSER } from '@/constants/config';

const Controls = () => {
  const location = useLocation();

  const isWebOnRoot = location.pathname === ROOT;
  const { isAppInstalled, handleInstallApp } = useHandleInstallPwa();

  return (
    <div className={styles.container}>
      <NavLink
        className={({ isActive }) => (isActive ? `${styles.control} ${styles.active}` : styles.control)}
        to={ROOT}
        aria-label='Go to home'
      >
        <img src={isWebOnRoot ? homeIconSolid : homeIconOutlined} alt='home icon' />
        <span>Home</span>
      </NavLink>

      {PWA_PROMPT_INCOMPATIBLE_BROWSER ||
        (!isAppInstalled && (
          <button className={styles.control} onClick={handleInstallApp} aria-label='Install app on device'>
            <img src={downloadIcon} alt='download icon' />
            <span>Install APP</span>
          </button>
        ))}
    </div>
  );
};
export default Controls;
