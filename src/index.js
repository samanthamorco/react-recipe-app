import React from 'react';
import ReactDOM from 'react-dom';
import RecipeList from './RecipeList'

var destination = document.querySelector("#container");

ReactDOM.render(
  <div>
    <RecipeList />
  </div>,
  destination
);
