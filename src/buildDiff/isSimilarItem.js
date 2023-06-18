const isSimilarItem = (key, value, array) => {
  /* eslint-disable-next-line */
  for (const item of array) {
    if (item.includes(key) && !item.includes(value)) return true;
  }
  return false;
};
export default isSimilarItem;
