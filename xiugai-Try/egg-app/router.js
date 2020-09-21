module.exports = app => {
	const{router,controller} = app;
	
  router.post('/show',controller.showController.datashow);
  router.get('/getshop',controller.showController.getshop);
  router.post('/addgoods',controller.showController.addgoods);
  router.post('/showgoods',controller.showController.showgoods);
  router.post('/clearall',controller.showController.clearall);
  
  
};