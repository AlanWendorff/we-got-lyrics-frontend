const getItemMapper = (localStorageKey: string) => {
  const items = localStorage.getItem(localStorageKey) ?? '[]';
  return JSON.parse(items);
};

export default getItemMapper;
