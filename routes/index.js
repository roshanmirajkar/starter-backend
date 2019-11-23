// const passport = require('passport');
const authRouter = require('./auth');
const monitorRouter = require('./monitor');

module.exports = function(app) {
  app.use('/api/v1/auth', authRouter);
  app.use('/api/v1/monitor', monitorRouter);
  // TODO -- use this middleware for authentication
  // passport.authenticate('jwt', { session: false })
};
