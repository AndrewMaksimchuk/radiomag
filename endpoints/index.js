export const HTTPget = {

    // PAGE
    home: '/',

    // API
    catalog: '/api/catalog',
    catalogGroups: (id) => `/api/catalog/${id}`,
    slider: '/api/slider',

    group: (id) => `/api/group/${id}`,
    groupName: (id) => `/api/groupName/${id}`,
    search: (name) => `/api/search/${name}`,

}
