import _ from 'lodash';

const getValueByKey = (key, array) => {
  let valueOfarray;
  array.forEach((item) => {
    if (item.includes(key)) valueOfarray = _.cloneDeep(item[1]);
    return valueOfarray;
  });
};

export default getValueByKey;
