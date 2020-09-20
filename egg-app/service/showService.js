const Service = require('egg').Service;
class showService extends Service{
	async datashow(class1){
		let sql = "select * from Try where class1=?";
		
		let List = await this.ctx.app.mysql.query(sql,[class1]);
		console.log(List)
		return List;
	}
	async getshop(id){
		let sql = "select * from Try where id=?";	
		let List = await this.ctx.app.mysql.query(sql,[id]);
		console.log(List)
		return List;
	}
	
}
module.exports = showService;