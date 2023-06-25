import stylish from './stylish.js';

const format = (tree, formatterName) => {
  switch (formatterName) {
    case 'stylish':
      return stylish(tree);
  }
  return '';
};

export default format;
