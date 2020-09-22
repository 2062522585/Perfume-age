// app/controller/uploadController.js
const Controller = require('egg').Controller;
const fs = require('fs');
const path = require("path");

class UploadController extends Controller {

	async upload() {
		const file = this.ctx.request.files[0];
		const toFileName = '/public/upload/' + Date.now() + file.filename;
		let to = path.dirname(__dirname) + toFileName;
		await fs.copyFileSync(file.filepath, to);
		await fs.unlinkSync(file.filepath);
		const newUrl = "http://localhost:7001" + toFileName;
		this.ctx.response.body = newUrl;
	}

};
module.exports = UploadController