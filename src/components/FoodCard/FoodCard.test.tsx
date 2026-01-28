import { render, screen } from "@testing-library/react";
import FoodCard from "./FoodCard";
import type { FoodExperience } from "../../types/food";

const mockFood: FoodExperience = {
    id: "1",
    dishName: "Masala Dosa",
    eateryName: "Vidyarthi Bhavan",
    locality: "Basavanagudi",
    review: "Crispy and tasty",
    dietaryPreference: "Veg",
    createdAt: new Date(),
    dishPicture: "",
    location: "Bengaluru",
    rating: 0
};

test("renders food details correctly", () => {
  render(<FoodCard sampleFood={mockFood} />);

  expect(screen.getByText("Masala Dosa")).toBeInTheDocument();
  expect(screen.getByText(/Vidyarthi Bhavan/)).toBeInTheDocument();
  expect(screen.getByText(/Basavanagudi/)).toBeInTheDocument();
});
