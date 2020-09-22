const Service = require('egg').Service;

class managerService extends Service {

	async login(username, pwd) {
		let sql = "select username from manager where username=? and pwd=?";
		let list = await this.ctx.app.mysql.query(sql, [username, pwd]);
		return list;
	}

}

module.exports = managerService;
