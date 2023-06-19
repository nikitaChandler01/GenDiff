const formaterOfDif = (symbol, counter) => {
  const defaultIndent = '  ';
  const indent = defaultIndent.repeat(2 * (counter - 1));
  return `${indent}${symbol} `;
};

export default formaterOfDif;
