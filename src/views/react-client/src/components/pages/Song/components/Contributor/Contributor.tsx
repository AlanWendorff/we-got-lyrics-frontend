import { FC } from 'react';
import styles from './Contributor.module.scss';

interface IContributorProps {
  contributors: string[] | undefined;
  type: string;
}

const Contributor: FC<IContributorProps> = ({ contributors, type }) =>
  contributors && (
    <div className={styles.contributor}>
      <p>{type}</p>
      {contributors.map((contributor) => (
        <span>{contributor}</span>
      ))}
    </div>
  );

export default Contributor;
