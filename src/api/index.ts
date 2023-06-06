import {dishesMockData} from "./mockData";
import {setCurrentDishId, setDishesList} from "../redux/slices/dishesSlice";
import {AppDispatch} from "../redux/store";

export const getDishes = () => (dispatch: AppDispatch) => {
    const response = dishesMockData;
    dispatch(setDishesList(response));
    dispatch(setCurrentDishId(response[0].id));
}
