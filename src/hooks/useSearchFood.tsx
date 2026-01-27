import { useMemo, useState } from "react";
import type { FoodExperience } from "../types/food";

export function useSearchFood(FoodExperienceList : FoodExperience[]){
    const [searchFood, setSearchFood] = useState("");

    const filteredFoodExperienceList = useMemo(() => {
        if(!searchFood.trim()){
            return FoodExperienceList;
        }

        return FoodExperienceList.filter((food) => {
            return (
            food.dishName.toLowerCase().includes(searchFood.toLowerCase()) ||
            food.eateryName.toLowerCase().includes(searchFood.toLowerCase()) ||
            food.locality.toLowerCase().includes(searchFood.toLowerCase()) ||
            food.typeOfCuisine.toLowerCase().includes(searchFood.toLowerCase())
        )
        })  
    },[FoodExperienceList, searchFood]);

    return {
        searchFood,
        setSearchFood,
        filteredFoodExperienceList
    };
}