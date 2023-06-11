import compareFunc from './compareFunc.js';
import isSameItem from './isSameItem.js';
import isSimilarItem from './isSimilarItem.js';

const buildDiff = (filepath1, filepath2) => {
  let result = '{\n';
  const jsonFile1 = filepath1; // СОЗДАЕМ JS-ОБЪЕКТ ИЗ JSON ФАЙЛА
  const jsonFile2 = filepath2; // СОЗДАЕМ JS-ОБЪЕКТ ИЗ JSON ФАЙЛА
  const entries1 = Object.entries(jsonFile1); // РАЗБИВАЕМ ОБЪЕКТ НА МАССИВЫ [КЛЮЧ, ЗНАЧЕНИЕ]
  const entriesSorted1 = entries1.sort(compareFunc);
  const entries2 = Object.entries(jsonFile2); // РАЗБИВАЕМ ОБЪЕКТ НА МАССИВЫ [КЛЮЧ, ЗНАЧЕНИЕ]
  const entriesSorted2 = entries2.sort(compareFunc);
  /* eslint-disable-next-line */
  for (const item of entriesSorted1) {
    const [key, value] = item;
    if (isSameItem(item, entriesSorted2)) {
      result = `${result}    ${key}: ${value}\n`;
    } else if (isSimilarItem(item, entriesSorted2)) {
      const index = entriesSorted2.flat().indexOf(key) + 1;
      // РАССКРЫВАЕМ ВЛОЖНОСТЬ ЧТОБЫ НАЙТИ ИНДЕКС ЗНАЧЕНИЯ ТОГО ЖЕ КЛЮЧА
      result = `${result}  - ${key}: ${value}\n`;
      result = `${result}  + ${key}: ${entriesSorted2.flat()[index]}\n`; // ДОБАВЛЯЕМ ТОТ ЖЕ КЛЮЧ С ДРУГИМ ЗНАЧЕНИЕМ
    } else {
      result = `${result}  - ${key}: ${value}\n`;
    }
  }
  // К ЭТОМУ МОМЕМЕНТУ ВСЕ ПОВТОРЯЮЩИЕСЯ КЛЮЧИ ДОБАВЛЕНЫ В RESULT
  // ПОЭТОМУ БУДЕМ ДЕЛАТЬ ПРОВЕРКУ НА СУЩЕСТВОВАНИЕ
  /* eslint-disable-next-line */
  for (const item of entriesSorted2) {
    const [key, value] = item;
    if (!result.includes(` ${key}:`)) { // Возможно строковое значение будет содержать в себе
      // подстроку в виде ключа, поэтому для убедительности делаем проверку на оформление ключа
      result = `${result}  + ${key}: ${value}\n}`;
    }
  }
  return result;
  // Пожалуйста не бейте за такой код :)
};

export default buildDiff;
