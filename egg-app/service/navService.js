const Service = require('egg').Service;
class navService extends Service {
	async search(inf) {
		let sql1 = `select id from productinfo where brand like "%${inf}%" `
		let sql2 = `select id from productinfo where fragrance like "%${inf}%" `
		let sql3 = `select id from productinfo where top like "%${inf}%" `
		let sql4 = `select id from productinfo where middle like "%${inf}%" `
		let sql5 = `select id from productinfo where back like "%${inf}%" `
		let sql6 = `select id from productinfo where attr like "%${inf}%" `
		let sql7 = `select id from productinfo where perfumer like "%${inf}%" `
		let sql8 = `select id from productinfo where score like "%${inf}%" `
		let list1 = await this.ctx.app.mysql.query(sql1);
		let list2 = await this.ctx.app.mysql.query(sql2);
		let list3 = await this.ctx.app.mysql.query(sql3);
		let list4 = await this.ctx.app.mysql.query(sql4);
		let list5 = await this.ctx.app.mysql.query(sql5);
		let list6 = await this.ctx.app.mysql.query(sql6);
		let list7 = await this.ctx.app.mysql.query(sql7);
		let list8 = await this.ctx.app.mysql.query(sql8);
		console.log(list1,list2,list3,list4,list5,list6,list7,list8)
		
		let list = Array.from(new Set(list1.concat(list2,list3,list4,list5,list6,list7,list8)));
		let arr =[];
		for(let i = 0;i<list.length;i++){
			arr.push(list[i].id);
		}
		list =arr;
		list = Array.from(new Set(list))
		return list;
	}
	async topic(a1,a2,a3,a4,a5) {
		let sql1 = `select * from topic where id=? `;
		let sql2 = `select * from topic where id=? `;
		let sql3 = `select * from topic where id=? `;
		let sql4 = `select * from topic where id=? `;
		let sql5 = `select * from topic where id=? `;
		let list1 = await this.ctx.app.mysql.query(sql1,[a1]);
		let list2 = await this.ctx.app.mysql.query(sql2,[a2]);
		let list3 = await this.ctx.app.mysql.query(sql3,[a3]);
		let list4 = await this.ctx.app.mysql.query(sql4,[a4]);
		let list5 = await this.ctx.app.mysql.query(sql5,[a5]);
		let list = list1.concat(list2,list3,list4,list5)
		return list;
	}
}
module.exports = navService;
