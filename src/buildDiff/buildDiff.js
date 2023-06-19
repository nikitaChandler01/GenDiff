import _ from 'lodash';
import formaterOfDif from './stylish.js';
import compareFunc from './compareFunc.js';
import isSameKey from './isSameKey.js';
import isSameValue from './isSameValue.js';

const buildDiff = (jsonFile1, jsonFile2) => {
  const jsObj1 = jsonFile1;
  const jsObj2 = jsonFile2;
  let result = '';

  const findDiff = (obj1, obj2, counter, acc) => {
    result = `${result}${acc}`;
    const entriesSorted1 = Object.entries(obj1).sort(compareFunc);
    const entriesSorted2 = Object.entries(obj2).sort(compareFunc);
    entriesSorted1.forEach((item) => {
      const [key, value] = item;
      if (isSameKey(key, entriesSorted2)) {
        const sameItem = item;
        if (isSameValue(value, sameItem)) {
          result = `${result}${formaterOfDif(key, value, ' ', counter)}`;
        } else {
          findDiff()
        }
      }
      result = `${result}${formaterOfDif(key, value, '+', counter)}`;
    });
  };
  findDiff(jsObj1, jsObj2, 1, result);
  console.log(result);
};

export default buildDiff;
