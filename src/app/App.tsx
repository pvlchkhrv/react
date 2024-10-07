import React, { Suspense } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import { useTheme } from 'app/providers/ThemeProvider';
import { AboutPage, MainPage } from 'pages';
import { classNames } from 'helpers/classNames/classNames';
import 'app/styles/index.scss';

const App = () => {
    const {theme, toggleTheme} = useTheme();

    return (
        <div className={classNames('app', [theme])}>
            <button onClick={toggleTheme}>
                Toggle Theme
            </button>
            <Link to={'/'}>
                Main
            </Link>
            <Link to={'/about'}>
                About
            </Link>

            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path={'/about'} element={<AboutPage/>}/>
                    <Route path={'/'} element={<MainPage/>}/>
                </Routes>
            </Suspense>
        </div>
    );
};

export default App;
