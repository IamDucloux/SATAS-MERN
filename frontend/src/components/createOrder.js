import React, { Component } from 'react'
import Order from './order'


export default class createOrder extends Component {
    render() {
        return (
            <div className="createOrder-container">
                <div className="create-order">
                    <h2>CREATE ORDER</h2>
                    <div className="c-order">
                        <form>
                            <label>Order Number</label>
                            <input type="text"></input>
                            <label>Product</label>
                            <input type="text"></input>
                            <label>Observations</label>
                            <input type="text-area"></input>
                        </form>
                    </div>

                </div>
                <div className="show-orders">
                    <h2>ORDERS</h2>
                    <div className="orders">
                        <ul>
                            <li>
                                <Order></Order>
                            </li>
                            <li>
                                <Order></Order>
                            </li>
                            <li>
                                <Order></Order>
                            </li>
                            <li>
                                <Order></Order>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}
