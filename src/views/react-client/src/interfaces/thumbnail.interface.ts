import { ComponentProps } from 'react';

interface IThumbnailProps extends ComponentProps<'img'> {
  name?: string;
  image: string | undefined;
}

export default IThumbnailProps;
