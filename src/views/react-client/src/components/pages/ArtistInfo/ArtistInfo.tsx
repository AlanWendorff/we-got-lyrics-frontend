import { useParams } from 'react-router-dom';
import styles from './ArtistInfo.module.scss';
import { useEffect, useState } from 'react';
import artistInfoController from '@core/artistInfo/application/ArtistInfo.controller';
import artistInfoRepository from '@core/artistInfo/infrastructure/repositories/ArtistInfo.repository';
import TArtistInfo from '@core/artistInfo/domain/models/ArtistInfo.model';

const ArtistInfo = () => {
  const { id } = useParams();
  console.log('Artist ID:', id);
  const [artistInfo, setArtistInfo] = useState<TArtistInfo | null>(null);

  useEffect(() => {
    artistInfoController(artistInfoRepository())
      .getArtistInfo(`${id}`)
      .then((response) => {
        setArtistInfo(response);
      });
  }, []);

  function generateChildren(children: any) {
    return children
      .map((child: any) => {
        if (typeof child === 'string') {
          return child;
        } else if (child.tag === 'a') {
          return `<${child.tag} href="${child.attributes.href}" rel="${child.attributes.rel}">${child.children}</${child.tag}>`;
        } else if (child.tag === 'img') {
          return `<${child.tag} src="${child.attributes.src}" alt="${child.attributes.alt}" width="${child.attributes.width}" height="${child.attributes.height}" />`;
        }
      })
      .join('');
  }

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <img className={styles.background} src={artistInfo?.artist.header_image_url} />
        <div className={styles.blur} />
      </div>

      <div className={styles.body}>
        <img className={styles.artist__thumbnail} src={artistInfo?.artist.image_url} />

        <div>
          <p className={styles.artist__name}>{artistInfo?.artist.name}</p>
          <p className={styles.artist__aka}>
            AKA:{' '}
            {artistInfo?.artist.alternate_names.map((alternate_name) => (
              <>{alternate_name}</>
            ))}
          </p>
        </div>

        <div>
          <p>{artistInfo?.artist.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ArtistInfo;
