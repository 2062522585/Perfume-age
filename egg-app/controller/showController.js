const Controller = require('egg').Controller; 

class showController extends Controller {
	async datashow() {
		let class1= this.ctx.request.body.class1;
		let list = await this.ctx.service.showService.datashow(class1);
		this.ctx.response.body = list;
	}
	async getshop() {
		let id= this.ctx.request.query.id;
		let list = await this.ctx.service.showService.getshop(id);
		this.ctx.response.body = list;
	}


}

module.exports =showController;