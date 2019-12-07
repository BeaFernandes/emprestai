function $id(id){
  'use strict';
  return document.getElementById(id);
}

userAction = () => {
  'use strict';
  var parametros = {
    nome: prompt('Digite seu nome')
  };
  var servico = 'http://localhost:3000/oi';
  $.get(servico, parametros, function (data) {
    saveJson('user', data);
    $('#user').text(data.name);
    $('#user-mobile').text(data.name);
    
  });
};

(function() {
  'use strict';

  if(restore('user') === null){
    userAction();
  } else 
  $('#user').text(restoreJson('user').name);
  $('#user-mobile').text(restoreJson('user').name);
  

})();


$(document).ready(function(){
  'use strict';
  $('select').formSelect();
  $('.sidenav').sidenav();
  $('.datepicker').datepicker();
});