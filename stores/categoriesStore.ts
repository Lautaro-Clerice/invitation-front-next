import { create } from "zustand";

interface CategoriesState {
  selectedCategories: string[];
  addCategory: (category: string) => void;
  removeCategory: (category: string) => void;
  resetCategories: () => void;
}

export const useCategoriesStore = create<CategoriesState>((set) => ({
  selectedCategories: [],

  addCategory: (category) =>
    set((state) => ({
      selectedCategories: state.selectedCategories.includes(category)
        ? state.selectedCategories
        : [...state.selectedCategories, category],
    })),
  removeCategory: (category) =>
    set((state) => ({
      selectedCategories: state.selectedCategories.filter(
        (c) => c !== category
      ),
    })),
  resetCategories: () => set({ selectedCategories: [] }),
}));
