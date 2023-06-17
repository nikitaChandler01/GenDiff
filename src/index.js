import path from 'path';
import { fileURLToPath } from 'url';
import parseJsonFile from './parsers/parseJsonFile.js';
import parseYamlFile from './parsers/parseYamlFile.js';
import buildDiff from './buildDiff/buildDiff.js';

const getDiff = (filepath1, filepath2) => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const absolutePath1 = path.resolve(__dirname, filepath1);
  const absolutePath2 = path.resolve(__dirname, filepath2);
  const dataParse1 = (path.extname(absolutePath1) === '.json') ? parseJsonFile(absolutePath1) : parseYamlFile(absolutePath1);
  const dataParse2 = (path.extname(absolutePath2) === '.json') ? parseJsonFile(absolutePath2) : parseYamlFile(absolutePath2);
  return buildDiff(dataParse1, dataParse2);
};

export default getDiff;
