const mapValuesDeep = require('./fp');

module.exports = (obj, cb) => mapValuesDeep(cb)(obj);
