import React from "react";
import "./DishDescription.scss";

interface Props {
    difficulty: string;
    icon: string;
    description: string;
}

const DishDescription: React.FC<Props> = ({ difficulty, description, icon }) => {
    return (
        <div className="description-wrapper">
            <div className="description-container">
                <div className="top">
                    <img className="icon" src={`/icons/food/${icon}.png`} alt="food"/>
                    <div className="title">Difficulty: {difficulty}</div>
                </div>
                <div className="description">
                    {description}
                </div>
                <button className="btn">
                    View Full Recipe
                </button>
            </div>
        </div>
    )
}

export default DishDescription;
