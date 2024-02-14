import { ComponentProps } from 'react';

interface IThumbnail extends ComponentProps<'img'> {
  name?: string;
  image: string | undefined;
}

export default IThumbnail;
