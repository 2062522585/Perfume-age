module.exports = app => {
	const{router,controller} = app;
	
  router.post('/show',controller.showController.datashow);
  router.get('/getshop',controller.showController.getshop);
  
  
};