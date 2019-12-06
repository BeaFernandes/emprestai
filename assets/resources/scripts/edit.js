(function(){
    'use strict';
    let loanId = restore('selectedId');
    let loan = restoreLoans('loans')[loanId];
    let person = loan.person;
    let item = loan.item;

    $id('name').value = person.name;
    $id('email').value = person.email;
    $id('return-date').value = loan.returnDate;
    $id('phone').value = person.phone;
    $id('item').value = item.name;
    $id('notes').value = loan.notes;

    document.forms[0].onsubmit = (e) => {
        e.preventDefault();
        loan.person.name = $id('name').value;
        loan.person.phone = $id('phone').value;
        loan.person.email = $id('email').value;
        loan.item.name = $id('item').value;
        loan.returnDate = $id('return-date').value;
        loan.notes = $id('notes').value;
        updateLoan(loan);
        alert('Dados alterados com sucesso!');   
        window.location.href = 'index.html';
    };
})();