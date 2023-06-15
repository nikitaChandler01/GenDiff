const isSameItem = (elem, array) => {
  const [key1, value1] = elem;
  /* eslint-disable-next-line */
  for (const item of array) {
    const [key2, value2] = item;
    if (key1 === key2 && value1 === value2) return true;
  }
  return false;
};
export default isSameItem;
