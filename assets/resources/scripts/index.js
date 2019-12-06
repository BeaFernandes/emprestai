(function(){
    'use strict';

    let loans = restoreLoans();
    console.log(loans);
    (function setOnList(){
        if(loans === []){
            let warning = `<tr><td colspan="5" class="center">Não há dados a serem exibidos</td></tr>`;
            $id('loans-table-body').innerHTML = warning;
        }
        for(let loan of loans){
            let person = loan.person;
            let item = loan.item;
    
            let tr = `<tr id="${loan.loanId}">
                        <td>${person.name}</td>
                        <td>${item.name}</td>    
                        <td>${loan.returnDate}</td>
                        <td id="situacao${loan.loanId}"></td> 
                        <td class="center-align">
                            <a class="link-table" onclick="edit(${loan.loanId})" href="#"><i class="material-icons">edit</i></a>
                        </td>
                        <td class="center-align">
                            <a class="link-table" onclick="deleteItem(${loan.loanId})" href="#"><i class="material-icons">delete</i></a>
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
    localStorage.setItem('selectedId', id);
    window.location.href = 'edit.html';
}

function deleteItem(id){
    'use strict';
    deleteLoan(id);
    window.location.href = 'index.html';
}
