const Service = require('egg').Service;

class HmpefService extends Service {
	//获取首页香水图片和名称
	async getPef() {

		let sql = `select id,img,title,class1 from try where class1='单品分装' order by rand() limit 9`;
		let result = await this.ctx.app.mysql.query(sql,[]);

		return result;
	}

	//获取左边排行榜图片，名称
	async getLeaderleft() {

		let sql = `select * from try where class1='单品分装' order by pinfen desc limit 0,5`;
		let result = await this.ctx.app.mysql.query(sql,[]);

		return result;
	}

	//获取右边排行榜图片，名称
	async getLeaderright() {

		let sql = `select * from try where class1='单品分装' order by pinfen desc limit 5,5`;
		let result = await this.ctx.app.mysql.query(sql,[]);

		return result;
	}

}

module.exports = HmpefService;
