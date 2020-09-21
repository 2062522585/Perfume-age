const Service = require('egg').Service;
class showService extends Service{
	async datashow(class1){
		let sql = "select * from Try where class1=?";
		
		let List = await this.ctx.app.mysql.query(sql,[class1]);
		console.log(List)
		return List;
	}
	async showgoods(){
		let sql = "select * from userdata";
		let List = await this.ctx.app.mysql.query(sql);
		console.log(List)
		return List;
	}
	async getshop(id){
		let sql = "select * from Try where id=?";	
		let List = await this.ctx.app.mysql.query(sql,[id]);
		console.log(List)
		return List;
	}
	
	async addgoods(price,img,title,num,chicun){
	    let sql = "insert into userdata (price,img,title,num,chicun) values (?,?,?,?,?)"
	   let r = await this.ctx.app.mysql.query(sql, [price,img,title,num,chicun])
       return r.affectedRows
  
	}
	async clearall(){
		let sql = "delete from userdata";
		let r = await this.ctx.app.mysql.query(sql, []);
		
		return r.affectedRows;
  
	}
	
}
module.exports = showService;