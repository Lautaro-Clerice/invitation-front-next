import { Category } from "@/utils/types";
import { create } from "zustand";

interface CategoriesState {
  selectedCategories: Category[];
  addCategory: (category: Category) => void;
  removeCategory: (categoryKey: string) => void;
  resetCategories: () => void;
}
export const useCategoriesStore = create<CategoriesState>((set) => ({
  selectedCategories: [],

  addCategory: (category) =>
    set((state) => ({
      selectedCategories: state.selectedCategories.some(
        (c) => c.key === category.key
      )
        ? state.selectedCategories
        : [...state.selectedCategories, category],
    })),

  removeCategory: (categoryKey) =>
    set((state) => ({
      selectedCategories: state.selectedCategories.filter(
        (c) => c.key !== categoryKey
      ),
    })),

  resetCategories: () => set({ selectedCategories: [] }),
}));
