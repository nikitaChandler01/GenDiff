const stringify = (value) => {
  if (typeof value === 'object' && value !== null) {
    return '[complex value]';
  }
  if (typeof value === 'boolean' || typeof value === 'number' || value === null) return String(value);
  return `'${value}'`;
};

const plain = (tree) => {
  const iter = (currentValue, path) => {
    const diffs = currentValue
      .filter(({ type }) => type !== 'unchanged')
      .map(({
        name, value, value1, value2, children, type,
      }) => {
        const pathToProp = [...path, name];
        const property = pathToProp.join('.');
        switch (type) {
          case '+':
            return `Property '${property}' was added with value: ${stringify(value)}`;
          case '-':
            return `Property '${property}' was removed`;
          case 'changed':
            return `Property '${property}' was updated. From ${stringify(value1)} to ${stringify(value2)}`;
          case 'children':
            return iter(children, pathToProp);
          default:
            throw new Error('Unknown type');
        }
      });
    return diffs.join('\n');
  };
  return iter(tree, []);
};

export default plain;
