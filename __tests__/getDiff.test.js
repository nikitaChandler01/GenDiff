import * as fs from 'node:fs';
import path from 'path';
import { fileURLToPath } from 'url';
import getDiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const makePathToFile = (filename) => path.resolve(__dirname, '../__fixtures__', filename);
const actualStylish12 = fs.readFileSync(makePathToFile('compare12.nested.stylish.txt'), 'utf-8');
const actualPlain12 = fs.readFileSync(makePathToFile('compare12.nested.plain.txt'), 'utf-8');
const actualJson12 = (fs.readFileSync(makePathToFile('compare12.nested.json.txt'), 'utf-8'));

describe('testStylishFormatter', () => {
  test('getDiff12', () => {
    expect(getDiff(makePathToFile('file1.nested.yml'), makePathToFile('file2.nested.yml'), 'stylish')).toBe(actualStylish12);
  });
});

describe('testPlainFormatter', () => {
  test('getDiff12', () => {
    expect(getDiff(makePathToFile('file1.nested.yml'), makePathToFile('file2.nested.yml'), 'plain')).toBe(actualPlain12);
  });
});

describe('testJsonFormatter', () => {
  test('getDiff12', () => {
    expect(getDiff(makePathToFile('file1.nested.yml'), makePathToFile('file2.nested.yml'), 'json')).toBe(actualJson12);
  });
});
