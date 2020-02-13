import React, { useEffect, useState } from 'react';
import Recipe from './Recipe'
import './App.css';

const App = () => {

  const APP_ID = "455c883f";
  const APP_KEY = "30233125e8b15498f90de9425967fafc";

  //state
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('')
  const [query, setQuery] = useState('chicken')


 useEffect(() => {
  const getRecipes = async() => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
      );
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data)
 };
    getRecipes();
 }, [query]);


 //functions
 const updateSearch = e => {
   setSearch(e.target.value);
 }

 const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('')
 }


  return (
    <div className="App">
          <h3 className="header">Recipe Central</h3>
          <h6 className="about">Search your favorite recipes or discover new ones!</h6>
      <form className="search-form" onSubmit={getSearch}>
      
          <input 
          className="search-bar" 
          type='text' 
          value={search}
          onChange={updateSearch}
          placeholder="Find a recipe..." />

          <button 
          className="search-button" 
          type='submit'>
            Search
          </button>

      </form>

      <div className="recipes">

      {recipes.map(recipe => (
        <Recipe 
        key={recipe.recipe.label}
        title={recipe.recipe.label}
       
        source ={recipe.recipe.source}
        image={recipe.recipe.image}
        time={recipe.recipe.totalTime}
        serving ={recipe.recipe.yield}
        ingredients={recipe.recipe.ingredients}
        url={recipe.recipe.url}/>
      ))}
      {/* calories={recipe.recipe.calories.toFixed()}*/}
      </div>

    </div>
  )
}

export default App;

