import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routerConfig } from 'app/providers/router/routerConfig';
import { PageLoader } from 'widgets/PageLoader';

export const AppRouter = () => (
    <Suspense fallback={<PageLoader />}>
        <Routes>
            {
                Object.values(routerConfig).map(({ path, element }) => (
                    <Route
                        key={path}
                        path={path}
                        element={element}
                    />
                ))
            }
        </Routes>
    </Suspense>
);
