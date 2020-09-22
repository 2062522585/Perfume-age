const Controller = require('egg').Controller; 

class showController extends Controller {
	async datashow() {
		let class1= this.ctx.request.body.class1;
		let list = await this.ctx.service.showService.datashow(class1);
		this.ctx.response.body = list;
	}
	async showgoods() {
		let userid=this.ctx.request.body.userid;
		let list = await this.ctx.service.showService.showgoods(userid);
		this.ctx.response.body = list;
	}
	async getshop() {
		let id= this.ctx.request.query.id;
		let list = await this.ctx.service.showService.getshop(id);
		this.ctx.response.body = list;
	}
	async addgoods() {
		let price= this.ctx.request.body.price;
		let img= this.ctx.request.body.img;
		let title= this.ctx.request.body.title;
		let num= this.ctx.request.body.num;
		let chicun= this.ctx.request.body.yixuan;
	    let userid=this.ctx.request.body.userid;
		let list = await this.ctx.service.showService.addgoods(price,img,title,num,chicun,userid);
		this.ctx.response.body = list;
	}
	async clearall() {
		let list = await this.ctx.service.showService.clearall();
		this.ctx.response.body = list;
	}

	async getdata() {
		let id= this.ctx.request.body.id;
		let list = await this.ctx.service.showService.getdata(id);
		this.ctx.response.body = list;
	}



}

module.exports =showController;