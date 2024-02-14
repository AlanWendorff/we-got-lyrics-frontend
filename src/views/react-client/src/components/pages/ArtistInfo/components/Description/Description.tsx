import { FC } from 'react';
import Skeleton from 'react-loading-skeleton';
import styles from './Description.module.scss';

interface IDescriptionProps {
  name: string | undefined;
  description: string | undefined;
}

const Description: FC<IDescriptionProps> = ({ name, description }) => (
  <div className={styles.container}>
    <p className={styles.description_title}>{name ? `About “${name}”` : <Skeleton />}</p>
    <p className={styles.description_content}>{description || <Skeleton count={3} />}</p>
  </div>
);

export default Description;
