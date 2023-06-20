export const routes = {
    "/": "Главная",
    "/news": "Новости",
    "/pet": "Страница животного",
    "/user": "Личный кабинет",
}

export enum AppRoutes {
    MAIN = 'main',
    NEWS = 'news',
    PET = 'pet',
    USER = 'user',
    NOT_FOUND = 'not_found',
}

export const getRouteMain = () => '/';
export const getRouteNews = () => '/news';
export const getRoutePet = () => '/pet';
// export const getRouteProfile = (id: string) => `/profile/${id}`;
export const getRouteUser = () => `/user`;

export const getRouteNotFound = () => '/*';
