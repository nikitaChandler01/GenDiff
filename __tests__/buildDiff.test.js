import path from 'path';
import { fileURLToPath } from 'url';
import getDiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const pathToJsonFile1 = path.join(__dirname, '__fixtures__', 'file1.test.json');
const pathToJsonFile2 = path.join(__dirname, '__fixtures__', 'file2.test.json');
const pathToJsonFile3 = path.join(__dirname, '__fixtures__', 'file3.test.json');

const actual12 = '{\n  - follow: false\n    host: hexlet.io\n  - proxy: 123.234.53.22\n  - timeout: 50\n  + timeout: 20\n  + verbose: true\n}';
test('getDiff', () => {
  expect(getDiff(pathToJsonFile1, pathToJsonFile2)).toBe(actual12);
});
