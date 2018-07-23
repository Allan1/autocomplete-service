'use strict';

const escapeStringRegexp = require('escape-string-regexp');

module.exports = function(Event) {
  Event.autocomplete = function(query, cb) {
    query = query ? query : ' ';
    if (query.length < 2) {
      cb(null, []);
    } else {
      var regexpStr = (new RegExp(escapeStringRegexp(query) + '.*', 'i'))
        .toString();

      var filter = {
        where: {
          name: {regexp: regexpStr},
        },
        limit: 6,
      };
      Event.find(filter, cb);
    }
  };

  Event.remoteMethod(
    'autocomplete',
    {
      description: 'Events autocomplete',
      accepts: [
        {arg: 'query', type: 'string', description: 'String query'},
      ],
      returns: {
        arg: 'data', type: 'object', root: true,
      },
      http: {path: '/autocomplete', verb: 'get'},
    }
  );
};
