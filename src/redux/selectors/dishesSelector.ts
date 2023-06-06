import {RootState} from "../store";
import {createSelector} from "@reduxjs/toolkit";

const selectDishes = (state: RootState) => state.dishes;

export const dishesListSelector = createSelector(selectDishes, (dishes) => dishes.dishesList)
export const currentDishIdSelector = createSelector(selectDishes, (dishes) => dishes.currentDishId)
