import path from 'path';
import { fileURLToPath } from 'url';
import parseFile from './parser.js';
import buildDiff from './buildDiff.js';
import formatDiff from './formatters/index.js';

const getDiff = (filepath1, filepath2, formatterName) => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const absolutePath1 = path.resolve(__dirname, '../__fixtures__', filepath1);
  const absolutePath2 = path.resolve(__dirname, '../__fixtures__', filepath2);
  const dataParse1 = parseFile(absolutePath1);
  const dataParse2 = parseFile(absolutePath2);
  const tree = buildDiff(dataParse1, dataParse2);
  return formatDiff(tree, formatterName);
};

export default getDiff;
