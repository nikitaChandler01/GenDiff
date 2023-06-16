import * as fs from 'node:fs';
import path from 'path';
import { fileURLToPath } from 'url';
import getDiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
console.log(__dirname);
console.log(__filename);
const makePathToTestFile = (filename) => path.resolve(__dirname, '__fixtures__', filename);
const makePathToJsonFile = (filename) => path.resolve(__dirname, '__fixtures__', filename);

test('getDiff12', () => {
  const actual12 = fs.readFileSync(makePathToTestFile('compare12.txt'), 'utf-8');
  expect(getDiff(makePathToJsonFile('file1.test.json'), makePathToJsonFile('file2.test.json'))).toBe(actual12);
});
test('getDiff31', () => {
  const actual31 = fs.readFileSync(makePathToTestFile('compare31.txt'), 'utf-8');
  expect(getDiff(makePathToJsonFile('file3.test.json'), makePathToJsonFile('file1.test.json'))).toBe(actual31);
});
test('getDiff23', () => {
  const actual23 = fs.readFileSync(makePathToTestFile('compare23.txt'), 'utf-8');
  expect(getDiff(makePathToJsonFile('file2.test.json'), makePathToJsonFile('file3.test.json'))).toBe(actual23);
});
