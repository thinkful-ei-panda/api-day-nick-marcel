import $ from 'jquery';

import 'normalize.css';
import './index.css';

import shoppingList from './shopping-list';
import api from './api';
import store from './store';

const main = function () {
  api.getItems()
  .then(res => res.json())
  .then((items) => {
    items.forEach((item) => store.addItem(item));
    shoppingList.render();
  });

  api.createItem('pears')
    .then(res => res.json())
    .then((newItem) => {
      return api.getItems();
    })
    .then(res => res.json())
    .then((items) => {
      console.log(items);
    });

  shoppingList.bindEventListeners();
  shoppingList.render();
};

$(main);
