import { FC } from 'react';
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
      <p className={styles.aka__desktop}>{aka && `AKA: ${aka.map((alternateName) => ` ${alternateName}`)}`}</p>
      <p className={styles.aka__mobile}>{aka && `AKA: ${aka[0]}`}</p>
    </div>
  );
};

export default Identity;
