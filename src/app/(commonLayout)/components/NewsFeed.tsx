"use client"
import {CircularProgress} from "@nextui-org/react";
import { useGetRecipeQuery } from "@/redux/api/baseApi";
import RecipeCart from "./RecipeCart";
import { TRecipe } from "@/types";

const NewsFeed = () => {
    const { data, isLoading } = useGetRecipeQuery("")
    if (isLoading) {
        return  <CircularProgress size="lg" aria-label="Loading..."/>
    }
    const { data:allRecipe } = data

    return (
        <div>
            <div className="grid gap-5">
                {
                    allRecipe?.map((recipe: TRecipe) => <RecipeCart key={recipe.title} recipe={recipe}></RecipeCart>)
                }
            </div>
        </div>
    );
};

export default NewsFeed;