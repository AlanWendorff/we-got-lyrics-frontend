import { FC } from 'react';
import { APP_NAME } from '@/constants/config';
import useTabName from '@/hooks/useTabName';
import Hits from './components/Hits';
import styles from './Root.module.scss';

const Root: FC = () => {
  useTabName({ tabName: APP_NAME });

  return (
    <div className={styles.container}>
      <Hits />
    </div>
  );
};

export default Root;
