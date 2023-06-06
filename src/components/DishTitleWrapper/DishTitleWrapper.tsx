import React from 'react';
import "./DishTitleWrapper.scss";
import DishTitle from "../DishTitle";
import SocialNetworks from "../SocialNetworks";

interface Props {
    title: string;
    flag: string;
}

const DishTitleWrapper: React.FC<Props> = (props) => {
    return (
        <div className="dishtitle-container">
            <DishTitle {...props}/>
            <SocialNetworks/>
        </div>
    )
}

export default DishTitleWrapper;
