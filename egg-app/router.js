module.exports = app => {
	const{router,controller} = app;
	// router.get('/getString.do', controller.ajaxController.getString);
	router.post('/search.do', controller.navController.search);
	router.post('/topic.do', controller.navController.topic);
	 router.post('/show',controller.showController.datashow);
	  router.get('/getshop',controller.showController.getshop);
	   router.post('/showgoods',controller.showController.showgoods);
	    router.post('/clearall',controller.showController.clearall);
	    router.post('/getdata',controller.showController.getdata);
};