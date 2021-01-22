import template from './template/food-service.hbs';
import itemsTemplate from './menu.json';

const markup = template(itemsTemplate);
const menu = document.querySelector('ul.js-menu');
menu.insertAdjacentHTML('beforeend', markup);
