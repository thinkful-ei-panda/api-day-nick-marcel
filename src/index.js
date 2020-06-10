import $ from 'jquery';

import 'normalize.css';
import './index.css';

import shoppingList from './shopping-list';
import api from './api';

const main = function () {
  api.getItems()
    .then(res => console.log(res));

  shoppingList.bindEventListeners();
  shoppingList.render();
};

$(main);
