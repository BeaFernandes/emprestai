$(function(){
  $('btn-next').onclick = () => {
      this.hide();
      window.alert('teste');
  }
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