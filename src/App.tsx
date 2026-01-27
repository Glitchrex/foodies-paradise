import './App.css'
import FoodList from './components/FoodList'
import FoodForm from './components/FoodForm';
import { useFood } from './contexts/FoodContext';

function App() {
const { FoodExperienceList: foods, addFood } =  useFood();

// const [searchFood , SetSearchFood ] = useState<string>("");
// const [isLoading , setisLoading] = useState<boolean>(true);
// const [hasErrors , setHasErrors] = useState<boolean>(false);
// const [errorMessage , setErrorMessage] = useState<string>("");


// useEffect( () => {
//   // Simulate fetching data
//   fetchFoodExperiences().then( (data) => {
//     setFoodExperienceList(data);
//     setisLoading(false);
//   }).catch( (error) => {
//     setHasErrors(true);
//     setErrorMessage(error.message);
//     setisLoading(false);
//   })
// },[])

// const filterFoods = FoodExperienceList.filter( (food) =>
//   food.dishName.toLowerCase().includes(searchFood.toLowerCase()) ||
//   food.eateryName.toLowerCase().includes(searchFood.toLowerCase()) ||
//   food.locality.toLowerCase().includes(searchFood.toLowerCase()) ||
//   food.typeOfCuisine.toLowerCase().includes(searchFood.toLowerCase())
// );

// if(isLoading){
//   return <div>Loading...</div>
// }

// if(hasErrors){
//   return <div>Error: {errorMessage}</div>
// }


  return (
    <div>
      <h1>Welcome to Foodie Local Discovery</h1>
      <FoodForm onAddFood={addFood} />
      <FoodList FoodExperienceList = {foods} />
      
    </div>
  )
}

export default App
