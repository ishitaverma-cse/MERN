import './Website.css'

export default function Website() {
    return (
        <>
            <nav className="navbar fixed-top navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid p-2 ms-4">
                    <a className="navbar-brand" href="#" style={{ fontSize: "30px", color: "black", fontFamily: "-moz-initial", fontWeight: "bold" }}>Marian</a>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0 menu">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">About</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Service</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Blog</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Pages</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Contact</a>
                            </li>
                            <button className= "border border-white rounded-2 px-4 py-2 bg-warning text-white">Book Online</button>
                        </ul>
                    </div>
                </div>
            </nav>

            <div className="container-fluid image-div">
                <div className="container text-center">
                    <h1 className="header fw-bold text-white">TOP HOTEL IN THE CITY</h1>
                    <p className="lead text-white">Hotel & Resort</p>
                </div>
            </div>

            <div className="text-center text-dark">
                <h1 className=" header2 p-5">Our Rooms</h1>

                <div className="row row-cols-1 row-cols-md-3 g-4 mx-5 mb-5">
                    <div className="col">
                        <div className="card h-100">
                            <img src="https://media.onthemarket.com/properties/17643718/1560334715/image-5-1024x1024.jpg"
                                className="card-img-top" alt="..." />
                            <div className="card-body text-start">
                                <h5 className="card-title">Classic Double Bed</h5>
                                <p className="card-text">
                                    <b>$150</b> /per night
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="card h-100">
                            <img src="https://www.mistay.in/travel-blog/content/images/2025/03/pexels-pixabay-271624-1.jpg"
                                className="card-img-top" alt="..." />
                            <div className="card-body text-start">
                                <h5 className="card-title">Classic Double Bed</h5>
                                <p className="card-text">
                                    <b>$150</b> /per night
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="card h-100">
                            <img src="https://cdn.pixabay.com/photo/2023/12/19/14/36/bedroom-8457824_1280.jpg"
                                className="card-img-top" alt="..." />
                            <div className="card-body text-start">
                                <h5 className="card-title">Classic Double Bed</h5>
                                <p className="card-text">
                                    <b>$150</b> /per night
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="card h-100">
                            <img src="https://media.vrbo.com/lodging/107000000/106320000/106318100/106318035/d7df9426.jpg?impolicy=resizecrop&rw=575&rh=575&ra=fill"
                                className="card-img-top" alt="..." />
                            <div className="card-body text-start">
                                <h5 className="card-title">Classic Double Bed</h5>
                                <p className="card-text">
                                    <b>$150</b> /per night
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="card h-100">
                            <img src="https://www.architectandinteriorsindia.com/cloud/2021/12/13/Bedroom-Four-by-Chalk-Studio-1024x682.jpg"
                                className="card-img-top" alt="..." />
                            <div className="card-body text-start">
                                <h5 className="card-title">Classic Double Bed</h5>
                                <p className="card-text">
                                    <b>$150</b> /per night
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="card h-100">
                            <img src="https://plastzone.in/wp-content/uploads/2024/06/pexels-photo-2747901-2747901-1.jpg"
                                className="card-img-top" alt="..." />
                            <div className="card-body text-start">
                                <h5 className="card-title">Classic Double Bed</h5>
                                <p className="card-text">
                                    <b>$150</b> /per night
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>


            <nav className="navbar bg-body-tertiary" data-bs-theme="dark">
                <div className="container-fluid m-5">
                    <div>
                        <h2 className="footer-1 pt-5">Marian</h2>
                        <div className="d-flex">
                            <i className="fa-brands fa-facebook-f text-secondary bg-white py-2 px-3 d-flex justify-content-center my-4"></i>
                            <i className="fa-brands fa-twitter text-secondary bg-white py-2 px-3 d-flex justify-content-center mx-2 my-4"></i>
                            <i className="fa-brands fa-instagram text-secondary bg-white py-2 px-3 d-flex justify-content-center my-4"></i>
                        </div>

                        <p className="text-muted">Copyright ©2026 All rights <br />
                            reserved | This template is <br />
                            made with 🩶 by <a href="#" className="text-decoration-none">Colorlib</a>
                        </p>
                    </div>

                    <div>
                        <h3 className="text-white">Quick Links</h3>
                        <div className="d-flex flex-column">
                            <a href="#" className="text-decoration-none text-muted m-1">About Mariana</a>
                            <a href="#" className="text-decoration-none text-muted m-1">Our Best Rooms</a>
                            <a href="#" className="text-decoration-none text-muted m-1">Our Photo Gallery</a>
                            <a href="#" className="text-decoration-none text-muted m-1">Pool Service</a>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-white">Reservations</h3>
                        <div className="d-flex flex-column">
                            <p className="text-muted">Tel: 345 5667 889</p>
                            <p className="text-muted">Skype: Marianabooking</p>
                            <p><a href="#" className="text-decoration-none text-muted">reservations@hotelriver.com</a></p>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-white">Our Location</h3>
                        <p className="text-muted">198 West 21st Street,</p>
                        <p className="text-muted">Suite 721 New York NY 100165</p>
                        <input type="text" className="bg-white p-2 mt-2" placeholder="Email Address" />
                    </div>
                </div>
            </nav>
        </>
    )
}