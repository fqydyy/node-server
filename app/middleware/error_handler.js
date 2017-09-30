module.exports = (options, app) => {
  return async function errorHandler(ctx, next) {
    try {
      ctx.set('Access-Control-Allow-Credentials', true);
      ctx.set('Access-Control-Allow-Headers', ':x-csrf-token');
      ctx.set('Access-Control-Allow-Methods', 'GET,HEAD,PUT,POST,DELETE,PATCH');
      ctx.set('Access-Control-Allow-Origin', 'http://localhost:8080');
      await next();
    } catch (err) {
      app.emit('error', err, this);
      ctx.fail(1);
    }
  }
}
