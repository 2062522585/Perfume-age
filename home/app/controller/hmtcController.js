'use strict';

const Controller = require('egg').Controller;

class HmtcController extends Controller {
  //获取首页第二部分专题图片
  async getTc() {
    const { ctx } = this;

	ctx.body=await this.ctx.service.hmtcService.getTc(ctx.request.query);

  }

  
}

module.exports = HmtcController;
