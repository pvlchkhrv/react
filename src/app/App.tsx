import React, { Suspense, useEffect } from 'react';
import { AppRouter } from 'app/providers/router';
import { useTheme } from 'app/providers/ThemeProvider';
import { classNames } from 'helpers/classNames/classNames';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import 'app/styles/index.scss';

export function App() {
    const { theme } = useTheme();

    return (
        <div className={classNames('app', [theme])}>
            <Suspense fallback={null}>
                <Navbar />
                <main className="main-content">
                    <Sidebar />
                    <div className="page-wrapper">
                        <AppRouter />
                    </div>
                </main>
            </Suspense>
        </div>
    );
}
