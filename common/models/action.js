'use strict';

var isEmpty = require('lodash.isempty');

module.exports = function(Action) {
  Action.beforeRemote('create', function(ctx, instance, next) {
    if (ctx.args && ctx.args.data && !isEmpty(ctx.args.data.event)) {
      Action.app.models.Event.findOrCreate(
        {name: ctx.args.data.event},
        {name: ctx.args.data.event},
        function(err, instance) {
          if (err) {
            next(err);
          } else {
            ctx.args.data.eventId = instance.id;
            next();
          }
        }
      );
    } else {
      next();
    }
  });
};
