'use client'
import { TRecipe } from "@/types";
import RecipeCart from "../ui/RecipeCart";

const LatestRecipe = ({ data }: { data: TRecipe[] }) => {
    // const { data, isLoading } = useGetRecipeQuery("")
    // if (isLoading) {
    //     return  <CircularProgress size="lg" aria-label="Loading..."/>
    // }
// console.log('from latest data',data);

    return (
        <div>
            <div className="grid gap-5">
                {
                   data?.map((recipe: TRecipe) => <RecipeCart key={recipe.title} recipe={recipe}></RecipeCart>)
                }
            </div>
        </div>
    )
}

export default LatestRecipe