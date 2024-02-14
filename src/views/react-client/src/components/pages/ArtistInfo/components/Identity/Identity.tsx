import { FC } from 'react';
import Skeleton from 'react-loading-skeleton';
import styles from './Identity.module.scss';
import IdentitySkeleton from './Identity.skeleton';

interface INameProps {
  name: string | undefined;
  aka: string[] | undefined;
}

const Identity: FC<INameProps> = ({ name, aka }) => {
  if (!name) {
    return <IdentitySkeleton />;
  }

  return (
    <div>
      <p className={styles.name}>{name}</p>
      <p className={styles.aka}>{aka && `AKA: ${aka.map((alternateName) => ` ${alternateName}`)}`}</p>
    </div>
  );
};

export default Identity;
