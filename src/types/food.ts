export type FoodExperience = {
    id: string;
    dishName: string;
    dishPicture: string; // URL or base64 string
    eateryName: string;
    location: string;
    rating: number; // Rating out of 5
    review: string;
    createdAt: Date;
    locality: string;
    typeOfCuisine: "Veg" | "NonVeg" | "Vegan" | "GlutenFree" | "JainFood" | "Other";
}   