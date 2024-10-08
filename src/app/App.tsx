import React from 'react';
import { AppRouter } from 'app/providers/router';
import { useTheme } from 'app/providers/ThemeProvider';
import { classNames } from 'helpers/classNames/classNames';
import { Navbar } from 'widgets/Navbar';
import 'app/styles/index.scss';

const App = () => {
    const {theme, toggleTheme} = useTheme();

    return (
        <div className={classNames('app', [theme])}>
            <Navbar/>
            <AppRouter/>
            <button onClick={toggleTheme}>
                Toggle Theme
            </button>
        </div>
    );
};

export default App;
