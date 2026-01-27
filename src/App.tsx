import './App.css'
import FoodList from './components/FoodList'
import FoodForm from './components/FoodForm';
import { useFood } from './contexts/FoodContext';
import { useSearchFood } from './hooks/useSearchFood';

function App() {
const { FoodExperienceList, addFood, loading, error } =  useFood();
const {searchFood , setSearchFood, filteredFoodExperienceList } = useSearchFood(FoodExperienceList);

if(loading){
  return <div>Loading food experiences...</div>
}
if(error){
  return <div>Error: {error}</div>
}

  return (
    <div>
      <h1>Welcome to Foodie Local Discovery</h1>
      <input type='search' placeholder='Search Food by Name,Locality,type or restautant'
       value={searchFood}
       onChange={(e) => setSearchFood(e.target.value)} />
      <FoodForm onAddFood={addFood} />

      {filteredFoodExperienceList.length === 0 ? (
        <div>No food experiences found.</div>
      ) : (
      <FoodList FoodExperienceList = {filteredFoodExperienceList} />
      )}
    </div>
  )
}

export default App
