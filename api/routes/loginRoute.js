module.exports = app => {
    const controller = app.controllers.loginController
  
    app.route('/api/v1/login/')
      .post(controller.login);
  } 