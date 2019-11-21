$(document).ready(function () { 
  console.log("Ready?");
  
    $('#btn-next').click(() => {
        $('#step-1').hide();
        $('#btn-next').hide();
        $('#step-2').show();
        $('#btn-submit').show();
    });

    $('#btn-submit').submit((e) => {
      e.preventDefault();
        console.log('sub');
    });
});

function $id(id){
  return document.getElementById(id);
}

document.forms[0].onsubmit = (e) => {
    preventDefault(e);
}



document.addEventListener('DOMContentLoaded', function() {
    'use strict';
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems, {});
  });

  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.datepicker');
    var instances = M.Datepicker.init(elems, {});
  });