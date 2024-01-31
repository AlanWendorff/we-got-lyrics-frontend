import styles from './SearchBar.module.scss';

const SearchBar = () => {
  return (
    <div className={styles.container}>
      <input placeholder='Search lyrics & more' autoComplete='off' />
    </div>
  );
};

export default SearchBar;
