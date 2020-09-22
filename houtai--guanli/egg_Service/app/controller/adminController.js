'use strict';

const Controller = require('egg').Controller;

class AdminGetProduct extends Controller {
  //查询商品
  async adminGetProduct() {
    const { ctx } = this;
    ctx.body = await this.ctx.service.adminService.adminGetProduct(ctx.request.query);
  }
  //上传商品
  async uploadProduct() {
    let proimg = this.ctx.request.body.proimg;
    let brand = this.ctx.request.body.brand;
    let fragrance = this.ctx.request.body.fragrance;
    let top = this.ctx.request.body.top;
    let middle = this.ctx.request.body.middle;
    let back = this.ctx.request.body.back;
    let attr = this.ctx.request.body.attr;
    let perfumer = this.ctx.request.body.perfumer;
    let label = this.ctx.request.body.label;
    let score = this.ctx.request.body.score;
    let result = await this.ctx.service.adminService.uploadProduct(proimg, brand, fragrance, top, middle, back, attr, perfumer, label, score);
    console.log(result);
    this.ctx.response.body = result;
  }
  // 删除商品
  async delpro() {
    let id = this.ctx.request.query.id;
    let result = await this.ctx.service.adminService.delpro(id);
    this.ctx.response.body = result;
  }

  // 修改商品
  async updataPro() {
    let id = this.ctx.request.query.id;
    let brand = this.ctx.request.query.brand;
    let fragrance = this.ctx.request.query.fragrance;
    let top = this.ctx.request.query.top;
    let middle = this.ctx.request.query.middle;
    let back = this.ctx.request.query.back;
    let attr = this.ctx.request.query.attr;
    let perfumer = this.ctx.request.query.perfumer;
    let label = this.ctx.request.query.label;
    let score = this.ctx.request.query.score;
    console.log(id, brand)
    let result = await this.ctx.service.adminService.updataPro(id, brand, fragrance, top, middle, back, attr, perfumer, label, score);
    console.log(result);
    this.ctx.response.body = result;
  }

  //查询话题
  async Gettopic() {
    const { ctx } = this;
    ctx.body = await this.ctx.service.adminService.Gettopic(ctx.request.query);
  }

  async deltopic() {
    let id = this.ctx.request.query.id;
    let result = await this.ctx.service.adminService.deltopic(id);
    this.ctx.response.body = result;
  }

  async uploadTopic() {
    let topicimg = this.ctx.request.body.topicimg;
    let topicname = this.ctx.request.body.topicname;
    let introduction = this.ctx.request.body.introduction;
    let result = await this.ctx.service.adminService.uploadTopic(topicimg, topicname, introduction);
    console.log(result);
    this.ctx.response.body = result;
  }

  //查询评论
  async Getcomment() {
    const { ctx } = this;
    ctx.body = await this.ctx.service.adminService.Getcomment(ctx.request.query);
  }
  //管理员删除用户评论
  async delcomment() {
    let id = this.ctx.request.query.id;
    let result = await this.ctx.service.adminService.delcomment(id);
    this.ctx.response.body = result;
  }

  //查询所有用户
  async Getuser() {
    const { ctx } = this;
    ctx.body = await this.ctx.service.adminService.Getuser(ctx.request.query);
  }
  //管理员删除用户
  async deluser() {
    let id = this.ctx.request.query.id;
    let result = await this.ctx.service.adminService.deluser(id);
    this.ctx.response.body = result;
  }


  //try表
  //查询
  async adminGettry() {
    const { ctx } = this;
    ctx.body = await this.ctx.service.adminService.adminGettry(ctx.request.query);
  }
  //上传
  async uploadTry() {
    let img = this.ctx.request.body.img;
    let title = this.ctx.request.body.title;
    let price = this.ctx.request.body.price;
    let msg = this.ctx.request.body.msg;
    let class1 = this.ctx.request.body.class1;
    let pinfen = this.ctx.request.body.pinfen;
    let result = await this.ctx.service.adminService.uploadTry(img, title, price, msg, class1, pinfen);
    console.log(result);
    this.ctx.response.body = result;
  }
  // 删除
  async delTry() {
    let id = this.ctx.request.query.id;
    let result = await this.ctx.service.adminService.delTry(id);
    this.ctx.response.body = result;
  }

  // 修改
  async updataTry() {
    let id = this.ctx.request.query.id;
    let title = this.ctx.request.query.title;
    let price = this.ctx.request.query.price;
    let msg = this.ctx.request.query.msg;
    let class1 = this.ctx.request.query.class1;
    let pinfen = this.ctx.request.query.pinfen;
    let result = await this.ctx.service.adminService.updataTry(id, title, price, msg, class1, pinfen);
    console.log(result);
    this.ctx.response.body = result;
  }
}

module.exports = AdminGetProduct;
