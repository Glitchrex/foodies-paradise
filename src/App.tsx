import { useEffect, useState } from 'react';
import './App.css'
import FoodList from './components/FoodList'
import type { FoodExperience } from './types/food'
import { fetchFoodExperiences } from './api/foodApi';
import FoodForm from './components/FoodForm';

function App() {

const sampleFoodExperienceList: FoodExperience[] = [
{
    id: "1",
    dishPicture: "",
    dishName: "Masala Dosa",
    eateryName: "Vidyarthi Bhavan",
    location: "Basavanagudi, Bangalore",
    rating: 4.2,
    review: "Crispy dosa with rich chutney and ghee",
    createdAt: new Date(),
    locality: "Midtown",
    typeOfCuisine: "Vegan"
}
];
const [searchFood , SetSearchFood ] = useState<string>("");
const [ FoodExperienceList, setFoodExperienceList ] =  useState<FoodExperience[]>(sampleFoodExperienceList);
const [isLoading , setisLoading] = useState<boolean>(true);
const [hasErrors , setHasErrors] = useState<boolean>(false);
const [errorMessage , setErrorMessage] = useState<string>("");

function handleFoods(food : FoodExperience){
  setFoodExperienceList((prevFoods => [ food, ...prevFoods]));
}

useEffect( () => {
  // Simulate fetching data
  fetchFoodExperiences().then( (data) => {
    setFoodExperienceList(data);
    setisLoading(false);
  }).catch( (error) => {
    setHasErrors(true);
    setErrorMessage(error.message);
    setisLoading(false);
  })
},[])

const filterFoods = FoodExperienceList.filter( (food) =>
  food.dishName.toLowerCase().includes(searchFood.toLowerCase()) ||
  food.eateryName.toLowerCase().includes(searchFood.toLowerCase()) ||
  food.locality.toLowerCase().includes(searchFood.toLowerCase()) ||
  food.typeOfCuisine.toLowerCase().includes(searchFood.toLowerCase())
);

if(isLoading){
  return <div>Loading...</div>
}

if(hasErrors){
  return <div>Error: {errorMessage}</div>
}


  return (
    <div>
      <h1>Welcome to Foodie Local Discovery</h1>
      <FoodForm onAddFood={handleFoods} />
      <input type='search' placeholder='Search Food by locality, Cuisine, Eatery or Dish Name' value={searchFood} onChange={ (e) => SetSearchFood(e.target.value)} />
      <FoodList FoodExperienceList = {filterFoods} />
      
    </div>
  )
}

export default App
