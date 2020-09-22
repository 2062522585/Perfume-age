const Controller = require('egg').Controller;

class managerController extends Controller {
	async login() {
		console.log("login.....");
		let username = this.ctx.request.body.username;
		let pwd = this.ctx.request.body.pwd;
		let list = await this.ctx.service.managerService.login(username, pwd);
		this.ctx.response.body = list;
	}
}

module.exports = managerController;