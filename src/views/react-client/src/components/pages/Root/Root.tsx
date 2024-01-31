import useGetArtistInfo from '@/hooks/core/useGetArtistInfo';
import SearchBar from './components';
import styles from './Root.module.scss';

const Root = () => {
  const { data, error, isLoading } = useGetArtistInfo();

  if (isLoading || !data) {
    return <div>...loading</div>;
  }

  return (
    <div className={styles.container}>
      <SearchBar />
      <ul>
        <li>{data.id}</li>
        <li>{data.name}</li>
        <li>
          <img src={data.name} alt='band img' />
        </li>
      </ul>
    </div>
  );
};

export default Root;
