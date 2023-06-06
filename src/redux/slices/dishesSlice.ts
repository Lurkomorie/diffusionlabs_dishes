import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {Dish} from "../../types";

interface StateType {
    dishesList: Dish[];
    currentDishId: string;
}

const initialState: StateType = {
    dishesList: [],
    currentDishId: '',
};

const dishesSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        setCurrentDishId: (state, action: PayloadAction<string>) => {
            state.currentDishId = action.payload;
        },
        setDishesList: (state, action: PayloadAction<Dish[]>) => {
            state.dishesList = action.payload;
        },
    },
})

export const { setCurrentDishId, setDishesList } = dishesSlice.actions
export default dishesSlice.reducer
