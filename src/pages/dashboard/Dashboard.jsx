import React, { Component } from 'react'
import Path from '../../components/path'
import Welcome from './macro/welcome'
import StatisticGrid from './macro/statisticGrid'
import Chart from './macro/chart'

export default class Dashboard extends Component {

    render() {
        return (
            <>
                <div class="main-content">
                    <div class="container-fluid content-top-gap">
                        <Path viewName="Dashboard" />
                        <Welcome />

                        <div class="statistics">
                            <div class="row">
                                <div class="col-xl-6 pr-xl-2">
                                    <div class="row">
                                        <div class="col-sm-6 pr-sm-2 statistics-grid">
                                            <StatisticGrid value="29.75 M" label="Total Users" />
                                        </div>
                                        <div class="col-sm-6 pr-sm-2 statistics-grid">
                                            <StatisticGrid value="51.25 K" label="Daily Visitors" />
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xl-6 pr-xl-2">
                                    <div class="row">
                                        <div class="col-sm-6 pr-sm-2 statistics-grid">
                                            <StatisticGrid value="166.89 M" label="Downloads" />
                                        </div>
                                        <div class="col-sm-6 pr-sm-2 statistics-grid">
                                            <StatisticGrid value="1,250k" label="Purchased" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="chart">
                            <div class="row">
                                <div class="col-lg-6 pr-lg-2 chart-grid"></div>
                                <Chart title="Bar Chart" content="" update="Updated 2 hours ago" />
                            </div>
                            <div class="col-lg-6 pr-lg-2 chart-grid">
                                <Chart title="Line Chart" content="" update="Updated just now" />
                            </div>
                        </div>
                    </div>
                </div>
            </>

        )
    }
}



