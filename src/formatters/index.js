import stylish from './stylish.js';
import plain from './plain.js';
import json from './json.js';

/* eslint-disable-next-line */
const format = (tree, formatterName) => {
  if (formatterName === 'plain') return plain(tree);
  if (formatterName === 'json') return json(tree);
  return stylish(tree);
};

export default format;
