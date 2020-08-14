import React, { Component } from 'react'


export default class createOrder extends Component {
    render() {
        return (
            <div className="createOrder-container">
                <div className="create-order">
                    <h2>CREATE ORDER</h2>
                    <div className="c-order">
                        <form>
                            <label>campo1</label>
                            <input type="text"></input>
                            <label>campo1</label>
                            <input type="text"></input>
                            <label>campo1</label>
                            <input type="text"></input>
                        </form>
                    </div>

                </div>
                <div className="show-orders">
                    <h2>ORDERS</h2>
                    <div className="orders">

                    </div>
                </div>
            </div>
        )
    }
}
