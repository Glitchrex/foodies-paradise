import { useState } from "react";
import type { FoodExperience } from "../../types/food";

type FoodFormProps = {
  onAddFood: (food: FoodExperience) => void;
};

function FoodForm({ onAddFood }: FoodFormProps) {
  const [dishName, setDishName] = useState("");
  const [eateryName, setEateryName] = useState("");
  const [locality, setLocality] = useState("");
  const [location, setLocation] = useState("");
  const [dietaryPreference, setdietaryPreference] = useState<"Veg" | "NonVeg" | "Vegan" | "GlutenFree" | "JainFood" | "Other">("Veg");
  const [dishPicture, setDishPicture] = useState("");
  const [review, setReview] = useState("");
  const [rating, setRating] = useState(0);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const newFood: FoodExperience = {
      id: crypto.randomUUID(),
      dishName,
      eateryName,
      locality,
      dietaryPreference,
      location,
      dishPicture,
      rating,
      review,
      createdAt: new Date(),
    };

    onAddFood(newFood);
    setDishName("");
    setEateryName("");
    setLocality("");
    setLocation("");
    setdietaryPreference("Veg");
    setDishPicture("");
    setReview("");
    setRating(0);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Dish name"
        value={dishName}
        onChange={(e) => setDishName(e.target.value)}
      />

       <input
       type="file"
        placeholder="Dish Photo"
        value={dishPicture}
        onChange={(e) => setDishPicture(e.target.value)}
      />

       <input
        placeholder="Cuisine Type"
        value={dietaryPreference}
        onChange={(e) => setdietaryPreference(e.target.value as any)}
      />

      <input
        placeholder="Eatery name"
        value={eateryName}
        onChange={(e) => setEateryName(e.target.value)}
      />

      <input
        placeholder="Location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />

      <input
        placeholder="Locality"
        value={locality}
        onChange={(e) => setLocality(e.target.value)}
      />

      <textarea
        placeholder="Why is it good?"
        value={review}
        onChange={(e) => setReview(e.target.value)}
      />

      <button type="submit">Add Food</button>
      <button type="reset">Reset</button>

    </form>
  );
}

export default FoodForm;
