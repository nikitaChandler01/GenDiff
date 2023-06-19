import _ from 'lodash';
import formaterOfDif from './stylish.js';
import compareFunc from './compareFunc.js';
import isSameKey from './isSameKey.js';
import isSameValue from './isSameValue.js';
import getValueByKey from './getValue.js';

const buildDiff = (jsonFile1, jsonFile2) => {
  const jsObj1 = jsonFile1;
  const jsObj2 = jsonFile2;
  let result = '';

  const findDiff = (obj1, obj2, counter, acc) => {
    result = `${result}${acc}\n`;
    const entriesSorted1 = Object.entries(obj1).sort(compareFunc);
    const entriesSorted2 = Object.entries(obj2).sort(compareFunc);
    entriesSorted1.forEach((item) => {
      console.log(result);
      const [key, value] = item;
      if (isSameKey(key, entriesSorted2)) {
        const valueOfentriesSorted2 = getValueByKey(key, entriesSorted2);
        if (typeof value === 'object' && typeof valueOfentriesSorted2 === 'object') {
          findDiff(value, valueOfentriesSorted2, counter + 1, result);
        }
        result = `${result}${formaterOfDif('+', counter)}${key}:${value}\n`;
        result = `${result}${formaterOfDif('-', counter)}${key}:${valueOfentriesSorted2}\n`;
      }
      result = `${result}${formaterOfDif('+', counter)}${key}:${value}\n`;
    });
  };
  findDiff(jsObj1, jsObj2, 1, result);
  console.log(result);
};

export default buildDiff;
