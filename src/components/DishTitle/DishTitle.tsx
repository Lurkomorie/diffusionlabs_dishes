import React from 'react'
import "./DishTitle.scss";

interface Props {
    title: string;
    flag: string;
}

const DishTitle: React.FC<Props> = ({ title, flag }) => {
    return (
        <div className="title-container">
            <img src={`/icons/flags/${flag}.png`} className="flag" alt="flag"/>
            <div className="title">
                {title}
            </div>
        </div>
    )
}

export default DishTitle;
