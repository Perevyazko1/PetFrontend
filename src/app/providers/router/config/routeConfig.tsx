import {MainPage} from "../../../../pages/MainPage";
import {NewsPage} from "../../../../pages/NewsPage";
import {PetPage} from "../../../../pages/PetPage";
import {UserPage} from "../../../../pages/UserPage";

import {
    AppRoutes,
    getRouteMain,
    getRouteNews,
    getRoutePet,
    getRouteUser,
    getRouteNotFound
} from "../../../../shared/consts/routes/routes";
import {AppRoutesProps} from "../../../../shared/types/router";
import {NotFoundPage} from "../../../../pages/NotFoundPage";

export const routeConfig:Record<AppRoutes, AppRoutesProps> = {
    [AppRoutes.MAIN]: {
        path: getRouteMain(),
        element: <MainPage />,
    },
        [AppRoutes.NEWS]: {
        path: getRouteNews(),
        element: <NewsPage />,
    },
        [AppRoutes.PET]: {
        path: getRoutePet(),
        element: <PetPage />,
    },
        [AppRoutes.USER]: {
        path: getRouteUser(),
        element: <UserPage />,
    },
            [AppRoutes.NOT_FOUND]: {
        path: getRouteNotFound(),
        element: <NotFoundPage />,
    },




};