const isSameKey = (key, array) => {
  array.forEach((item) => {
    const [keyOfArray,] = item;
    if (keyOfArray === key) return true;
    return false;
  });
};

export default isSameKey;
