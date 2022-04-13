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
