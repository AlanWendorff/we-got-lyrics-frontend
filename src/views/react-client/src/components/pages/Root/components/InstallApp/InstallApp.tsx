import useHandleInstallPwa from '@/hooks/useHandleInstallPwa';
import styles from './InstallApp.module.scss';

const InstallApp = () => {
  const { isAppInstalled, handleInstallApp } = useHandleInstallPwa();

  return (
    <div className={styles.container}>
      {!isAppInstalled && (
        <button className={styles.btn} onClick={handleInstallApp} aria-label='Install app on device'>
          <p className={styles.title}>INSTALL APP</p>
        </button>
      )}
    </div>
  );
};
export default InstallApp;
