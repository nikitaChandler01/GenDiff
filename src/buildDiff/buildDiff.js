import _ from 'lodash';
import formaterOfDif from './stylish.js';

const buildDiff = (jsonFile1, jsonFile2) => {
  const jsObj1 = jsonFile1;
  const jsObj2 = jsonFile2;
  let result = '';

  const findDiff = (obj1, obj2, counter) => {
    const keysOfObj1 = Object.keys(obj1);
    const keysOfObjSorted1 = keysOfObj1.sort();
    const keysOfObj2 = Object.keys(obj2);
    const keysOfObjSorted2 = keysOfObj2.sort();
    const allKeysSorted = _.union(keysOfObjSorted1, keysOfObjSorted2).sort();
    /* eslint-disable-next-line */
    for (const key of allKeysSorted) {
      // Проверяем наличие ключа в двух объектах
      if (keysOfObj1.includes(key) && keysOfObj2.includes(key)) {
        // Проверяем, объект ли лежит под двумя ключами в двух объектах или нет
        if (typeof obj1[key] === 'object' && typeof obj2[key] === 'object') {
          // Если объект, то проверяем на равенство
          if (JSON.stringify(obj1[key]) === JSON.stringify(obj2[key])) {
            result = `${result}${formaterOfDif(key, obj1[key], ' ', counter)}`;
          } else {
            // Если не равны, то "ныряем" внутрь объектов и сравниваем
            result = `{${key}: ${findDiff(obj1[key], obj2[key], counter + 1)}`;
          }
          // Если хотя бы один не объект, то добавляем как есть
          // Оба значения существуют под ключом [key] поскольку мы еще в условии 18 строчки
        } else {
          result = `${result}${formaterOfDif(key, obj1[key], '-', counter)}`;
          result = `${result}${formaterOfDif(key, obj2[key], '+', counter)}`;
        }
      }
      // Если хначение есть только в obj1, то добавляем его
      if (!keysOfObj2.includes(key)) {
        result = `${result}${formaterOfDif(key, obj1[key], '-', counter)}`;
      }
      // Если хначение есть только в obj2, то добавляем его
      if (!keysOfObj1.includes(key)) {
        result = `${result}${formaterOfDif(key, obj2[key], '+', counter)}`;
      }
    }
    return result;
  };

  findDiff(jsObj1, jsObj2, 1, '{\n');
  console.log(result);
};

export default buildDiff;
