const formaterOfDif = (symbol, counter) => {
  const defaultIndent = ' ';
  const indent = (counter === 0) ? '' : defaultIndent.repeat(2 * counter);
  return `${indent}${symbol}`;
};

export default formaterOfDif;
