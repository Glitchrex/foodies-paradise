import './App.css'
import FoodList from './components/FoodList'
import FoodForm from './components/FoodForm';
import { useFood } from './contexts/FoodContext';
import { useMemo, useState} from 'react';

function App() {
const { FoodExperienceList, addFood } =  useFood();
const [searchFood , SetSearchFood ] = useState<string>("");

const filterFoods = useMemo(() => {
  return FoodExperienceList.filter( (food) =>
  food.dishName.toLowerCase().includes(searchFood.toLowerCase()) ||
  food.eateryName.toLowerCase().includes(searchFood.toLowerCase()) ||
  food.locality.toLowerCase().includes(searchFood.toLowerCase()) ||
  food.typeOfCuisine.toLowerCase().includes(searchFood.toLowerCase())
)
},[searchFood, FoodExperienceList]);


  return (
    <div>
      <h1>Welcome to Foodie Local Discovery</h1>
      <input type='search' placeholder='Search Food by Name,Locality,type or restautant' value={searchFood} onChange={(e) => SetSearchFood(e.target.value)} />
      <FoodForm onAddFood={addFood} />
      <FoodList FoodExperienceList = {filterFoods} />
      
    </div>
  )
}

export default App
