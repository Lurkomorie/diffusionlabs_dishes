import React from 'react';
import './DishProperty.scss';
import {Property} from "../../types";

const PropertyList: React.FC<Property> = ({ title, values }) => {
    return (
        <div className="property-list">
            <div className="title">{title}</div>
            <div className="values">
                {values.map((value, index) => (
                    <>
                        <span key={index} className={`value value--${value.type}`}>
                            {value.name}
                            {index < values.length - 1 && <span className="separator">&nbsp;/&nbsp;</span>}
                        </span>
                    </>
                ))}
            </div>
        </div>
    );
};

export default PropertyList;
