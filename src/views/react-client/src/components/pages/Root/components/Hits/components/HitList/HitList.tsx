import { ComponentProps, FC } from 'react';
import SongItem from '@/components/shared/SongItem/SongItem';
import { THit } from '@core/charts/domain/models/Charts.model';
import HitListSkeleton from './HitList.skeleton';

interface IHitListProps extends ComponentProps<'ul'> {
  hits: THit[] | undefined;
}

const HitList: FC<IHitListProps> = ({ hits, ...rest }) => {
  if (!hits) {
    return <HitListSkeleton />;
  }

  return (
    <ul {...rest}>
      {hits?.map(({ title, img, owner }, key) => (
        <SongItem key={key} id={'_'} number={key + 1} title={title} thumbnail={img} artist={owner} />
      ))}
    </ul>
  );
};

export default HitList;
