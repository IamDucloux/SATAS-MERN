import React, { Component } from 'react'
import Order from './order'


export default class createOrder extends Component {


    onSubmit = async (obj) => {
        obj.preventDefault();

        
        window.location.href = '/orders';
    }

    render() {
        return (
            <div className="createOrder-container">
                <div className="create-order">
                    <h2>Crear ordenes</h2>
                    <div className="c-order">
                        <form onSubmit={this.onSubmit}>
                            <label>Numero de orden</label>
                            <input type="text"></input>
                            <label>Producto</label>
                            <input type="text"></input>
                            <label>Observaciones</label>
                            <textarea name="obs" className="obs"></textarea>
                            <button>Crear</button>
                        </form>
                    </div>

                </div>
                <div className="show-orders">
                    <h2>Ordenes</h2>
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
