'use strict';

const Controller = require('egg').Controller;

class HmcomController extends Controller {
  //获取香评头像，名称
  async getCom() {
    const { ctx } = this;

	ctx.body=await this.ctx.service.hmcomService.getCom(ctx.request.query);

  }

  
}

module.exports = HmcomController;
