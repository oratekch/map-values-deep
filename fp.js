const { isPlainObject, mapKeys, mapValues } = require('lodash/fp');

const mapValuesDeep = cb => obj =>
  Array.isArray(obj)
    ? obj.map(mapValuesDeep(cb))
    : isPlainObject(obj)
      ? mapValues(mapValuesDeep(cb))(mapValues(cb)(obj))
      : obj;

module.exports = mapValuesDeep;
