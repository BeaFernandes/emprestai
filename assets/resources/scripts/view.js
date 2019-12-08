(function(){
    'use strict';

    function isNull(data){
        if(data === null){
            return true;
        }
        return false;
    }

    let loanId = restore('selectedId');
    let loan = restoreLoans('loans')[loanId];
    let person = loan.person;
    let item = loan.item;

    
    isNull($id('name')) ? '' : $id('name').innerHTML = person.name;
    isNull($id('email')) ? '' : $id('email').innerHTML = person.email;
    isNull($id('return-date')) ? '' : $id('return-date').innerHTML = loan.returnDate;
    ((isNull($id('phone'))) ? 'null' : $id('phone').innerHTML = person.phone);
    isNull($id('item')) ? '' : $id('item').innerHTML = item.name;
    isNull($id('notes')) ? '' : $id('notes').innerHTML = loan.notes;
})();
