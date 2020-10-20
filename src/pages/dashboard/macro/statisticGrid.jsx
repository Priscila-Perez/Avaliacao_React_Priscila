import React from 'react'

export default props => (
    
        <div class="card card_border border-primary-top p-4">
            <i class="lnr lnr-users"> </i>
            <h3 class="text-primary number">{props.value}</h3>
            <p class="stat-text">{props.label}</p>
        </div>

)