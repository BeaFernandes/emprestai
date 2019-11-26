window.onload = function(){
  'use strict';
  
}

function $id(id){
  'use strict';
  return document.getElementById(id);
}

document.addEventListener('DOMContentLoaded', function() {
    'use strict';//CHECKED BY jshint
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems, {});
  });

  document.addEventListener('DOMContentLoaded', function() {
    'use strict';//CHECKED BY jshint
    var elems = document.querySelectorAll('.datepicker');
    var instances = M.Datepicker.init(elems, {});
  });