import stylish from './stylish.js';

/* eslint-disable-next-line */
const format = (tree, formatterName) => {
  if (formatterName === 'stylish') return stylish(tree);
};

export default format;
