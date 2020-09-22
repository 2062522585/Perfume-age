'use strict';

const Controller = require('egg').Controller;

class HmpefController extends Controller {
  //获取首页香水图片和名称
  async getPef() {
    const { ctx } = this;

	ctx.body=await this.ctx.service.hmpefService.getPef(ctx.request.query);

  }

  //获取左边排行榜图片，名称
  async getLeaderleft() {
    const { ctx } = this;

	ctx.body=await this.ctx.service.hmpefService.getLeaderleft(ctx.request.query);

  }

  //获取右边排行榜图片，名称
  async getLeaderright() {
    const { ctx } = this;

	ctx.body=await this.ctx.service.hmpefService.getLeaderright(ctx.request.query);

  }
  
}

module.exports = HmpefController;
