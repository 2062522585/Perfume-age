const Service = require('egg').Service;

class HmtcService extends Service {
	//获取首页第二部分专题图片
	async getTc() {

		let sql = `select * from topic limit 6`;
		let result = await this.ctx.app.mysql.query(sql,[]);

		return result;
	}

}

module.exports = HmtcService;
