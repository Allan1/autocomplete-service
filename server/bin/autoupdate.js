'use strict';

var app = require('../server');
var mongoModels = null;

app.dataSources.mongoDB.isActual(mongoModels, function(err, actual) {
  console.log('actual', actual);
  if (!actual) {
    app.dataSource.autoupdate(mongoModels, function(err, result) {
      if (err) { throw err; } else {
        console.log(mongoModels);
        console.log('autoupdated');
        process.exit(0);
      }
    });
  } else {
    process.exit(0);
  }
});
