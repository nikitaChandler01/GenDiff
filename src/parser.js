import yaml from 'js-yaml';
import path from 'path';
import fs from 'node:fs';

const getFileExtname = (filepath) => path.extname(filepath).slice(1);

const parse = (filepath) => {
  const readFileSync = fs.readFileSync(filepath, 'utf-8');
  const parsers = {
    json: JSON.parse,
    yaml: yaml.load,
    yml: yaml.load,
  };
  return parsers[getFileExtname(filepath)](readFileSync);
};

export default parse;

// const parsers = (filepath) => {
//   if (path.extname(filepath) === ('.yml' || '.yaml')) {
//     const readFileSync = fs.readFileSync(filepath, 'utf-8');
//     return yaml.load(readFileSync);
//   }
//   if (path.extname(filepath) === '.json') {
//     const readFileSync = fs.readFileSync(filepath, 'utf-8');
//     return JSON.parse(readFileSync);
//   }
//   return console.log('Error! Unknown file extension!');
// };
