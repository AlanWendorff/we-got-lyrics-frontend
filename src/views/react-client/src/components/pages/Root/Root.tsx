import useTabName from '@/hooks/useTabName';
import Hits from './components/Hits';
import styles from './Root.module.scss';
import { APP_NAME } from '@/constants/config';

const Root = () => {
  useTabName({ tabName: APP_NAME });

  return (
    <div className={styles.container}>
      <Hits />
    </div>
  );
};

export default Root;
