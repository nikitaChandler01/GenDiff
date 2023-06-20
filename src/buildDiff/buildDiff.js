import _ from 'lodash';
import formaterOfDif from './stylish.js';
import compareFunc from './compareFunc.js';

const buildDiff = (jsonFile1, jsonFile2) => {
  const jsObj1 = jsonFile1;
  const jsObj2 = jsonFile2;
  let result = '{\n';

  const findDiff = (obj1, obj2, counter, acc) => {
    const keys1 = Object.keys(obj1).sort(compareFunc);
    const keys2 = Object.keys(obj2).sort(compareFunc);
    const allKeys = _.union(keys1, keys2).sort();
    allKeys.forEach((item) => {
      if (keys1.includes(item) && keys2.includes(item)) {
        if (typeof obj1[item] === 'object' && typeof obj2[item] === 'object') {
          acc += findDiff(obj1[item], obj2[item], counter + 2, `${formaterOfDif(' ', counter)} ${item}: {\n`);
          acc += `${formaterOfDif('}', counter + 1)}\n`;
        } else if (typeof obj2[item] !== 'object' && typeof obj1[item] === 'object' && obj1[item] !== null) {
          acc += findDiff(obj1[item], obj1[item], counter + 2, `${formaterOfDif('-', counter)} ${item}: {\n`);
          acc += `${formaterOfDif('}', counter + 1)}\n`;
          acc += `${formaterOfDif('+', counter)} ${item}: ${obj2[item]}\n`;
        } else if (typeof obj1[item] !== 'object' && typeof obj2[item] === 'object' && obj2[item] !== null) {
          acc += findDiff(obj2[item], obj2[item], counter + 2, `${formaterOfDif('+', counter)} ${item}: {\n`);
          acc += `${formaterOfDif('}', counter + 1)}\n`;
          acc += `${formaterOfDif('-', counter)} ${item}: ${obj1[item]}\n`;
        } else if (obj1[item] === obj2[item]) {
          acc += `${formaterOfDif(' ', counter)} ${item}: ${obj1[item]}\n`;
        } else if (obj1[item] !== obj2[item]) {
          acc += `${formaterOfDif('-', counter)} ${item}: ${obj1[item]}\n`;
          acc += `${formaterOfDif('+', counter)} ${item}: ${obj2[item]}\n`;
        }
      } else if (!keys2.includes(item)) {
        if (typeof obj1[item] !== 'object') {
          acc += `${formaterOfDif('-', counter)} ${item}: ${obj1[item]}\n`;
        } else {
          acc += findDiff(obj1[item], obj1[item], counter + 2, `${formaterOfDif('-', counter)} ${item}: {\n`);
          acc += `${formaterOfDif('}', counter + 1)}\n`;
        }
      } else if (!keys1.includes(item)) {
        if (typeof obj2[item] !== 'object') {
          acc += `${formaterOfDif('+', counter)} ${item}: ${obj2[item]}\n`;
        } else {
          acc += findDiff(obj2[item], obj2[item], counter + 2, `${formaterOfDif('+', counter)} ${item}: {\n`);
          acc += `${formaterOfDif('}', counter + 1)}\n`;
        }
      }
      // if (isSameKey(key, entriesSorted2)) {
      //   const valueOfentriesSorted2 = getValueByKey(key, entriesSorted2);
      //   if (typeof value === 'object' && typeof valueOfentriesSorted2 === 'object') {
      //     findDiff(value, valueOfentriesSorted2, counter + 1, result);
      //   }
      //   if ()
      //   result = `${result}${formaterOfDif('+', counter)}${key}:${value}\n`;
      //   result = `${result}${formaterOfDif('-', counter)}${key}:${valueOfentriesSorted2}\n`;
      // }
      // result = `${result}${formaterOfDif('+', counter)}${key}:${value}\n`;
    });
    return acc;
  };
  result = `${findDiff(jsObj1, jsObj2, 1, result)}}`;
  console.log(result);
  return result;
};

export default buildDiff;
