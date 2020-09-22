//router.js
module.exports = app=> {
	const { router, controller } = app;
	//获取首页第二部分专题图片
	router.get('/getTc', controller.hmtcController.getTc);

	//获取首页香水图片和名称
	router.get('/getPef', controller.hmpefController.getPef);

	//获取香评头像，名称
	router.get('/getCom', controller.hmcomController.getCom);

	//获取左边排行榜图片，名称
	router.get('/getLeaderleft', controller.hmpefController.getLeaderleft);

	//获取右边排行榜图片，名称
	router.get('/getLeaderright', controller.hmpefController.getLeaderright);

	 
};