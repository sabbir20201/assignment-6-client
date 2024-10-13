
import React from 'react';
import RecipeDetails from '../../components/ui/RecipeDetails';


type TRecipeId = {
  params: {
    recipeId: string
  }
}

const recipeDetails = async ({ params }: { params: TRecipeId }) => {
 console.log(params);
 
  const res = await fetch(`http://localhost:5000/api/recipe/${params.recipeId}`, {
    cache: 'no-store'
  })
  const recipeData = await res.json()
  console.log('id from params', params);

  const { data: recipe } = recipeData
  
  return (
    <div>
      <RecipeDetails recipe={recipe}></RecipeDetails>
    </div>
  );
};

export default recipeDetails;