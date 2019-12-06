function $id(id){
  'use strict';
  return document.getElementById(id);
}

setUserName = function(userName) {
  'use strict';
  save('user', userName);
  $id('user').innerHTML = restore('user');
  
};

userAction = () => {
  'use strict';
  let alter = confirm('Deseja alterar o nome de usuário?');
  if(alter){
    setUserName(prompt('Digite seu nome'));
  }
};

window.ondload = () => {
  'use strict';

  if(restore('user') === null){
    setUserName(prompt('Digite seu nome'));
  } else {
    $id('user').innerHTML = restore('user');
  }

};


$(document).ready(function(){
  'use strict';
  $('select').formSelect();
  $('.sidenav').sidenav();
  $('.datepicker').datepicker();
});