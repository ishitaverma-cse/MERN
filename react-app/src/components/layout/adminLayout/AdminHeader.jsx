import { Link } from "react-router-dom"

export default function AdminHeader() {
    return (
        <>
            {/* Navbar Start */}
            <nav className="navbar navbar-expand-lg bg-white navbar-light shadow sticky-top p-0">
                <Link
                    to={"/"}
                    className="navbar-brand d-flex align-items-center px-4 px-lg-5"
                >
                    <h2 className="m-0 text-primary">
                        <i className="fa fa-book me-3" />
                        Admin
                    </h2>
                </Link>
                <button
                    type="button"
                    className="navbar-toggler me-4"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarCollapse"
                >
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <div className="navbar-nav ms-auto p-4 p-lg-0">
                        <Link to={"/home"} className="nav-item nav-link active">
                            Dashboard
                        </Link>
                        <div className="nav-item dropdown">
                            <Link
                                to={"/pages"}
                                className="nav-link dropdown-toggle"
                                data-bs-toggle="dropdown"
                            >
                                Category
                            </Link>
                            <div className="dropdown-menu fade-down m-0">
                                <Link to={"/admin/AddCategory"} className="dropdown-item">
                                    Add Category
                                </Link>
                                <Link to={"/admin/AllCategory"} className="dropdown-item">
                                    All Category
                                </Link>
                                <Link to={"/404Page"} className="dropdown-item">
                                    404 Page
                                </Link>
                            </div>
                        </div>
                        <Link to={"/contact"} className="nav-item nav-link">
                            Contact
                        </Link>
                        <Link to={"/demo"} className="nav-item nav-link">
                            Demo
                        </Link>
                    </div>
                    <Link to={"/login1"} className="btn btn-primary py-4 px-lg-5 d-none d-lg-block">
                        Login
                        <i className="fa fa-arrow-right ms-3" />
                    </Link>
                </div>
            </nav>
            {/* Navbar End */}

        </>
    )
}