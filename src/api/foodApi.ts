import type { FoodExperience } from '../types/food';

export function fetchFoodExperiences(): Promise<FoodExperience[]> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([ 
{
    id: "1",
    dishPicture: "",
    dishName: "Pasta Primavera",
    eateryName: "Italian Bistro",
    location: "123 Main St, Springfield",
    rating: 4.5,
    review: "Delicious and fresh ingredients, highly recommend!",
    createdAt: new Date(),
    locality: "Downtown",
    typeOfCuisine: "Veg"
},
{
    id: "2",
    dishPicture: "",
    dishName: "Chicken Tikka Masala",
    eateryName: "Spice Hub",
    location: "456 Elm St, Springfield",
    rating: 4.8,
    review: "Rich flavors and perfectly cooked chicken.",
    createdAt: new Date(),
    locality: "Uptown",
    typeOfCuisine: "NonVeg"
},
{
    id: "3",
    dishPicture: "",
    dishName: "Vegan Buddha Bowl",
    eateryName: "Green Eats",
    location: "789 Oak St, Springfield",
    rating: 4.2,
    review: "A healthy and tasty option for vegans.",
    createdAt: new Date(),
    locality: "Midtown",
    typeOfCuisine: "Vegan"
}
            ]);
        },10000);
    });
}