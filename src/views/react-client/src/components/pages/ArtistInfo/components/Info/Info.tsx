import { ComponentProps, FC } from 'react';
import Skeleton from 'react-loading-skeleton';
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

const ThumbnailArtist: FC<IThumbnail> = ({ image, ...rest }) =>
  image ? (
    <img className={styles.artist__thumbnail} src={image} alt='artist thumbnail' {...rest} />
  ) : (
    <Skeleton width={288} height={288} circle />
  );

const Name: FC<INameProps> = ({ name, alternate_names }) => (
  <div>
    <p className={styles.artist__name}>{name || <Skeleton height={25} width={150} />}</p>
    {alternate_names ? (
      <p className={styles.artist__aka}>
        AKA:{' '}
        {alternate_names.map((alternate_name) => (
          <>{`${alternate_name}, `}</>
        ))}
      </p>
    ) : (
      <Skeleton height={13} width={80} />
    )}
  </div>
);

const Description: FC<IDescriptionProps> = ({ name, description }) => (
  <div className={styles.description}>
    <p className={styles.description_title}>{name ? `About “${name}”` : <Skeleton />}</p>
    <p className={styles.description_content}>{description || <Skeleton count={3} />}</p>
  </div>
);

Info.ThumbnailArtist = ThumbnailArtist;
Info.Name = Name;
Info.Description = Description;

export default Info;
