const _ = require('lodash');

const mapValuesDeep = function(object, callback, propertyPath){
  propertyPath = propertyPath || '';
  if(_.isArray(object)){
      return _.map(object, deepMapValuesIteratee);
  }
  else if(_.isObject(object) && !_.isDate(object) && !_.isRegExp(object) && !_.isFunction(object)){
      return _.extend({}, object, _.mapValues(object, deepMapValuesIteratee));
  }
  else{
      return callback(object, propertyPath);
  }

  function deepMapValuesIteratee(value, key){
      var valuePath = propertyPath ? propertyPath + '.' + key: key;
      return mapValuesDeep(value, callback, valuePath);
  }
}

module.exports = mapValuesDeep;
