import React from 'react'

const Header = () => {
    return (
        <>
            <header class="header_area bg-dark" style={{opacity: 0.5}} id="header">
                <div class="container-fluid h-100">
                    <div class="row h-100">
                        <div class="col-12 h-100">
                            <nav class="h-100 navbar navbar-expand-lg align-items-center">
                                <a class="navbar-brand" href="/">L.H.C.</a>
                                <button style={{border: 'none'}} class="navbar-toggler" type="button" data-toggle="collapse" data-target="#fancyNav" aria-controls="fancyNav" aria-expanded="false" aria-label="Toggle navigation"> 
                                <i class=" text-white fa fa-duotone fa-bars"></i>
                                </button>
                                <div class="collapse navbar-collapse" id="fancyNav">
                                    <ul class="navbar-nav ml-auto">
                                        <li class="nav-item">
                                            <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="services.php">Services</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="plots.php">Our Plots</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="about.php">About </a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="team.php">Our Team</a>
                                        </li>
                                        
                                        <li class="nav-item">
                                            <a class="nav-link" href="gallery.php">Gallery</a>
                                        </li>
                                        <li class="nav-item dropdown">
                                            <a class="nav-link dropdown-toggle" href="#1" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Projects</a>
                                            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                                <a class="dropdown-item" href="#2">Dar ES Salaam</a>
                                                <a class="dropdown-item" href="#3">Gratia Hills</a>
                                                <a class="dropdown-item" href="#4">Diaspora Dream Project</a>
                                            </div>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="contact.php">Contact</a>
                                        </li>
                                    </ul>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </header>
            <div class="fancy-breadcumb-area bg-img bg-overlay" style={{backgroundImage: 'url("/25.jpg")'}}>
                <div class="container h-100">
                    <div class="row h-100 align-items-center">
                        <div class="col-12">
                            <div class="breadcumb-content text-center">
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