import { FC } from 'react';
import styles from './NotFound.module.scss';

const NotFound: FC = () => (
  <div className={styles.container}>
    <h1>END OF THE ROAD :/</h1>

    <p>404: Not found.</p>
  </div>
);

export default NotFound;
