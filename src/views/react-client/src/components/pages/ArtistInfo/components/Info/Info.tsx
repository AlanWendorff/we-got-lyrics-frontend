import { ComponentProps, FC } from 'react';
import IThumbnail from '@/interfaces/thumbnail.interface';
import styles from './Info.module.scss';

interface IInfoProps extends ComponentProps<'div'> {}

interface INameProps {
  name: string | undefined;
  alternate_names: string[] | undefined;
}

interface IDescriptionProps {
  name: string | undefined;
  description: string | undefined;
}

const Info = ({ children }: IInfoProps) => <div className={styles.container}>{children}</div>;

const ThumbnailArtist: FC<IThumbnail> = ({ image_thumbnail, ...rest }) => (
  <img className={styles.artist__thumbnail} src={image_thumbnail} alt='artist thumbnail' {...rest} />
);

const Name: FC<INameProps> = ({ name, alternate_names }) => (
  <div>
    <p className={styles.artist__name}>{name}</p>
    {alternate_names && (
      <p className={styles.artist__aka}>
        AKA:{' '}
        {alternate_names.map((alternate_name) => (
          <>{`${alternate_name}, `}</>
        ))}
      </p>
    )}
  </div>
);

const Description: FC<IDescriptionProps> = ({ name, description }) => (
  <div className={styles.description}>
    <p className={styles.description_title}>About “{name}”</p>
    <p className={styles.description_content}>{description}</p>
  </div>
);

Info.ThumbnailArtist = ThumbnailArtist;
Info.Name = Name;
Info.Description = Description;

export default Info;
