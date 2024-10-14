import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <body class="layout-fixed sidebar-expand-lg bg-body-tertiary">
            <div class="app-wrapper">
                <Header />
                <Sidebar />
                <main class="app-main">
                    <Outlet />
                </main>
                <Footer />
            </div>
        </body>
    );
};

export default Layout;
