const Service = require('egg').Service;

class HmcomService extends Service {
	//获取香评头像，名称
	async getCom() {

		let sql = `select id,name,avatar from comment order by rand() limit 6`;
		let result = await this.ctx.app.mysql.query(sql,[]);

		return result;
	}

}

module.exports = HmcomService;
