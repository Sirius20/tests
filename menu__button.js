'use strict';

var button = document.querySelector('.menu__button');
var menu = document.querySelector('.menu');
var fieldset = document.querySelector('fieldset')

button.onclick = function() {
fieldset.setAttribute('disabled', 'disabled');
}