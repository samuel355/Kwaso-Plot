import React from 'react'

const Footer = () => {
  return (
    <footer className="fancy-footer-area fancy-bg-dark">
        <div className="footer-content section-padding-80-50">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-sm-6 col-lg-4">
                        <div className="single-footer-widget">
                            <h6>Our Newsletter</h6>
                            <p>Subscribe to our mailing list to get the updates to your email inbox.</p>
                            <form action="#" method="get">
                                <input type="search" name="search" id="footer-search" placeholder="E-mail" />
                                <button type="submit">Subscribe</button>
                            </form>
                            <div className="footer-social-widegt d-flex align-items-center">
                                <a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a>
                                <a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a>
                                <a href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-lg-4">
                        <div className="single-footer-widget">
                            <h6>Quick Links</h6>
                            <nav>
                                <ul>
                                    <li><a href="index.php"><i className="fa fa-angle-double-right" aria-hidden="true"></i> Home</a></li>
                                    <li><a href="services.php"><i className="fa fa-angle-double-right" aria-hidden="true"></i> Services</a></li>
                                    <li><a href="about.php"><i className="fa fa-angle-double-right" aria-hidden="true"></i> About</a></li>
                                    <li><a href="#"><i className="fa fa-angle-double-right" aria-hidden="true"></i> FAQs</a></li>
                                    <li><a href="contact.php"><i className="fa fa-angle-double-right" aria-hidden="true"></i> Contact</a></li>
                                    <li><a href="#"><i className="fa fa-angle-double-right" aria-hidden="true"></i> Terms</a></li>
                                    <li><a href="#"><i className="fa fa-angle-double-right" aria-hidden="true"></i> Privacy</a></li>
                                    <li><a href="#"><i className="fa fa-angle-double-right" aria-hidden="true"></i> Blog</a></li>
                                    <li><a href="#"><i className="fa fa-angle-double-right" aria-hidden="true"></i> Testimonials</a></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-lg-4">
                        <div className="single-footer-widget">
                            <h6>Contact Us</h6>
                            <p>+233 (0) 20 073 7032  <br />info@landandhomesconsult.com</p>
                            <p>2nd Street, Dichemso - Kumasi <br /> Ashanti Region. Ghana</p>
                            <p>Open hours: 9.00am - 4.00pm Mon. - Fri.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer