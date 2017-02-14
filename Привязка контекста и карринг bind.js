"use strict";

function ask(question, answer, ok, fail) {
  var result = prompt(question, '');
  if (result.toLowerCase() == answer.toLowerCase()) ok();
  else fail();
}

var user = {
  login: 'Василий',
  password: '12345',

  loginDone: function(result) {
    alert( this.login + (result ? ' вошёл в сайт' : ' ошибка входа') );
  },

  checkPassword: function() {
    var self = this;
    ask("Ваш пароль?", this.password,
      function() {
        self.loginDone(true);
      },
      function() {
        self.loginDone(false);
      }
    );
  }
};

user.checkPassword();