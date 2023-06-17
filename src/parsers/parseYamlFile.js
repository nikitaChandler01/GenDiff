import * as fs from 'node:fs';
import yaml from 'js-yaml';

const parseYamlFile = (filepath) => {
  const readFile = fs.readFileSync(filepath, 'utf-8');
  const yamlFile = yaml.load(readFile);
  return yamlFile;
};

export default parseYamlFile;
