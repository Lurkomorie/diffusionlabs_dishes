import React, { memo } from 'react';
import './DishPropertyList.scss';
import DishProperty from '../DishProperty';
import { Property } from "../../types";

interface Props {
    data: Property[];
}

const PropertyListContainer: React.FC<Props> = ({ data }) => {
    return (
        <div className="property-list-container">
            {data.map((item, index) => (
                <DishProperty key={index} title={item.title} values={item.values} />
            ))}
        </div>
    );
};

export default memo(PropertyListContainer);
