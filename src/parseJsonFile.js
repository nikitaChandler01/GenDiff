import * as fs from 'node:fs';

const parseJsonFile = (filepath) => {
  const readFile = fs.readFileSync(filepath, 'utf-8');
  const jsonFile = JSON.parse(readFile);
  return jsonFile;
};

export default parseJsonFile;
