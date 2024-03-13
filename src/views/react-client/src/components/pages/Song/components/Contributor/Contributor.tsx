import { FC } from 'react';
import Skeleton from 'react-loading-skeleton';
import styles from './Contributor.module.scss';

interface IContributorProps {
  contributors: string[] | undefined;
  type: string;
}

const Contributor: FC<IContributorProps> = ({ contributors, type }) => {
  if (!contributors) {
    return (
      <div className={styles.container}>
        <Skeleton width={100} height={12} />
        <Skeleton width={160} height={19} />
      </div>
    );
  }

  return (
    contributors?.length !== 0 && (
      <div className={styles.container}>
        <p>{type}</p>
        {contributors.map((contributor) => (
          <span key={contributor}>{contributor}</span>
        ))}
      </div>
    )
  );
};

export default Contributor;
