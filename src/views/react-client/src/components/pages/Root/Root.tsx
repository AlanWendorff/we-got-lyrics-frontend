import useTabName from '@/hooks/useTabName';
import Hits from './components/Hits';
import InstallApp from './components/InstallApp';
import styles from './Root.module.scss';
import { APP_NAME } from '@/constants/config';
import { BROWSER_NAME } from '@/constants/config';
import { EBrowserList } from '@/constants/enum';

const Root = () => {
  useTabName({ tabName: APP_NAME });

  const showInstallAppIf = () => BROWSER_NAME === EBrowserList.Firefox || BROWSER_NAME === EBrowserList.Safari;

  return (
    <div className={styles.container}>
      <Hits />
      {!showInstallAppIf() && <InstallApp />}
    </div>
  );
};

export default Root;
