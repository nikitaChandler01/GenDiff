const formaterOfDif = (key, value, symbol, counter) => {
  const defaultIndent = '  ';
  const indent = defaultIndent.repeat(2 * (counter - 1));
  return `${indent}${symbol} ${key}: ${value}\n`;
};

export default formaterOfDif;
