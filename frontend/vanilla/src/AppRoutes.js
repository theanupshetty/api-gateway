import React from 'react';
import { Route, Routes } from 'react-router-dom';
import authRoutes from './routes/authRoutes';
import dashboardRoutes from './routes/dashboardRoutes';

function AppRoutes() {
    return (
        <Routes>
            {authRoutes.map((route, index) => (
                <Route key={index} path={route.path} element={route.element} />
            ))}
            {dashboardRoutes.map((route, index) => (
                <Route key={index} path={route.path} element={route.element}>
                    {route.children && route.children.map((childRoute, childIndex) => (
                        <Route
                            key={childIndex}
                            index={childRoute.index}
                            path={childRoute.path}
                            element={childRoute.element}
                        />
                    ))}
                </Route>
            ))}
        </Routes>
    );
}

export default AppRoutes;
