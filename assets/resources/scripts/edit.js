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
        alert(`você disparou o evento ${e.type}`);
        console.log(e);
        console.log('criar envio');
    }

    $id('name').onclick = (e) => {
        alert(`você disparou o evento ${e.type}`);
        console.log(e.type);
    }
})();