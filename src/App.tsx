import React, {useEffect} from 'react';
import './App.scss';
import DishPropertyList from "./components/DishPropertyList";
import SearchBar from "./containers/SearchBar";
import {dishesMockData} from "./api/mockData";
import DishTitleWrapper from "./components/DishTitleWrapper";
import DishDescription from "./components/DishDescription";
import {useDispatch, useSelector} from "react-redux";
import {getDishes} from "./api";
import {currentDishIdSelector, dishesListSelector} from "./redux/selectors/dishesSelector";
import {AppDispatch} from "./redux/store";

const App: React.FC = () => {
    const dispatch: AppDispatch = useDispatch();
    const currentDishesList = useSelector(dishesListSelector)
    const currentDishId = useSelector(currentDishIdSelector)

    useEffect(() => {
        init();
    }, [])

    const init = () => {
        dispatch(getDishes());
    }

    const selectedDish = React.useMemo(() => {
        return currentDishesList?.find((item) => item.id === currentDishId);
    }, [currentDishId, currentDishesList])

    if (!selectedDish) return null; // in perfect situation here should be skeleton for loading

  return (
    <div className="container">
        <SearchBar data={dishesMockData}/>
        <DishTitleWrapper title={selectedDish.name} flag={selectedDish.flag}/>
        <DishDescription difficulty={selectedDish.difficulty} icon={selectedDish.icon} description={selectedDish.description}/>
        <DishPropertyList data={selectedDish.properties}/>
    </div>
  );
}

export default App;
