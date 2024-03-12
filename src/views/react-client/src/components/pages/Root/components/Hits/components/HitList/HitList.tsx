import { ComponentProps, FC, RefObject } from 'react';
import { THit } from '@core/charts/domain/models/Charts.model';
import SongItem from '@/components/shared/SongItem/SongItem';
import HitListSkeleton from './HitList.skeleton';
import styles from './HitList.module.scss';
import { motion } from 'framer-motion';

interface IHitListProps extends ComponentProps<typeof motion.ul> {
  hits: THit[] | undefined;
  innerRef: RefObject<HTMLUListElement>;
}

const HitList: FC<IHitListProps> = ({ hits, innerRef, ...rest }) => {
  if (!hits) {
    return <HitListSkeleton />;
  }

  return (
    <motion.ul className={styles.container} ref={innerRef} {...rest}>
      {hits?.map(({ title, img, owner }, key) => (
        <SongItem key={key} id={'_'} number={key + 1} title={title} thumbnail={img} artist={owner} />
      ))}
    </motion.ul>
  );
};

export default HitList;
