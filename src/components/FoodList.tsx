import type { FoodExperience } from "../types/food";
import FoodCard from "./FoodCard";


type FoodListProps = {
    FoodExperienceList : FoodExperience[];
}

const FoodList = ({FoodExperienceList} : FoodListProps) => {
  return (
    FoodExperienceList.map((food) => <FoodCard key={food.id} sampleFood={food} />)
    
  );
}

export default FoodList