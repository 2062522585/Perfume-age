const Controller = require('egg').Controller;
class navController extends Controller {

    async search() {
        let inf = this.ctx.request.body.inf;
        let result = await this.ctx.service.navService.search(inf);
        this.ctx.response.body = result;
    }
	
	async topic() {
		let a1 = this.ctx.request.body.a1;
		let a2 = this.ctx.request.body.a2;
		let a3 = this.ctx.request.body.a3;
		let a4 = this.ctx.request.body.a4;
		let a5 = this.ctx.request.body.a5;
	    let result = await this.ctx.service.navService.topic(a1,a2,a3,a4,a5);
	    this.ctx.response.body = result;
	}

}
module.exports = navController;