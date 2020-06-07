'use strict';

var form = document.querySelector('#main-form');

form.addEventListener('submit',function(event){
    event.preventDefault();
    console.log(event.target[1].value);

});