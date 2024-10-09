import { RouteProps } from 'react-router-dom';
import { AboutPage, MainPage } from 'pages';

export enum AppRoutes {
    About = 'About',
    Main = 'Main',
}

export const RouterPath: Record<AppRoutes, string> = {
    [AppRoutes.About]: '/about',
    [AppRoutes.Main]: '/',
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
];
