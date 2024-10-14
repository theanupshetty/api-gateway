import React from 'react';

const Dashboard = () => {
    return (
        <>
            <div className="app-content-header"> {/* begin::Container */}
                <div className="container-fluid"> {/* begin::Row */}
                    <div className="row">
                        <div className="col-sm-6">
                            <h3 className="mb-0">Dashboard v3</h3>
                        </div>
                        <div className="col-sm-6">
                            <ol className="breadcrumb float-sm-end">
                                <li className="breadcrumb-item"><a href="#">Home</a></li>
                                <li className="breadcrumb-item active" aria-current="page">
                                    Dashboard v3
                                </li>
                            </ol>
                        </div>
                    </div> {/* end::Row */}
                </div> {/* end::Container */}
            </div>
            <div className="app-content"> {/* begin::Container */}
                <div className="container-fluid"> {/* begin::Row */}
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="card mb-4">
                                <div className="card-header border-0">
                                    <div className="d-flex justify-content-between">
                                        <h3 className="card-title">Online Store Visitors</h3>
                                        <a href="javascript:void(0);" className="link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">View Report</a>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <div className="d-flex">
                                        <p className="d-flex flex-column">
                                            <span className="fw-bold fs-5">820</span>
                                            <span>Visitors Over Time</span>
                                        </p>
                                        <p className="ms-auto d-flex flex-column text-end">
                                            <span className="text-success">
                                                <i className="bi bi-arrow-up"></i> 12.5%
                                            </span>
                                            <span className="text-secondary">Since last week</span>
                                        </p>
                                    </div> {/* /.d-flex */}
                                    <div className="position-relative mb-4">
                                        <div id="visitors-chart"></div>
                                    </div>
                                    <div className="d-flex flex-row justify-content-end">
                                        <span className="me-2">
                                            <i className="bi bi-square-fill text-primary"></i> This Week
                                        </span>
                                        <span>
                                            <i className="bi bi-square-fill text-secondary"></i> Last Week
                                        </span>
                                    </div>
                                </div>
                            </div> {/* /.card */}

                            <div className="card mb-4">
                                <div className="card-header border-0">
                                    <h3 className="card-title">Products</h3>
                                    <div className="card-tools">
                                        <a href="#" className="btn btn-tool btn-sm">
                                            <i className="bi bi-download"></i>
                                        </a>
                                        <a href="#" className="btn btn-tool btn-sm">
                                            <i className="bi bi-list"></i>
                                        </a>
                                    </div>
                                </div>
                                <div className="card-body table-responsive p-0">
                                    <table className="table table-striped align-middle">
                                        <thead>
                                            <tr>
                                                <th>Product</th>
                                                <th>Price</th>
                                                <th>Sales</th>
                                                <th>More</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <img src="../../dist/assets/img/default-150x150.png" alt="Product 1" className="rounded-circle img-size-32 me-2" />
                                                    Some Product
                                                </td>
                                                <td>$13 USD</td>
                                                <td>
                                                    <small className="text-success me-1">
                                                        <i className="bi bi-arrow-up"></i> 12%
                                                    </small>
                                                    12,000 Sold
                                                </td>
                                                <td>
                                                    <a href="#" className="text-secondary">
                                                        <i className="bi bi-search"></i>
                                                    </a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <img src="../../dist/assets/img/default-150x150.png" alt="Product 2" className="rounded-circle img-size-32 me-2" />
                                                    Another Product
                                                </td>
                                                <td>$29 USD</td>
                                                <td>
                                                    <small className="text-info me-1">
                                                        <i className="bi bi-arrow-down"></i> 0.5%
                                                    </small>
                                                    123,234 Sold
                                                </td>
                                                <td>
                                                    <a href="#" className="text-secondary">
                                                        <i className="bi bi-search"></i>
                                                    </a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <img src="../../dist/assets/img/default-150x150.png" alt="Product 3" className="rounded-circle img-size-32 me-2" />
                                                    Amazing Product
                                                </td>
                                                <td>$1,230 USD</td>
                                                <td>
                                                    <small className="text-danger me-1">
                                                        <i className="bi bi-arrow-down"></i> 3%
                                                    </small>
                                                    198 Sold
                                                </td>
                                                <td>
                                                    <a href="#" className="text-secondary">
                                                        <i className="bi bi-search"></i>
                                                    </a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <img src="../../dist/assets/img/default-150x150.png" alt="Product 4" className="rounded-circle img-size-32 me-2" />
                                                    Perfect Item
                                                    <span className="badge text-bg-danger">NEW</span>
                                                </td>
                                                <td>$199 USD</td>
                                                <td>
                                                    <small className="text-success me-1">
                                                        <i className="bi bi-arrow-up"></i> 63%
                                                    </small>
                                                    87 Sold
                                                </td>
                                                <td>
                                                    <a href="#" className="text-secondary">
                                                        <i className="bi bi-search"></i>
                                                    </a>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div> {/* /.card */}
                        </div> {/* /.col-md-6 */}

                        <div className="col-lg-6">
                            <div className="card mb-4">
                                <div className="card-header border-0">
                                    <div className="d-flex justify-content-between">
                                        <h3 className="card-title">Sales</h3>
                                        <a href="javascript:void(0);" className="link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">View Report</a>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <div className="d-flex">
                                        <p className="d-flex flex-column">
                                            <span className="fw-bold fs-5">$18,230.00</span>
                                            <span>Sales Over Time</span>
                                        </p>
                                        <p className="ms-auto d-flex flex-column text-end">
                                            <span className="text-success">
                                                <i className="bi bi-arrow-up"></i> 33.1%
                                            </span>
                                            <span className="text-secondary">Since Past Year</span>
                                        </p>
                                    </div> {/* /.d-flex */}
                                    <div className="position-relative mb-4">
                                        <div id="sales-chart"></div>
                                    </div>
                                    <div className="d-flex flex-row justify-content-end">
                                        <span className="me-2">
                                            <i className="bi bi-square-fill text-primary"></i> This year
                                        </span>
                                        <span>
                                            <i className="bi bi-square-fill text-secondary"></i> Last year
                                        </span>
                                    </div>
                                </div>
                            </div> {/* /.card */}

                            <div className="card">
                                <div className="card-header border-0">
                                    <h3 className="card-title">Online Store Overview</h3>
                                    <div className="card-tools">
                                        <a href="#" className="btn btn-sm btn-tool">
                                            <i className="bi bi-download"></i>
                                        </a>
                                        <a href="#" className="btn btn-sm btn-tool">
                                            <i className="bi bi-list"></i>
                                        </a>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <div className="d-flex justify-content-between flex-wrap">
                                        <div className="d-flex flex-column">
                                            <span className="fw-bold fs-5">1,240</span>
                                            <span className="text-muted">Products</span>
                                        </div>
                                        <div className="d-flex flex-column">
                                            <span className="fw-bold fs-5">15,000</span>
                                            <span className="text-muted">Sales</span>
                                        </div>
                                        <div className="d-flex flex-column">
                                            <span className="fw-bold fs-5">800</span>
                                            <span className="text-muted">Active Users</span>
                                        </div>
                                        <div className="d-flex flex-column">
                                            <span className="fw-bold fs-5">1,200</span>
                                            <span className="text-muted">Orders</span>
                                        </div>
                                    </div>
                                </div>
                            </div> {/* /.card */}
                        </div> {/* /.col-md-6 */}
                    </div> {/* end::Row */}
                </div> {/* end::Container */}
            </div> {/* end::Container */}
        </>
    );
};
export default Dashboard;