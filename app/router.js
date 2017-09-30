'use strict'

module.exports = app => {
  app.resources('auth', '/api/auth', 'auth');
  app.post('/api/auth/signIn', 'auth.signIn');
}