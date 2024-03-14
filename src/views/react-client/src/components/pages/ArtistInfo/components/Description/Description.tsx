import { FC } from 'react';
import Skeleton from 'react-loading-skeleton';
import styles from './Description.module.scss';

interface IDescriptionProps {
  name: string | undefined;
  description: string | undefined;
}

const Description: FC<IDescriptionProps> = ({ name, description }) => (
  <div className={styles.container}>
    {name && <p className={styles.description_title}>{`About “${name}”`}</p>}
    <p className={styles.description_content}>
      {description || (
        <>
          <Skeleton />
          <Skeleton />
          <Skeleton />
        </>
      )}
    </p>
  </div>
);

export default Description;
