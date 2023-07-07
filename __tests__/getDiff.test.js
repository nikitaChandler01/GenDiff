import * as fs from 'node:fs';
import path from 'path';
import { fileURLToPath } from 'url';
import getDiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const makePathToTestFile = (filename) => path.resolve(__dirname, '../__fixtures__', filename);
const actualStylish12 = fs.readFileSync(makePathToTestFile('compare12.nested.txt'), 'utf-8');
const actualPlain12 = fs.readFileSync(makePathToTestFile('compare12.plain.txt'), 'utf-8');

describe('testJsonFilesStylish', () => {
  const makePathToJsonFile = (filename) => path.resolve(__dirname, '../__fixtures__', filename);
  test('getDiff12', () => {
    expect(getDiff(makePathToJsonFile('file1.nested.json'), makePathToJsonFile('file2.nested.json'))).toBe(actualStylish12);
  });
  test('getDiffPlain12', () => {
    expect(getDiff(makePathToJsonFile('file1.nested.json'), makePathToJsonFile('file2.nested.json'), 'plain')).toBe(actualPlain12);
  });
});

describe('testYamlFilesStylish', () => {
  const makePathToYamlFile = (filename) => path.resolve(__dirname, '../__fixtures__', filename);
  test('getDiff12', () => {
    expect(getDiff(makePathToYamlFile('file1.nested.yml'), makePathToYamlFile('file2.nested.yml'))).toBe(actualStylish12);
  });
});
