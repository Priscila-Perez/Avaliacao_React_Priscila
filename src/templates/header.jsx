import React from 'react'

export default props => (
            <div class="header sticky-header">


                <div class="menu-right">
                    <div class="navbar user-panel-top">
                        <div class="search-box">
                            <form action="#search-results.html" method="get">
                                <input class="search-input" placeholder="Search Here..." type="search" id="search" />
                                <button class="search-submit" value=""><span class="fa fa-search"></span></button>
                            </form>
                        </div>
                        <div class="profile_details">
                            <ul>
                                <li class="dropdown profile_details_drop">
                                    <a href="#" data-toggle="dropdown" id="dropdownMenu3" aria-haspopup="true"
                                        aria-expanded="false">
                                        <div class="profile_img">
                                            <img src={require('../images/profileimg.jpg')} class="rounded-circle" alt="" />
                                            <div class="user-active">
                                                <span></span>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
)
