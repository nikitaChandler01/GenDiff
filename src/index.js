import path from 'path';
import { fileURLToPath } from 'url';
import parseJsonFile from './parseJsonFile.js';
import buildDiff from './buildDiff/buildDiff.js';

const getDiff = (filepath1, filepath2) => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const absolutePath1 = path.resolve(__dirname, filepath1);
  const absolutePath2 = path.resolve(__dirname, filepath2);
  const dataParse1 = parseJsonFile(absolutePath1);
  const dataParse2 = parseJsonFile(absolutePath2);
  return buildDiff(dataParse1, dataParse2);
};

export default getDiff;
