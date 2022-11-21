import React from 'react'

const Hero = () => {
    return (
        <div class="hero-wrap ftco-degree-bg" style={{backgroundImage: 'url("images/bg_1.jpg")'}} data-stellar-background-ratio="0.5">
            <div class="overlay"></div>
            <div class="container">
                <div class="row no-gutters slider-text justify-content-center align-items-center">
                    <div class="col-lg-8 col-md-6 ftco-animate d-flex align-items-end">
                        <div class="text text-center">
                        <h1 class="mb-4">The Simplest <br />Way to Find Property</h1>
                        <p style={{fontSize: '18px'}}>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts</p>
                        <form action="#" class="search-location mt-md-5">
                                <div class="row justify-content-center">
                                    <div class="col-lg-10 align-items-end">
                                        <div class="form-group">
                                            <div class="form-field">
                                        <input type="text" class="form-control" placeholder="Search location" />
                                        <button><span class="ion-ios-search"></span></button>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                            </form>
                    </div>
                    </div>
                </div>
            </div>
            <div class="mouse">
                <a href="#1" class="mouse-icon">
                    <div class="mouse-wheel"><span class="ion-ios-arrow-round-down"></span></div>
                </a>
            </div>
        </div>
    )
}

export default Hero