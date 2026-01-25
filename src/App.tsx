import './App.css'
import type { FoodExperience } from './types/food'

function App() {

const sampleFoodExperience: FoodExperience = {
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
};

  return (
    <div>
      <h1>Welcome to Foodie Local Discovery</h1>
      <h1>Dish details</h1>
      <p><strong>Dish Name:</strong> {sampleFoodExperience.dishName}</p>
      <p><strong>Eatery Name:</strong> {sampleFoodExperience.eateryName}</p>
      <p><strong>Location:</strong> {sampleFoodExperience.location}</p>   
      <p><strong>Rating:</strong> {sampleFoodExperience.rating} / 5</p>
      <p><strong>Review:</strong> {sampleFoodExperience.review}</p>
      <p><strong>Locality:</strong> {sampleFoodExperience.locality}</p>
      <p><strong>Type of Cuisine:</strong> {sampleFoodExperience.typeOfCuisine}</p>
      <p><strong>Visit Date:</strong> {sampleFoodExperience.createdAt.toLocaleDateString()}</p>
    </div>
  )
}

export default App
