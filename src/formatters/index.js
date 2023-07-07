import stylish from './stylish.js';
import plain from './plain.js';

/* eslint-disable-next-line */
const format = (tree, formatterName) => {
  if (formatterName === 'stylish') return stylish(tree);
  if (formatterName === 'plain') return plain(tree);
};

export default format;
