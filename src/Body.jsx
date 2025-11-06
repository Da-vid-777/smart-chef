import React from 'react'
import SmartRecipe from './smartRecipe'
import IngredientList from './ingredientLists'
export default function Body() {

    const [ingredients, setIngredients] = React.useState([git status
])
    const [recipeShown, setRecipeShown] = React.useState(false)


    function addIngredients(formData) {
        const newIngredient = formData.get("ingredient").trim()

         if (!newIngredient) {
    alert("Please enter an ingredient before adding.")
    return
  }
        setIngredients(prevIngredients => [...prevIngredients, newIngredient]) 
    }

     function getRecipe() {
      return (
        setRecipeShown(prevShown => !prevShown)
      )
     }
    return (
            <main>
      <form action={addIngredients} className="form">
        <input
          className="input"
          type="text" 
          placeholder="Enter ingredients here"
          name="ingredient"
        />
        <button type="submit" className="button"> + Add Ingredient</button>
      </form>
 
        { ingredients.length > 0 && 
        <IngredientList 
              ingredients = {ingredients} 
              getRecipe = {getRecipe} />

        }
 
        { recipeShown && < SmartRecipe />} {/*This here is saying that the smart recipe should only show when the recipe shown is true. */}
    </main>
  );
}
 
