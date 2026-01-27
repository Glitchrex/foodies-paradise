import { createContext, useContext, useState, useEffect, useCallback } from "react";
import type { FoodExperience } from "../types/food";
import { fetchFoodExperiences } from "../api/foodApi";

type FoodContextType = {
  FoodExperienceList: FoodExperience[];
  addFood: (food: FoodExperience) => void;
};

const FoodContext = createContext<FoodContextType | undefined>(undefined);

export function FoodProvider({ children }: { children: React.ReactNode }) {
  const [FoodExperienceList, setFoodExperienceList] = useState<FoodExperience[]>([]);

  useEffect(() => {
    fetchFoodExperiences().then(setFoodExperienceList);
  }, []);

  const addFood = useCallback((food: FoodExperience) => {
    setFoodExperienceList((prev) => [food, ...prev]);
  }, []);

  return (
    <FoodContext.Provider value={{ FoodExperienceList, addFood }}>
      {children}
    </FoodContext.Provider>
  );
}

export function useFood() {
  const context = useContext(FoodContext);
  if (!context) {
    throw new Error("useFood must be used within a FoodProvider");
  }
  return context;
}
