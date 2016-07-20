var emailModel = new EmailModel([
        "cherishsdan@163.com",
        "cherishsdan@gmail.com",
        "den.cherishsdan@qq.com"
    ]),

    emailFormView = new EmailFormView(),
    emailListView = new EmailListView(),

    emailView = new EmailView([emailFormView, emailListView]),

    emailController = new EmailController(emailModel, emailView);

    emailController.initialize();