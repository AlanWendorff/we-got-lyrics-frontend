import { ComponentProps } from 'react';

interface IThumbnail extends ComponentProps<'img'> {
  name?: string;
  image_thumbnail: string | undefined;
}

export default IThumbnail;
