'use strict';

module.exports = app => {
  let config = {};
  config.keys = "egg_test";
  config.mongoose = {
    url: 'mongodb://127.0.0.1/eggTest',
    options: {}
  };

  config.security = {
    domainWhiteList: [ 'http://localhost:8080' ],
    csrf: {
      enable: false,
      // headerName: 'x-csrf-token'
    }
  };

  config.cors = {
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH',
    credentials: true
  };

  config.jwt = {
    secret: 'egg_test',
    enable: true,
    cookie: 'Authorization',
    match(ctx) {
      let needAuth = true;
      needAuth = needAuth && ctx.request.method !== 'OPTIONS';
      needAuth = needAuth && !['api/auth/login'].includes(ctx.request.url);
      needAuth = needAuth && !/[public|page]\/.*/ig.test(ctx.request.url);
      return needAuth;
    }
  };

  config.redis = {
    clients: {
      local: {
        port: 6379,
        host: '127.0.0.1',
        password: '',
        db: 0
      }
    }
  };

  config.pretty = {
    i18n:false,
    messages: {
      0: "成功",
      1: "失败"
    }
  };


  return config;
}