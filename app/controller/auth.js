/**
 * 用户登录注册相关的Controller
 * function  signIn
 * @params {Name} --用户姓名
 * @params {Password} --用户密码
 **/

module.exports = app => {
  class AuthController extends app.Controller {
    async index() {
      const response = await this.ctx.model.Auth.find({name: 'zhuyy'});
      this.ctx.success(response);
    }
    async signIn() {
      const user = await this.ctx.service.auth.signIn(this.ctx.request.body);
      if(user) {
        const token = app.jwt.sign({ uid: user.uid }, app.config.jwt.secret); //生成token
        const jwtInfo = {
          uid: user.uid,
          name: user.name,
          token
        };
        this.ctx.success(Object.assign( {}, jwtInfo));
        app.redis.get('local').set(token, JSON.stringify(jwtInfo), 'EX', 3600000, () => {});
      } else {
        this.ctx.fail(1);
      }
    }

  }
  return AuthController;
}