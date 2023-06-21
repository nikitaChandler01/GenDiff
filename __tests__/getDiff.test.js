import * as fs from 'node:fs';
import path from 'path';
import { fileURLToPath } from 'url';
import getDiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const makePathToTestFile = (filename) => path.resolve(__dirname, '../__fixtures__', filename);
const actual12 = fs.readFileSync(makePathToTestFile('compare12.nested.txt'), 'utf-8');

describe('testJsonFiles', () => {
  const makePathToJsonFile = (filename) => path.resolve(__dirname, '../__fixtures__', filename);
  test('getDiff12', () => {
    expect(getDiff(makePathToJsonFile('file1.nested.json'), makePathToJsonFile('file2.nested.json'))).toBe(actual12);
  });
});

describe('testYamlFiles', () => {
  const makePathToYamlFile = (filename) => path.resolve(__dirname, '../__fixtures__', filename);
  test('getDiff12', () => {
    expect(getDiff(makePathToYamlFile('file1.nested.yml'), makePathToYamlFile('file2.nested.yml'))).toBe(actual12);
  });
});
