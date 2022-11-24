export const HTTPget = {

    // PAGE
    home: '/',

    // API
    catalog: '/api/catalog',
    catalogGroups: (id: number | string) => `/api/catalog/${id}`,
    slider: '/api/slider',

    group: (id: number | string) => `/api/group/${id}`,
    groupName: (id: number | string) => `/api/groupName/${id}`,
    search: (name: string) => `/api/search/${name}`,

}
