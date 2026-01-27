import './App.css'
import FoodList from './components/FoodList'
import FoodForm from './components/FoodForm';
import { useFood } from './contexts/FoodContext';
import { useSearchFood } from './hooks/useSearchFood';

function App() {
const { FoodExperienceList, addFood } =  useFood();
const {searchFood , setSearchFood, filteredFoodExperienceList } = useSearchFood(FoodExperienceList);


  return (
    <div>
      <h1>Welcome to Foodie Local Discovery</h1>
      <input type='search' placeholder='Search Food by Name,Locality,type or restautant'
       value={searchFood}
       onChange={(e) => setSearchFood(e.target.value)} />
      <FoodForm onAddFood={addFood} />
      <FoodList FoodExperienceList = {filteredFoodExperienceList} />
      
    </div>
  )
}

export default App
