import compareFunc from './compareFunc.js';
import isSameItem from './isSameItem.js';
import isSimilarItem from './isSimilarItem.js';

const buildDiff = (jsonFile1, jsonFile2) => {
  let result = '{\n';
  const jsObj1 = jsonFile1;
  const jsObj2 = jsonFile2;
  const entries1 = Object.entries(jsObj1);
  const entriesSorted1 = entries1.sort(compareFunc);
  const entries2 = Object.entries(jsObj2);
  const entriesSorted2 = entries2.sort(compareFunc);
  /* eslint-disable-next-line */
  for (const item of entriesSorted1) {
    const [key, value] = item;
    if (isSameItem(item, entriesSorted2)) {
      result = `${result}    ${key}: ${value}\n`;
    } else if (isSimilarItem(item, entriesSorted2)) {
      const index = entriesSorted2.flat().indexOf(key) + 1;
      result = `${result}  - ${key}: ${value}\n`;
      result = `${result}  + ${key}: ${entriesSorted2.flat()[index]}\n`;
    } else {
      result = `${result}  - ${key}: ${value}\n`;
    }
  }
  /* eslint-disable-next-line */
  for (const item of entriesSorted2) {
    const [key, value] = item;
    if (!result.includes(` ${key}:`)) {
      result = `${result}  + ${key}: ${value}\n}`;
    }
  }
  return result;
};

export default buildDiff;
