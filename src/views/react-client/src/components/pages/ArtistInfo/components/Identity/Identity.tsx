import { FC } from 'react';
import Skeleton from 'react-loading-skeleton';
import styles from './Identity.module.scss';

interface INameProps {
  name: string | undefined;
  aka: string[] | undefined;
}

const Identity: FC<INameProps> = ({ name, aka }) => (
  <div>
    <p className={styles.name}>{name || <Skeleton height={62} width={200} />}</p>
    {aka ? (
      <p className={styles.aka}>
        AKA:{' '}
        {aka.map((alternateName) => (
          <>{`${alternateName}, `}</>
        ))}
      </p>
    ) : (
      <Skeleton height={13} width={80} />
    )}
  </div>
);

export default Identity;
