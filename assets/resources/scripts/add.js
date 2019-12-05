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
      let currentDate =  function(){
        let data = new Date();

        let dia  = data.getDate().toString().padStart(2, '0');
        let mes  = (data.getMonth()+1).toString().padStart(2, '0'); 
        let ano  = data.getFullYear();
        
        return `${dia}/${mes}/${ano}`;
      };

      let notes = $id('notes').value;

      let loanId = restore('loanId');
      let emprestimo = new Loan(loanId++, person, item, currentDate, returnDate, notes);
      save('loanId', loanId);
      
      saveLoan(emprestimo);
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
          nome.setCustomValidity('O nome não pode estar vazio');//string sigle quote CHECKED BY jshint
      }
      if(nome.validity.patternMismatch){
        nome.setCustomValidity('O nome deve possuir apenas letras');
    }
    });
    $('#btn-next').click(() => {
      if($('#name').val() === null || $('#name').val() === ''){
        return;
      }
      //if($('#phone').val() === null || $('#phone').val() === ''){
     //   return;
      //} 
      $('#step-1').hide();
      $('#btn-next').hide();
      $('#step-2').show();
      $('#btn-submit').show();
      $('#item').focus();
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
      $('#name').focus();
      $('#steper-step-2').addClass('uncomplete');
      $('#steper-step-1').addClass('uncomplete');
    });
    
    $('#steper-step-2').click(function(){
      $('#step-1').hide();
      $('#btn-next').hide();
      $('#step-2').show();
      $('#btn-submit').show();
      $('#item').focus();
      $('#steper-step-1').removeClass('uncomplete');
    });
})();
