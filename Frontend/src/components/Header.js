import React from 'react'

const Header = () => {
    return (
        <>
            <header className="header_area bg-dark" style={{opacity: 0.5, zIndex: 999}} id="header">
                <div className="container-fluid h-100">
                    <div className="row h-100">
                        <div className="col-12 h-100">
                            <nav className="h-100 navbar navbar-expand-lg align-items-center">
                                <a className="navbar-brand" href="/">L.H.C.</a>
                                <button style={{border: 'none'}} className="navbar-toggler" type="button" data-toggle="collapse" data-target="#fancyNav" aria-controls="fancyNav" aria-expanded="false" aria-label="Toggle navigation"> 
                                <i className=" text-white fa fa-duotone fa-bars"></i>
                                </button>
                                <div className="collapse navbar-collapse" id="fancyNav">
                                    <ul className="navbar-nav ml-auto">
                                        <li className="nav-item">
                                            <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="services.php">Services</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="plots.php">Our Plots</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="about.php">About </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="team.php">Our Team</a>
                                        </li>
                                        
                                        <li className="nav-item">
                                            <a className="nav-link" href="gallery.php">Gallery</a>
                                        </li>
                                        <li className="nav-item dropdown">
                                            <a className="nav-link dropdown-toggle" href="#1" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Projects</a>
                                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                                <a className="dropdown-item" href="#2">Dar ES Salaam</a>
                                                <a className="dropdown-item" href="#3">Gratia Hills</a>
                                                <a className="dropdown-item" href="#4">Diaspora Dream Project</a>
                                            </div>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="contact.php">Contact</a>
                                        </li>
                                    </ul>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </header>
            <div className="fancy-breadcumb-area bg-img bg-overlay" style={{backgroundImage: 'url("/25.jpg")'}}>
                <div className="container h-100">
                    <div className="row h-100 align-items-center">
                        <div className="col-12">
                            <div className="breadcumb-content text-center">
                                <h2>Kwaso Plots</h2>
                                <p>Get in touch with us </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
   
    )
}

export default Header