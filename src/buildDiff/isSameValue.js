const isSameValue = (value, array) => {
  const [, sameValueOfArray] = array;
  if (JSON.stringify(value) === JSON.stringify(sameValueOfArray)) return true;
  return false;
};

export default isSameValue;
