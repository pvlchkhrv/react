import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routerConfig } from 'app/providers/router/routerConfig';

export const AppRouter = () => (
    <Suspense fallback={<div>Loading...</div>}>
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
