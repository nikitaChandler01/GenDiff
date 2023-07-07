const stringify = (value) => {
  if (typeof value === 'object' && value !== null) {
    return '[complex value]';
  }
  if (typeof value === 'boolean' || value === null) return String(value);
  return `'${value}'`;
};

const plain = (tree) => {
  const iter = (currentValue, path) => {
    const diffs = currentValue
      .filter(({ type }) => type !== 'unchanged')
      .map((item) => {
        const pathToProp = [...path, item.name];
        const property = pathToProp.join('.');
        switch (item.type) {
          case '+':
            return `Property '${property}' was added with value: ${stringify(item.value)}`;
          case '-':
            return `Property '${property}' was removed`;
          case 'changed':
            return `Property '${property}' was updated. From ${stringify(item.value1)} to ${stringify(item.value2)}`;
          case 'children':
            return iter(item.children, pathToProp);
          default:
            throw new Error('Unknown type');
        }
      });
    return diffs.join('\n');
  };
  return iter(tree, []);
};

export default plain;
