(function(){
    'use strict';

    let counter = 60;
    
    function count(){
        if(counter >= 0)
        $id('counter').innerHTML = counter--;
        else
        window.location.href = 'index.html';
    }
    
    setInterval(count, 1000);

    let loans = restoreLoans();
    console.log(loans);
    (function setOnList(){
        if(loans.length === 0){
            let warning = `<tr><td colspan="5" class="center">Não há empréstimos 
            a serem exibidos</td></tr>`;
            $id('loans-table-body').innerHTML = warning;
        }
        for(let loan of loans){
            let person = loan.person;
            let item = loan.item;
    
            let tr = `<tr id="${loans.indexOf(loan)}">
                        <td onclick="view(${loans.indexOf(loan)})">${person.name}</td>
                        <td onclick="view(${loans.indexOf(loan)})">${item.name}</td>    
                        <td onclick="view(${loans.indexOf(loan)})">${loan.returnDate}</td>
                        <td onclick="view(${loans.indexOf(loan)})" id="situacao${loan.loanId}"></td> 
                        <td class="center-align">
                            <a class="link-table" onclick="edit(${loans.indexOf(loan)})" href="#">
                                <i class="material-icons">edit</i>
                            </a>
                        </td>
                        <td class="center-align">
                            <a class="link-table" onclick="deleteItem(${loans.indexOf(loan)})" href="#">
                                <i class="material-icons">delete</i>
                            </a>
                        </td>
                    </tr>`;
            $id('loans-table-body').innerHTML += tr;
        }
    })();
    
    (function verificaSituacao(){
        for(let loan of loans){
            let date = loan.returnDate;
            let day = +(date.substring(0, 2));
            let month = +(date.substring(3, 5));
            let year = +(date.substring(6, 10));
            let now = new Date();

            if(year <= +(now.getFullYear())){
                if(month-1 <= +(now.getMonth())){
                    if(day <= +(now.getDate())){
                        $id(loan.loanId).classList.add('late');
                        $id(`situacao${loan.loanId}`).textContent = 'Atrasado';
                        continue;
                    }
                }
            } 
            $id(`situacao${loan.loanId}`).textContent = 'Pendente';
        }
    })(); 
})();
function edit(id){
    'use strict';
    save('selectedId', id);
    window.location.href = 'edit.html';
}
function view(id){
    'use strict';
    save('selectedId', id);
    window.location.href = 'view.html';
}
function deleteItem(id){
    'use strict';
    deleteLoan(id);
    window.location.href = 'index.html';
}
