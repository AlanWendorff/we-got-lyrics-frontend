import { FC } from 'react';
import styles from './Contributor.module.scss';

interface IContributorProps {
  contributors: string[] | undefined;
  type: string;
}

const Contributor: FC<IContributorProps> = ({ contributors, type }) =>
  contributors && (
    <div className={styles.container}>
      <p>{type}</p>
      {contributors.map((contributor) => (
        <span key={contributor}>{contributor}</span>
      ))}
    </div>
  );

export default Contributor;
