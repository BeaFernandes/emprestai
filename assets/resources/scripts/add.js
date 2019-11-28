let Emprestimo = function(idEmprestimo, pessoa, item, dataAtual, dataDevolucao, obs){
  'use strict';
  this.idEmprestimo = idEmprestimo;
  this.pessoa = pessoa;
  this.item = item;
  this.dataAtual = dataAtual;
  this.dataDevolucao = dataDevolucao;
  this.obs = obs;
}

class Pessoa {
  constructor(idPessoa, nome, tel, email){
    this.idPessoa = idPessoa;
    this.nome = nome;
    this.tel = tel;
    this.email = email;
  }
}

class Item {
  constructor(idItem, nome, categoria){
    this.idItem = idItem;
    this.nome = nome;
    this.categoria = categoria;
  }
}

function $id(id){
  'use strict';
  return document.getElementById(id);
}

function $query(selector){
  'use strict';
  return document.querySelector(selector);
}


(function(){
  'use strict';

  let idPessoa = 0;
  let idItem = 0;
  let idEmprestimo = 0;

  let pessoas = [];
  let itens = [];
  let emprestimos = [];

  function dataAtualFormatada(){
    let data = new Date();
    
    let dia  = data.getDate().toString().padStart(2, '0');
    let mes  = (data.getMonth()+1).toString().padStart(2, '0'); 
    let ano  = data.getFullYear();
    
    return `${dia}/${mes}/${ano}`;
  }

  window.onload = () => {
    document.forms[0].onsubmit = function(e){
      e.preventDefault();
      
      let nome = $id('nome').value;
      let tel = $id('telefone').value;
      let email = $id('email').value;

      let pessoa = new Pessoa(idPessoa++, nome, tel, email);
      pessoas.push(pessoa);
      console.log(pessoas);

      let nomeItem = $id('item-emprestado').value;
      let categoria = $id('select-categoria');
      categoria = categoria.options[categoria.selectedIndex].text;
      
      let item = new Item(idItem++, nomeItem, categoria);
      itens.push(item);
      console.log(itens);
      
      let dataDevolucao = $id('data-devolucao').value;
      let dataAtual =  dataAtualFormatada();

      let obs = $id('observacoes').value;

      let emprestimo = new Emprestimo(idEmprestimo++, pessoa, item, dataAtual, dataDevolucao, obs);
      emprestimos.push(emprestimo);
      console.log(emprestimos);
      //let continuar = confirm('Empréstimo cadastrado com sucesso! Deseja cadastrar novo?');
     // if(continuar){
       // window.location.href = 'add.html';
     // } else {
      //  window.location.href = 'index.html';
     // }
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
      //if($('#telefone').val() === null || $('#telefone').val() === ''){
     //   return;
      //} 
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
  
  
  $('select').formSelect();
})();
