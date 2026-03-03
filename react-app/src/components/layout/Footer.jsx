import { Link } from "react-router-dom"

export default function Footer() {
    return (
        <>
            {/* Footer Start */}
            <div
                className="container-fluid bg-dark text-light footer pt-5 mt-5 wow fadeIn"
                data-wow-delay="0.1s"
            >
                <div className="container py-5">
                    <div className="row g-5">
                        <div className="col-lg-3 col-md-6">
                            <h4 className="text-white mb-3">Quick Link</h4>
                            <Link className="btn btn-link">
                                About Us
                            </Link>
                            <Link className="btn btn-link">
                                Contact Us
                            </Link>
                            <Link className="btn btn-link">
                                Privacy Policy
                            </Link>
                            <Link className="btn btn-link">
                                Terms &amp; Condition
                            </Link>
                            <Link className="btn btn-link">
                                FAQs &amp; Help
                            </Link>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <h4 className="text-white mb-3">Contact</h4>
                            <p className="mb-2">
                                <i className="fa fa-map-marker-alt me-3" />
                                123 Street, New York, USA
                            </p>
                            <p className="mb-2">
                                <i className="fa fa-phone-alt me-3" />
                                +012 345 67890
                            </p>
                            <p className="mb-2">
                                <i className="fa fa-envelope me-3" />
                                info@example.com
                            </p>
                            <div className="d-flex pt-2">
                                <Link className="btn btn-outline-light btn-social">
                                    <i className="fab fa-twitter" />
                                </Link>
                                <Link className="btn btn-outline-light btn-social">
                                    <i className="fab fa-facebook-f" />
                                </Link>
                                <Link className="btn btn-outline-light btn-social">
                                    <i className="fab fa-youtube" />
                                </Link>
                                <Link className="btn btn-outline-light btn-social">
                                    <i className="fab fa-linkedin-in" />
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <h4 className="text-white mb-3">Gallery</h4>
                            <div className="row g-2 pt-2">
                                <div className="col-4">
                                    <img
                                        className="img-fluid bg-light p-1"
                                        src="./assets/img/course-1.jpg"
                                        alt=""
                                    />
                                </div>
                                <div className="col-4">
                                    <img
                                        className="img-fluid bg-light p-1"
                                        src="./assets/img/course-2.jpg"
                                        alt=""
                                    />
                                </div>
                                <div className="col-4">
                                    <img
                                        className="img-fluid bg-light p-1"
                                        src="./assets/img/course-3.jpg"
                                        alt=""
                                    />
                                </div>
                                <div className="col-4">
                                    <img
                                        className="img-fluid bg-light p-1"
                                        src="./assets/img/course-2.jpg"
                                        alt=""
                                    />
                                </div>
                                <div className="col-4">
                                    <img
                                        className="img-fluid bg-light p-1"
                                        src="./assets/img/course-3.jpg"
                                        alt=""
                                    />
                                </div>
                                <div className="col-4">
                                    <img
                                        className="img-fluid bg-light p-1"
                                        src="./assets/img/course-1.jpg"
                                        alt=""
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <h4 className="text-white mb-3">Newsletter</h4>
                            <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
                            <div className="position-relative mx-auto" style={{ maxWidth: 400 }}>
                                <input
                                    className="form-control border-0 w-100 py-3 ps-4 pe-5"
                                    type="text"
                                    placeholder="Your email"
                                />
                                <button
                                    type="button"
                                    className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2"
                                >
                                    SignUp
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="copyright">
                        <div className="row">
                            <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                                ©{" "}
                                <Link className="border-bottom" to={"#"}>
                                    Your Site Name
                                </Link>
                                , All Right Reserved.
                                {/*/*** This template is free as long as you keep the footer author’s credit link/attribution link/backlink. If you'd like to use the template without the footer author’s credit link/attribution link/backlink, you can purchase the Credit Removal License from "https://htmlcodex.com/credit-removal". Thank you for your support. *** /*/}
                                Designed By{" "}
                                <Link className="border-bottom" to={"https://htmlcodex.com"}>
                                    HTML Codex
                                </Link>
                                <br />
                                <br />
                                Distributed By{" "}
                                <Link className="border-bottom" to={"https://themewagon.com"}>
                                    ThemeWagon
                                </Link>
                            </div>
                            <div className="col-md-6 text-center text-md-end">
                                <div className="footer-menu">
                                    <Link>Home</Link>
                                    <Link>Cookies</Link>
                                    <Link>Help</Link>
                                    <Link>FQAs</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Footer End */}
        </>

    )
}