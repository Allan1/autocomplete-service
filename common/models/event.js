'use strict';

const escapeStringRegexp = require('escape-string-regexp');

module.exports = function(Event) {
  Event.defaultPaginationLimit = 10;

  Event.autocomplete = function(query, filter, cb) {
    query = query ? query : '';
    filter = filter ? filter : {};
    if (query.length < 2) {
      cb(null, []);
    } else {
      var regexpStr = (new RegExp(escapeStringRegexp(query) + '.*', 'i'))
        .toString();

      filter.where = {name: {regexp: regexpStr}};
      filter.limit = filter.limit ? filter.limit : Event.defaultPaginationLimit;
      filter.order = 'name ASC';
      console.log('filter', filter);
      Event.find(filter, cb);
    }
  };

  Event.remoteMethod(
    'autocomplete',
    {
      description: 'Events autocomplete',
      accepts: [
        {arg: 'query', type: 'string', description: 'String query'},
        {arg: 'filter', type: 'object', description: 'Filter defining fields, where, include, offset, and limit'},
      ],
      returns: {
        arg: 'data', type: ['Event'], root: true,
      },
      http: {path: '/autocomplete', verb: 'get'},
    }
  );
};
