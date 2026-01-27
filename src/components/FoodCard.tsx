import type { FoodExperience } from "../types/food"

type FoodCardProps = {
    sampleFood : FoodExperience;
}


const FoodCard = ({ sampleFood }: FoodCardProps) => {
  return (
    <div className="food-card">
      <h2>{sampleFood.dishName}</h2>
      <p><strong>Eatery:</strong> {sampleFood.eateryName}</p>
      <p><strong>Location:</strong> {sampleFood.location}</p>
      <p><strong>Rating:</strong> {sampleFood.rating} / 5</p>
      <p><strong>Review:</strong> {sampleFood.review}</p>
      <p><strong>Locality:</strong> {sampleFood.locality}</p>
      <p><strong>Type of Cuisine:</strong> {sampleFood.typeOfCuisine}</p>
      <p><strong>Visit Date:</strong> {sampleFood.createdAt.toLocaleDateString()}</p>
    </div>      
  )
}

export default FoodCard