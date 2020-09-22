//router.js
module.exports = app => {
	const { router, controller } = app;

	//用户登录验证
	router.post("/userLogin", controller.loginController.userLogin);
	//验证用户名
	router.post("/checkUser", controller.loginController.checkUser);
	//验证手机号是否存在
	router.post("/checkPhone", controller.loginController.checkPhone);
	//注册用户信息
	router.post("/userRegist", controller.loginController.userRegist);

	//productinfo表
	//管理员获取所有商品表的信息
	router.get('/adminGetProduct', controller.adminController.adminGetProduct);
	//管理员上传商品信息
	router.post("/upload.do", controller.uploadController.upload);
	router.post("/uploadProduct", controller.adminController.uploadProduct);
	//管理员删除商品表的商品
	router.get('/delpro', controller.adminController.delpro);
	//管理员修改商品信息
	router.get('/updataPro', controller.adminController.updataPro);

	//topic表
	//管理员获取所有专题
	router.get('/Gettopic', controller.adminController.Gettopic);
	//管理员删除专题
	router.get('/deltopic', controller.adminController.deltopic);
	//管理员新增专题
	router.post("/uploadTopic", controller.adminController.uploadTopic);

	//comment表
	//管理员获取所有话题
	router.get('/Getcomment', controller.adminController.Getcomment);
	//管理员删除用户评论
	router.get('/delcomment', controller.adminController.delcomment);

	//user表
	//管理员获取所有用户信息
	router.get('/Getuser', controller.adminController.Getuser);
	//管理员删除用户
	router.get('/deluser', controller.adminController.deluser);

	//try表
	//管理员获取所有香水的信息
	router.get('/adminGettry', controller.adminController.adminGettry);
	//管理员上传香水信息
	router.post("/uploadTry", controller.adminController.uploadTry);
	//管理员删除香水
	router.get('/delTry', controller.adminController.delTry);
	//管理员修改香水信息
	router.get('/updataTry', controller.adminController.updataTry);
};