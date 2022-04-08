export type ProductType = {
    id: number
    name: string
    price: number
    delivery: boolean
    img: string
};

export const items: ProductType[] = [
    {
        id: 1,
        name: 'Чизбургер',
        price: 144,
        delivery: true,
        img: '/images/Bitmap.png',
    },
    {
        id: 2,
        name: 'Гамбургер',
        price: 144,
        delivery: false,
        img: '/images/Bitmap.png',
    },
    {
        id: 3,
        name: 'Гамбургер',
        price: 122,
        delivery: true,
        img: '/images/Bitmap.png',
    },
    {
        id: 4,
        name: 'Гамбургер',
        price: 100,
        delivery: true,
        img: '/images/Bitmap.png',
    },
    {
        id: 5,
        name: 'Гамбургер',
        price: 100,
        delivery: false,
        img: '/images/Bitmap.png',
    },
    {
        id: 6,
        name: 'Гамбургер',
        price: 100,
        delivery: true,
        img: '/images/Bitmap.png',
    },
    {
        id: 7,
        name: 'Гамбургер',
        price: 100,
        delivery: false,
        img: '/images/Bitmap.png',
    },
    {
        id: 8,
        name: 'Твистер S',
        price: 120,
        delivery: true,
        img: '/images/twister.png',
    },
    {
        id: 9,
        name: 'Твистер L',
        price: 150,
        delivery: false,
        img: '/images/twister.png',
    },
    {
        id: 10,
        name: 'Стрипсы 2 шт',
        price: 80,
        delivery: true,
        img: '/images/chick.png',
    },
    {
        id: 11,
        name: 'Стрипсы 4 шт',
        price: 140,
        delivery: false,
        img: '/images/chick.png',
    },
];

export const categories = [
    {
        id: 1,
        name: 'Бургеры',
        products: [1, 2, 3, 4, 5, 6, 7],
    },
    {
        id: 2,
        name: 'Твистеры',
        products: [8, 9],
    },
    {
        id: 3,
        name: 'Курица',
        products: [10, 11],
    },
    {
        id: 4,
        name: 'Баскеты',
        products: [],
    },
    {
        id: 5,
        name: 'Снеки',
        products: [],
    },
    {
        id: 6,
        name: 'Соусы',
        products: [],
    },
    {
        id: 7,
        name: 'Напитки',
        products: [],
    },
];

export type TopicType = {
    name: string,
    subtopics: string[],
    order: number,
}

export const topics: TopicType[] = [
    {
        name: 'Раздел 1',
        subtopics: ['Подраздел', 'Подраздел', 'Подраздел', 'Подраздел', 'Подраздел', 'Подраздел'],
        order: 1,
    },
    {
        name: 'Раздел 2',
        subtopics: ['Подраздел', 'Подраздел', 'Подраздел', 'Подраздел', 'Подраздел', 'Подраздел'],
        order: 2,
    },
    {
        name: 'Раздел 3',
        subtopics: ['Подраздел', 'Подраздел', 'Подраздел', 'Подраздел', 'Подраздел', 'Подраздел'],
        order: 4,
    },
    {
        name: 'Раздел 4',
        subtopics: ['Подраздел', 'Подраздел', 'Подраздел', 'Подраздел', 'Подраздел', 'Подраздел'],
        order: 5,
    },
];
