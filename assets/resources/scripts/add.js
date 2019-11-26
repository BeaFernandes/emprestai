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

  let tel = $id('telefone');
  tel.addEventListener('invalid', function(){
    if(tel.validity.patternMismatch){
      tel.setCustomValidity('O telfeone deve seguir um padrão (00) 00000-0000');
    }    
  });

  let item = $id('item-emprestado');
  item.addEventListener('invalid', function(){
    if(item.validity.valueMissing){
      item.setCustomValidity('O nome do item não pode ser vazio');
    }    
  });

  let nome = $id('nome');
  nome.addEventListener('invalid', function(){
    console.log("invalido bebe");
    if(nome.validity.valueMissing){
        nome.setCustomValidity("O nome não pode estar vazio");
    }
    if(nome.validity.patternMismatch){
      nome.setCustomValidity("O nome deve possuir apenas letras");
  }
  });
  $('#btn-next').click(() => {
    if($('#nome').val() === null || $('#nome').val() === ''){
      return;
    } 
    $('#step-1').hide();
    $('#btn-next').hide();
    $('#step-2').show();
    $('#btn-submit').show();
    $('#item-emprestado').focus();
    $('#steper-step-1').removeClass('uncomplete');
    $('#steper-step-1').text('');
    $('#steper-step-1').append('<i class="material-icons">check</i>');
    //$('#steper-step-1').text('').removeClass('uncomplete').append('<i class="material-icons">check</i>');"Line is too long" CHECKED BY jshint
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


$(document).ready(function(){
  'use strict';
  $('select').formSelect();
});