import { RouteProps } from 'react-router-dom';
import { AboutPage, MainPage } from 'pages';
import { NotFoundPage } from 'pages/NotFoundPage';

export enum AppRoutes {
    About = 'About',
    Main = 'Main',
    NotFound = 'NotFound',
}

export const RouterPath: Record<AppRoutes, string> = {
    [AppRoutes.About]: '/about',
    [AppRoutes.Main]: '/',
    [AppRoutes.NotFound]: '*',
};

export const routerConfig: RouteProps[] = [
    {
        path: RouterPath.About,
        element: <AboutPage />,
    },
    {
        path: RouterPath.Main,
        element: <MainPage />,
    },
    {
        path: RouterPath.NotFound,
        element: <NotFoundPage />,
    },
];
