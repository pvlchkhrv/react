import React, { Suspense } from 'react';
import { AppRouter } from 'app/providers/router';
import { useTheme } from 'app/providers/ThemeProvider';
import { classNames } from 'helpers/classNames/classNames';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { useTranslation } from 'react-i18next';
import 'app/styles/index.scss';

function Component() {
    const { t, i18n } = useTranslation();

    const toggle = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };

    return (
        <>
            <button
                type="button"
                onClick={toggle}
            >
                {t('Перевод')}
            </button>
            <div>{t('Тестовый пример')}</div>
        </>
    );
}

export function App() {
    const { theme } = useTheme();

    return (
        <div className={classNames('app', [theme])}>
            <Suspense fallback={null}>
                <Navbar />
                <Component />
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
