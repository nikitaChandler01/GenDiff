const isSameItem = (key, value, array) => {
  /* eslint-disable-next-line */
  for (const item of array) {
    const [key2, value2] = item;
    if (key1 === key2 && value1 === value2) return true;
  }
  return false;
};
export default isSameItem;
