$(document).ready(() => {
  'use strict';
  $('select').formSelect();
  $('.sidenav').sidenav();
  $('.datepicker').datepicker();
});

function $id(id){
  'use strict';
  return document.getElementById(id);
}