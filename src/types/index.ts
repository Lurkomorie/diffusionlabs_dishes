export type PropertyType = 'default' | 'green' | 'orange' | 'red';

export type PropertyValue = {
    name: string;
    type: PropertyType;
}

export type Property = {
    title: string;
    values: PropertyValue[];
}

export interface Dish {
    id: string;
    name: string;
    flag: string;
    icon: string;
    difficulty: string;
    description: string;
    properties: Property[];
}

export interface SocialNetwork {
    link: string;
    icon: string;
}
