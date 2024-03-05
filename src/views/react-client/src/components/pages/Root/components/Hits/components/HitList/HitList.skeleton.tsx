import { FC } from 'react';
import SongItemSkeleton from '@/components/shared/SongItem/SongItem.skeleton';

const HitListSkeleton: FC = () => (
  <ul>
    {[...Array(10)].map((_, index) => (
      <SongItemSkeleton key={index} />
    ))}
  </ul>
);

export default HitListSkeleton;
