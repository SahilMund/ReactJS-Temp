import React from 'react';
import RecipeItem from './RecipeItem';


const Recipes =(props)=>{
    const {recipes} = props;

    return(
        <div className="card-columns">
        {
            recipes.map(recipee =>( 
               <RecipeItem key={Math.random()*100} 
               name={recipee.recipe.label} image={recipee.recipe.image}
                 ingredientLines={recipee.recipe.ingredientLines}
               /> 
                ))
        }
        
        </div>
    );
  }

export default Recipes;