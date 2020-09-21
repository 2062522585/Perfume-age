const Service = require('egg').Service;
class showService extends Service{
	async datashow(class1){
		let sql = "select * from Try where class1=?";
		
		let List = await this.ctx.app.mysql.query(sql,[class1]);

		return List;
	}
	async showgoods(userid){
		let sql = "select * from userdata where userid=?";
		let List = await this.ctx.app.mysql.query(sql,[userid]);

		return List;
	}
	async getshop(id){
		let sql = "select * from Try where id=?";	
		let List = await this.ctx.app.mysql.query(sql,[id]);
	
		return List;
	}
	
	async addgoods(price,img,title,num,chicun,userid){
	    let sql = "insert into userdata (price,img,title,num,chicun,userid) values (?,?,?,?,?,?)"
	   let r = await this.ctx.app.mysql.query(sql, [price,img,title,num,chicun,userid])
       return r.affectedRows
  
	}
	async clearall(){
		let sql = "delete from userdata";
		let r = await this.ctx.app.mysql.query(sql, []);
		
		return r.affectedRows;
  
	}
	
}
module.exports = showService;