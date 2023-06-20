import * as fs from 'node:fs';
import path from 'path';
import { fileURLToPath } from 'url';
import getDiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const makePathToTestFile = (filename) => path.resolve(__dirname, '__fixtures__', filename);

describe('testJsonFiles', () => {
  const makePathToJsonFile = (filename) => path.resolve(__dirname, '__fixtures__', 'jsonFiles', filename);

  test('getDiff12', () => {
    const actual12 = fs.readFileSync(makePathToTestFile('compare12.nested.txt'), 'utf-8');
    expect(getDiff(makePathToJsonFile('file1.nested.test.json'), makePathToJsonFile('file2.nested.test.json'))).toBe(actual12);
  });
});
