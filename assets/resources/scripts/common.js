$(document).ready(() => {
  'use strict';
  
  let user = prompt('Digite seu nome');
  setUserName(user);

  $('select').formSelect();
  $('.sidenav').sidenav();
  $('.datepicker').datepicker();



  setUserName = function(userName) {
    if(restore('user') === null){
      save('user', userName);
      $id('user').innerHTML = restore('user');
    }
  };
});

function $id(id){
  'use strict';
  return document.getElementById(id);
}

userAction = () => {
  'use strict';
  let alter = confirm('Deseja alterar o nome de usuário?');
  if(alter){
    setUserName(prompt('Digite seu nome'));
  }
};