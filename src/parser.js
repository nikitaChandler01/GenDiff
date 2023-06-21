import yaml from 'js-yaml';
import path from 'path';
import fs from 'node:fs';

const parseFile = (filepath) => {
  let readFileSync;
  if (path.extname(filepath) === ('.yml' || '.yaml')) {
    readFileSync = fs.readFileSync(filepath, 'utf-8');
    return yaml.load(readFileSync);
  }
  if (path.extname(filepath) === '.json') {
    readFileSync = fs.readFileSync(filepath, 'utf-8');
    return JSON.parse(readFileSync);
  }
  return console.log('Error! Unknown file extension!');
};

export default parseFile;
