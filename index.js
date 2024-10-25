const cors = require('cors');

module.exports = (options) => {
  const whiteList = options.origin;
  const opt = options;
  if (Array.isArray(options.origin)) {
    opt.origin = (origin, callback) => {
      if (whiteList.indexOf(origin) !== -1 || !origin) {
        callback(null, true);
      } else {
        callback(new Error(`Not allowed by CORS --- ${origin}`));
      }
    };
  }
  return cors(opt);
};
