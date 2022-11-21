import React from 'react'

const TopBar = () => {
    return (
        <div className="row">
            <div className="col-lg-12 p-0">
                <div className="header_iner d-flex justify-content-between align-items-center">
                    <div className="sidebar_icon d-lg-none">
                        <i className="ti-menu"></i>
                    </div>
                    <div className="serach_field-area d-flex align-items-center">
                        <div className="search_inner">
                            <form action="#2">
                                <div className="search_field">
                                    <input type="text" placeholder="Search here..." />
                                </div>
                                <button type="submit"> <img src="img/icon/icon_search.svg" alt="" /> </button>
                            </form>
                        </div>
                        <span className="f_s_14 f_w_400 ml_25 white_text text_white">Apps</span>
                    </div>
                    <div className="header_right d-flex justify-content-between align-items-center">
                        <div className="profile_info">
                            <img src="img/client_img.png" alt="#2" />
                            <div className="profile_info_iner">
                                <div className="profile_author_name">
                                    <p>Neurologist </p>
                                    <h5>Dr. Robar Smith</h5>
                                </div>
                                <div className="profile_info_details shadow-sm">
                                    <a href="#2">My Profile </a>
                                    <a href="#2">Settings</a>
                                    <a href="#2">Log Out </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopBar