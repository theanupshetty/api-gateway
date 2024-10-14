import React from 'react';

const Sidebar = () => {
    return (
        <aside className="app-sidebar bg-body-secondary shadow" data-bs-theme="dark">
            {/* begin::Sidebar Brand */}
            <div className="sidebar-brand">
                {/* begin::Brand Link */}
                <a href="../index.html" className="brand-link">
                    {/* begin::Brand Image */}
                
                    {/* end::Brand Image */}
                    {/* begin::Brand Text */}
                    <span className="brand-text fw-light">AdminLTE 4</span>
                    {/* end::Brand Text */}
                </a>
                {/* end::Brand Link */}
            </div>
            {/* end::Sidebar Brand */}
            
            {/* begin::Sidebar Wrapper */}
            <div className="sidebar-wrapper">
                <nav className="mt-2">
                    {/* begin::Sidebar Menu */}
                    <ul className="nav sidebar-menu flex-column" data-lte-toggle="treeview" role="menu" data-accordion="false">
                        <li className="nav-item">
                            <a href="#" className="nav-link">
                                <i className="nav-icon bi bi-speedometer"></i>
                                <p>
                                    Dashboard
                                    <i className="nav-arrow bi bi-chevron-right"></i>
                                </p>
                            </a>
                            <ul className="nav nav-treeview">
                                <li className="nav-item">
                                    <a href="../index.html" className="nav-link">
                                        <i className="nav-icon bi bi-circle"></i>
                                        <p>Dashboard v1</p>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="../index2.html" className="nav-link">
                                        <i className="nav-icon bi bi-circle"></i>
                                        <p>Dashboard v2</p>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="../index3.html" className="nav-link">
                                        <i className="nav-icon bi bi-circle"></i>
                                        <p>Dashboard v3</p>
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                    {/* end::Sidebar Menu */}
                </nav>
            </div>
            {/* end::Sidebar Wrapper */}
        </aside>
    );
};

export default Sidebar;
