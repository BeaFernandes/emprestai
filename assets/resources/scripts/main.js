window.onload = function(){
  'use strict';
  document.forms[0].onsubmit = function(e){
    e.preventDefault();
    let continuar = confirm('Empréstimo cadastrado com sucesso! Deseja cadastrar novo?');
    if(continuar){
      window.location.href = 'add.html';
    } else {
      window.location.href = 'index.html';
    }

    
  }

  $('#btn-next').click(() => {
    $('#step-1').hide();
    $('#btn-next').hide();
    $('#step-2').show();
    $('#btn-submit').show();
    $('#item-emprestado').focus();
    $('#steper-step-1').text('').removeClass('uncomplete').append('<i class="material-icons">check</i>');
    $('#steper-step-2').removeClass('disabled').addClass('uncomplete');
  });

  $('#steper-step-1').click(function(){
    $('#step-2').hide();
    $('#btn-submit').hide();
    $('#step-1').show();
    $('#btn-next').show();
    $('#nome').focus();
    $('#steper-step-2').addClass('uncomplete');
    $('#steper-step-1').addClass('uncomplete');
  });
  
  $('#steper-step-2').click(function(){
    $('#step-1').hide();
    $('#btn-next').hide();
    $('#step-2').show();
    $('#btn-submit').show();
    $('#item-emprestado').focus();
    $('#steper-step-1').removeClass('uncomplete');
  });
}

function $id(id){
  'use strict';
  return document.getElementById(id);
}





document.addEventListener('DOMContentLoaded', function() {
    'use strict';//CHECKED BY jshint
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems, {});
  });

  document.addEventListener('DOMContentLoaded', function() {
    'use strict';//CHECKED BY jshint
    var elems = document.querySelectorAll('.datepicker');
    var instances = M.Datepicker.init(elems, {});
  });