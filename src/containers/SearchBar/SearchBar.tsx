import React, { useState, useEffect } from 'react';
import './SearchBar.scss';
import {Dish} from "../../types";
import {AppDispatch} from "../../redux/store";
import {useDispatch} from "react-redux";
import {setCurrentDishId} from "../../redux/slices/dishesSlice";

interface Props {
    data: Dish[];
}

const SearchBar: React.FC<Props> = ({ data }) => {
    const dispatch: AppDispatch = useDispatch();
    const [isDropdownVisible, setDropdownVisibility] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredData, setFilteredData] = useState<Dish[]>(data);

    useEffect(() => {
        setFilteredData(data.filter(item => item.name.toLowerCase().includes(searchQuery.toLowerCase())));
    }, [searchQuery, data]);

    const clearInput = () => {
        setSearchQuery('')
    }

    const handleFocus = () => setDropdownVisibility(true);
    const handleBlur = (e: any) => {
        e.stopPropagation()
        setDropdownVisibility(false)
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value)
    }

    const handleDropdownMouseDown = (e: React.MouseEvent) => {
        e.preventDefault();
    }

    const handleItemClick = (item: Dish) => () => {
        clearInput();
        dispatch(setCurrentDishId(item.id))
        setDropdownVisibility(false);
    }

    const showDropdown = isDropdownVisible && !!filteredData.length;

    return (
        <div className="search-bar">
            <img src="/icons/searchIcon.svg" alt="search icon" className="search-icon" />
            <input
                type="text"
                placeholder="Search cousine"
                value={searchQuery}
                onClick={handleFocus}
                onBlur={handleBlur}
                onChange={handleChange}
            />
            {searchQuery && <img src="/icons/closeIcon.svg" alt="clear icon" className="clear-icon" onClick={clearInput} />}
            {showDropdown && (
                <div className="dropdown" onMouseDown={handleDropdownMouseDown}>
                    {filteredData.map((item, index) => (
                        <div key={index} className="dropdown-item" onClick={handleItemClick(item)}>{item.name}</div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default SearchBar;
