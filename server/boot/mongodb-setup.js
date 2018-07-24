'use strict';

module.exports = function(app, cb) {
  app.dataSources.mongoDB.autoupdate(null, cb);
};
