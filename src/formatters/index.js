import stylish from './stylish.js';
import plain from './plain.js';
import json from './json.js';

/* eslint-disable-next-line */
const format = (tree, formatterName) => {
  if (formatterName === 'stylish') return stylish(tree);
  if (formatterName === 'plain') return plain(tree);
  if (formatterName === 'json') return json(tree);
};

export default format;
