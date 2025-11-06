export default function IngredientList(props) {

         const ingredientsListItems = props.ingredients.map(ingredient => (
     <li key={ingredient}>{ingredient}</li>
     ))

    return (
        <section>
          <h2>Ingredients List:</h2>
          <ul className="ingredients-list" aria-live="polite">
            {ingredientsListItems}
          </ul> 
         { props.ingredients.length > 3 && 
         <div className="get-recipe-container"> 
            <div>
              <h3>Ready for a recipe?</h3>
              <p>Generate a recipe from your list of ingredients.</p>
            </div>
            <div>
              <button onClick={props.getRecipe} type='button'>Get a recipe</button>
             </div>
         </div> }
        </section> 
    )
}