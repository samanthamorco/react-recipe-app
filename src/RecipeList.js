import React, { Component } from 'react';
import RecipeItems from './RecipeItems';

class RecipeList extends Component {
  render () {
    return (
      <div className="recipeListMain">
        <form>
          <input placeholder="Recipe Title"></input>
          <button type="submit">Submit</button>
        </form>
        <RecipeItems />
      </div>
    )
  }
}

export default RecipeList;
