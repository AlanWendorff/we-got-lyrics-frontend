import { FC } from 'react';
import styles from './Identity.module.scss';
import Skeleton from 'react-loading-skeleton';

interface INameProps {
  name: string | undefined;
  aka: string[] | undefined;
}

const Identity: FC<INameProps> = ({ name, aka }) => (
  <div className={styles.container}>
    <h1 className={styles.name}>{name || <Skeleton height={45} width={200} />}</h1>
    <p className={styles.aka__desktop}>{aka ? `AKA: ${aka.map((alternateName) => ` ${alternateName}`)}` : <Skeleton width={80} />}</p>
    <p className={styles.aka__mobile}>{aka ? `AKA: ${aka[0]}` : <Skeleton width={80} />}</p>
  </div>
);

export default Identity;
