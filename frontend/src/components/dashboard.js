import React, { Component } from 'react'

export default class dashboard extends Component {



    render() {
        return (
            <div className="dashboard-container">
                <div className="chart-container" id="c1">
                    <h2>VENTAS</h2>
                    <div className="data-container">
                        <div className="data">
                            <h3>$250,000.00</h3>
                        </div>
                    </div>
                </div>
                <div className="chart-container" id="c2">
                    <h2>COSTOS</h2>
                    <div className="data-container">
                        <div className="data">
                        <h3>$125,000.00</h3>
                        </div>
                    </div>
                </div>
                <div className="chart-container" id="c3">
                    <h2>GRAFICA</h2>
                    <div className="data-container">
                        <div className="data">
                            <div className="loading"></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
