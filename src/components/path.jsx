import React from 'react'

export default props => (

    <nav aria-label="breadcrumb">
        <ol class="breadcrumb my-breadcrumb">
            <li class="breadcrumb-item"><a href="index.html">Home</a></li>
            <li class="breadcrumb-item active" aria-current="page">{props.viewName}</li>
        </ol>
    </nav>

)
