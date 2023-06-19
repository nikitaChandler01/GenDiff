const isSameKey = (key, array) => {
  array.forEach((item) => {
    if (item.includes[key]) return true;
    return false;
  });
};

export default isSameKey;
