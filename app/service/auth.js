/**
 * 用户登录先关的Service
 * function  login
 * @params {Name} --用户姓名
 * @params {Password} --用户密码
 **/

module.exports = app => {
  class AuthService extends app.Service {
    async index() {
      this.ctx.body = await this.ctx.model.Auth.find({name: 'zhuyy'});
    }

    async signIn(authInfo) {
      const pwd = this.ctx.helper.SHA256(authInfo.pwd + this.app.keys);
      const auth = await this.ctx.model.Auth.findOne({
        name: authInfo.name,
        pwd: pwd
      });
      return auth;
    }
  }
  return AuthService;
}



