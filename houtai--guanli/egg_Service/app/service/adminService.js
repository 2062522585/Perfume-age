const Service = require('egg').Service;
const path = require("path");
const fs = require("fs");

class AdminService extends Service {
    //查询商品
    async adminGetProduct() {
        let sql = `select * from productinfo`;
        let result = await this.ctx.app.mysql.query(sql, []);
        return result;
    }

    async uploadProduct(proimg, brand, fragrance, top, middle, back, attr, perfumer, label, score) {
        let sql = 'insert into productinfo( proimg,brand, fragrance, top, middle, back, attr, perfumer, label, score) values(?,?,?,?,?,?,?,?,?,?)'
        let list = await this.ctx.app.mysql.query(sql, [proimg, brand, fragrance, top, middle, back, attr, perfumer, label, score]);
        console.log(list);
        return list;
    }

    //删除选中商品
    async delpro(id) {
        console.log(id)
        let sql = 'delete from productinfo where id=?';
        let list = await this.ctx.app.mysql.query(sql, [id]);
        return list;
    }

    // 修改选择商品
    async updataPro(id, brand, fragrance, top, middle, back, attr, perfumer, label, score) {
        let sql = 'update productinfo set brand=?,fragrance=?,top=?,middle=?,back=?,attr=?,perfumer=?,label=?,score=? where id=?';
        let list = await this.ctx.app.mysql.query(sql, [brand, fragrance, top, middle, back, attr, perfumer, label, score, id]);
        console.log(list);
        return list;
    }

    //查询话题
    async Gettopic() {
        let sql = `select * from topic`;
        let result = await this.ctx.app.mysql.query(sql, []);
        return result;
    }

    //删除话题
    async deltopic(id) {
        let sql = 'delete from topic where id=?';
        let list = await this.ctx.app.mysql.query(sql, [id]);
        return list;
    }

    // 新增话题
    async uploadTopic(topicimg, topicname, introduction) {
        let sql = 'insert into topic(topicimg, topicname, introduction) values(?,?,?)'
        let list = await this.ctx.app.mysql.query(sql, [topicimg, topicname, introduction]);
        console.log(list);
        return list;
    }

    //查询评论
    async Getcomment() {
        let sql = `select * from comment`;
        let result = await this.ctx.app.mysql.query(sql, []);
        return result;
    }

    //管理员删除用户评论
    async delcomment(id) {
        console.log(id)
        let sql = 'delete from comment where id=?';
        let list = await this.ctx.app.mysql.query(sql, [id]);
        return list;
    }

    //查询评论
    async Getuser() {
        let sql = `select * from user`;
        let result = await this.ctx.app.mysql.query(sql, []);
        return result;
    }

    //管理员删除用户评论
    async deluser(id) {
        console.log(id)
        let sql = 'delete from user where id=?';
        let list = await this.ctx.app.mysql.query(sql, [id]);
        return list;
    }

    //try表
    //查询
    async adminGettry() {
        let sql = `select * from try`;
        let result = await this.ctx.app.mysql.query(sql, []);
        return result;
    }
    //上传
    async uploadTry(img, title, price, msg, class1, pinfen) {
        let sql = 'insert into try( img, title, price, msg, class1, pinfen) values(?,?,?,?,?,?)'
        let list = await this.ctx.app.mysql.query(sql, [img, title, price, msg, class1, pinfen]);
        console.log(list);
        return list;
    }
    //删除
    async delTry(id) {
        console.log(id)
        let sql = 'delete from try where id=?';
        let list = await this.ctx.app.mysql.query(sql, [id]);
        return list;
    }
    // 修改
    async updataTry(id, title, price, msg, class1, pinfen) {
        let sql = 'update try set title=?,price=?,msg=?,class1=?,pinfen=? where id=?';
        let list = await this.ctx.app.mysql.query(sql, [title, price, msg, class1, pinfen, id]);
        console.log(list);
        return list;
    }
}

module.exports = AdminService;
