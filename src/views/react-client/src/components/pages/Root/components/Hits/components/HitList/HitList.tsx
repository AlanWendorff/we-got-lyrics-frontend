import { ComponentProps, FC } from 'react';
import { Link, generatePath } from 'react-router-dom';
import { SONG } from '@/constants/routes';
import styles from './HitList.module.scss';
import { THit } from '@core/charts/domain/models/Charts.model';
import HitListSkeleton from './HitList.skeleton';

interface IHitListProps extends ComponentProps<'ul'> {
  hits: THit[] | undefined;
}

const HitList: FC<IHitListProps> = ({ hits }) => {
  if (!hits) {
    return <HitListSkeleton />;
  }

  return (
    <ul className={styles.container}>
      {hits?.map(({ id, title, img, owner }, key) => (
        <li>
          <Link key={id} className={styles.song} to={generatePath(SONG, { id: `${id}`, name: title })}>
            <p className={styles.song__number}>{key + 1}</p>
            <img className={styles.song__thumbnail} src={img} alt='album thumbnail' />
            <div className={styles.song__info}>
              <p className={styles.song__info_title}>{title}</p>
              <p className={styles.song__info_artist}>{owner}</p>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default HitList;
