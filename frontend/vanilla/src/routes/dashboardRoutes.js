import React from 'react';
import Layout from '../components/layout/Layout';
import Dashboard from '../components/dashboard/Dashboard'; 

const dashboardRoutes = [
    {
        path: '/',
        element: <Layout />,
        children: [
            { index: true, element: <Dashboard /> },
        ],
    },
];

export default dashboardRoutes;
