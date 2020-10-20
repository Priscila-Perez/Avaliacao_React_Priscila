import React from 'react'

export default props => (
    <div class="card text-center card_border">
        <div class="card-header chart-grid__header">
            {props.title}
        </div>
        <div class="card-body">
            <div id="container">
                <canvas id="barchart">{props.content}</canvas>
            </div>
        </div>
        <div class="card-footer text-muted chart-grid__footer">
            {props.update}
        </div>
    </div>
)