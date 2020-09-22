const Service = require('egg').Service
class loginService extends Service {
  //用户登录验证
  async userLogin(name, pwd) {
    let sql = 'select *  from manager where name = ? and pwd = ?';
    let result = await this.app.mysql.query(sql, [name, pwd])
    return result;
  }
  //验证用户名
  async checkUser(username) {
    let sql = 'select * from manager where name= ?';
    let result = await this.app.mysql.query(sql, [username]);
    return result;
  }

  //验证手机号是否存在
  async checkPhone(phone) {
    let sql = 'select * from manager where tel = ?';
    let result = await this.app.mysql.query(sql, [phone]);
    return result;
  }
  //注册用户信息
  async userRegist(username, pwd, phone) {
    let sql = 'insert into manager(name,pwd,tel) values(?,?,?)';
    let result = await this.app.mysql.query(sql, [username, pwd, phone]);
    return result;
  }

}
module.exports = loginService
