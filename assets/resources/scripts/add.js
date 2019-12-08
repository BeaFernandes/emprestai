let Loan = function(loanId, person, item, currentDate, returnDate, notes){
  'use strict';
  this.loanId = loanId;
  this.person = person;
  this.item = item;
  this.currentDate = currentDate;
  this.returnDate = returnDate;
  this.notes = notes;
};

class Person {
  constructor(personId, name, phone, email){
    this.personId = personId;
    this.name = name;
    this.phone = phone;
    this.email = email;
  }
}

class Item {
  constructor(itemId, name, category){
    this.itemId = itemId;
    this.name = name;
    this.category = category;
  }
}

(function(){
  'use strict';

  function $id(id){
    return document.getElementById(id);
  }

  $('#phone').mask('(00) 00000-0000');

  setTimeout(() => {
    alert('Seção expirada');
    window.location.href = 'index.html';
  }, 300000);

  function letrasApenas(event){
    let code = event.charCode;
    if(!(code >= 97 && code <= 122 || code >= 65 && code <= 90 || 
      code === 32 || code > 191 && code <= 255)){
        event.preventDefault();
    }
  }
  document.querySelector('#name').onkeypress = letrasApenas;

  $id('item').onblur = function(){
    let content = $id('item').value;
    $id('item').value = content.toUpperCase();
  };

    document.forms[0].onsubmit = function(e){
      e.preventDefault();
      
      let name = $id('name').value;
      let phone = $id('phone').value;
      let email = $id('email').value;

      let personId = restore('personId');
      let person = new Person(personId++, name, phone, email);
      save('personId', personId);
      console.log(person);


      let itemName = $id('item').value;
      let category = $id('select-category');
      category = category.options[category.selectedIndex].text;
      

      let itemId = restore('itemId');
      let item = new Item(itemId++, itemName, category);
      save('itemId', itemId);
      console.log(item);
      
      let returnDate = $id('return-date').value;

      function formatDate(f){
        let data = f();
        let dia  = data.getDate().toString().padStart(2, '0');
        let mes  = (data.getMonth()+1).toString().padStart(2, '0'); 
        let ano  = data.getFullYear();
        
        return `${dia}/${mes}/${ano}`;
      }

      function curDate(){
        return new Date();
      }

      let currentDate =  formatDate(curDate);

      let notes = $id('notes').value;

      let loanId = restore('loanId');
      let loan = new Loan(loanId++, person, item, currentDate, returnDate, notes);
      save('loanId', loanId);

      saveLoan(loan);
      let continuar = confirm('Empréstimo cadastrado com sucesso! Deseja cadastrar novo?');
      if(continuar){
        window.location.href = 'add.html';
      } else {
        window.location.href = 'index.html';
      }
    };
  
    let tel = $id('phone');
    tel.addEventListener('invalid', function(){
      if(tel.validity.patternMismatch){
        tel.setCustomValidity('O telfeone deve seguir um padrão (00) 00000-0000');
      }    
    });
  
    let item = $id('item');
    item.addEventListener('invalid', function(){
      if(item.validity.valueMissing){
        item.setCustomValidity('O nome do item não pode ser vazio');
      }    
    });
  
    let nome = $id('name');
    nome.addEventListener('invalid', function(){
      if(nome.validity.valueMissing){
          nome.setCustomValidity('O nome não pode estar vazio');
      }
      if(nome.validity.patternMismatch){
        nome.setCustomValidity('O nome deve possuir apenas letras');
    }
    });
    $('#btn-next').click(() => {
      if($('#name').val() === null || $('#name').val() === ''){
        return;
      }
      

      $('#step-1').fadeOut(1000);
      $('#btn-next').fadeOut(1000);
      $('#step-2').fadeIn(3000);
      $('#btn-submit').fadeIn(3000);
      $('#item').focus();
      $('#steper-step-1').removeClass('uncomplete');
      $('#steper-step-1').text('');
      $('#steper-step-1').append('<i class="material-icons">check</i>');
      $('#steper-step-2').removeClass('disabled').addClass('uncomplete');
      
    });
  
    $('#steper-step-1').click(function(){
      $('#step-2').fadeOut(1000);
      $('#btn-submit').fadeOut(1000);
      $('#step-1').fadeIn(3000);
      $('#btn-next').fadeIn(3000);
      $('#name').focus();
      $('#steper-step-2').addClass('uncomplete');
      $('#steper-step-1').addClass('uncomplete');
    });
    
    $('#steper-step-2').click(function(){
      $('#step-1').fadeOut(1000);
      $('#btn-next').fadeOut(1000);
      $('#step-2').fadeIn(3000);
      $('#btn-submit').fadeIn(3000);
      $('#item').focus();
      $('#steper-step-1').removeClass('uncomplete');
    });
})();
