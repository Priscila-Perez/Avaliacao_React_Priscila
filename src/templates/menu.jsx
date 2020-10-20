import React from 'react'

export default props => (
    <div class="sidebar-menu sticky-sidebar-menu">

        <div class="logo">
            <h1><a href="index.html">Collective</a></h1>
        </div>

        <div class="logo-icon text-center">
            <a href="index.html" title="logo"><img src={require('../images/logo.png')} alt="logo-icon" /> </a>
        </div>

        <div class="sidebar-menu-inner">

            <ul class="nav nav-pills nav-stacked custom-nav">
                <li><a href="/dashboard"><i class="fa fa-tachometer"></i><span> Dashboard</span></a>
                </li>
                <li><a href=""><i class="fa fa-cogs"></i> <span>Default cards</span></a></li>
                <li><a href=""><i class="fa fa-table"></i> <span>Pricing tables</span></a></li>
                <li><a href=""><i class="fa fa-th"></i> <span>Content blocks</span></a></li>
                <li><a href=""><i class="fa fa-file-text"></i> <span>Forms</span></a></li>
            </ul>
        </div>
    </div>
)