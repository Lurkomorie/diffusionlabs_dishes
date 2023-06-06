import {Dish} from "../types";

export const dishesMockData: Dish[] = [
    {
        id: '1',
        name: 'Spanish Paella',
        flag: 'spain',
        difficulty: 'Medium',
        icon: 'paella',
        description: 'Spanish paella is a traditional rice dish that originated in the Valencia region of Spain. It was originally made with ingredients such as saffron, rabbit, and snails, which were common in the area.',
        properties: [
            {
                title: 'Seafood',
                values: [
                    { name: 'Jumbo Shrimp', type: 'default' },
                ]
            },
            {
                title: 'Produce',
                values: [
                    { name: 'Onion', type: 'green' },
                    { name: 'Tomatoes', type: 'red' },
                ]
            },
            {
                title: 'Spices',
                values: [
                    { name: 'Bay Leaf', type: 'green' },
                    { name: 'Saffron', type: 'orange' },
                ]
            },
            {
                title: 'Olive Oil',
                values: [
                    { name: 'Orange Olive Oil', type: 'orange' },
                ]
            },
            {
                title: 'Volume/Weight',
                values: [
                    { name: '700g', type: 'default' },
                ]
            },
            {
                title: 'Serves',
                values: [
                    { name: '4', type: 'default' },
                ]
            },
            {
                title: 'Authenticity',
                values: [
                    { name: 'Unverified', type: 'orange' },
                ]
            },
            {
                title: 'Stock',
                values: [
                    { name: 'Chicken', type: 'orange' },
                ]
            }
        ]
    },
    {
        id: '2',
        name: 'Japanese Ramen',
        flag: 'japan',
        difficulty: 'Hard',
        icon: 'ramen',
        description: 'Ramen is a popular noodle soup dish from Japan. It typically includes Chinese-style wheat noodles, a rich broth often flavoured with soy or miso, and various toppings such as sliced pork, green onions, and nori.',
        properties: [
            {
                title: 'Protein',
                values: [
                    { name: 'Pork Belly', type: 'red' },
                ]
            },
            {
                title: 'Produce',
                values: [
                    { name: 'Green Onion', type: 'green' },
                    { name: 'Garlic', type: 'default' },
                ]
            },
            {
                title: 'Spices',
                values: [
                    { name: 'Sesame Seeds', type: 'default' },
                ]
            },
            {
                title: 'Noodles',
                values: [
                    { name: 'Wheat Noodles', type: 'orange' },
                ]
            },
            {
                title: 'Volume/Weight',
                values: [
                    { name: '500g', type: 'default' },
                ]
            },
            {
                title: 'Serves',
                values: [
                    { name: '2', type: 'default' },
                ]
            },
            {
                title: 'Authenticity',
                values: [
                    { name: 'Verified', type: 'green' },
                ]
            },
            {
                title: 'Stock',
                values: [
                    { name: 'Pork', type: 'orange' },
                ]
            }
        ]
    },
    {
        id: '3',
        name: 'Rösti Valaisanne',
        flag: 'switzerland',
        difficulty: 'Easy',
        icon: 'pie',
        description: 'Rösti Valaisanne is a traditional Swiss dish. It is essentially a potato pancake made with coarsely grated potato, either cooked or raw, that are pan-fried, and typically topped with cheese and served with a side of pickles and onions.',
        properties: [
            {
                title: 'Produce',
                values: [
                    { name: 'Onion', type: 'default' },
                    { name: 'Pickles', type: 'green' },
                ]
            },
            {
                title: 'Dairy',
                values: [
                    { name: 'Swiss Cheese', type: 'orange' },
                ]
            },
            {
                title: 'Volume/Weight',
                values: [
                    { name: '800g', type: 'red' },
                ]
            },
            {
                title: 'Serves',
                values: [
                    { name: '4', type: 'default' },
                ]
            },
            {
                title: 'Authenticity',
                values: [
                    { name: 'Verified', type: 'green' },
                ]
            },
            {
                title: 'Cooking Method',
                values: [
                    { name: 'Pan-Fried', type: 'orange' },
                ]
            }
        ]
    }

]
