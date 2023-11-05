export enum AppRoutes {
    MAIN = 'main',
    NEWS = 'news',
    PET = 'pet',
    USER = 'user',
    NOT_FOUND = 'not_found',
}

export const routeNames: { [key in AppRoutes]: string } = {
    [AppRoutes.MAIN]: "Главная",
    [AppRoutes.NEWS]: "Новости",
    [AppRoutes.PET]: "Питомцы",
    [AppRoutes.USER]: "Личный кабинет",
    [AppRoutes.NOT_FOUND]: "Страница не найдена",
}


export const getRouteMain = () => '/';
export const getRouteNews = () => '/news';
export const getRoutePet = () => '/pet';
// export const getRouteProfile = (id: string) => `/profile/${id}`;
export const getRouteUser = () => `/user`;

export const getRouteNotFound = () => '/*';
