import _ from 'lodash';

const buildDiff = (jsonFile1, jsonFile2) => {
  const keys1 = Object.keys(jsonFile1);
  const keys2 = Object.keys(jsonFile2);
  const allKeysSorted = _.union(keys1, keys2).sort();
  const result = allKeysSorted.map((key) => {
    if (!_.has(jsonFile1, key)) {
      return {
        name: key,
        value: jsonFile2[key],
        type: '+',
      };
    }
    if (!_.has(jsonFile2, key)) {
      return {
        name: key,
        value: jsonFile1[key],
        type: '-',
      };
    }
    if (typeof jsonFile1[key] === 'object' && typeof jsonFile2[key] === 'object') {
      return {
        name: key,
        type: 'children',
        children: buildDiff(jsonFile1[key], jsonFile2[key]),
      };
    }
    if (JSON.stringify(jsonFile1[key]) !== JSON.stringify(jsonFile2[key])) {
      return {
        name: key,
        value1: jsonFile1[key],
        value2: jsonFile2[key],
        type: 'changed',
      };
    }
    return {
      name: key,
      value: jsonFile1[key],
      type: 'unchanged',
    };
  });
  return result;
};

export default buildDiff;
