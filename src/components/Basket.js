import React from 'react';
import util from '../util';


export default class Basket extends React.Component {
    render(){
        const {cartItems} = this.props;

         return(
            <div className="card text-white bg-primary mb-3" style={{maxWidth: '20rem' }}>
            <div className="card-header">Shopping Cart</div>
            <div className="card-body">
            <h4 className="card-title">Order Summary</h4>
            {cartItems.length === 0 ? "Basket is empty" : 
            <div>You have {cartItems.length} items in the basket. <hr /></div>
            }
            {cartItems.length > 0 &&
                <div>
                    {cartItems.map(item => (
                        <div className="alert alert-dismissible alert-light" key={item.sku}>
                        <button type="button" className="close" data-dismiss="alert" 
                        onClick={(e) => this.props.handleRemoveFromCart(e, item)}>&times;</button>
                        <span className="badge badge-warning">{item.count}x</span> <strong>{item.title}</strong> {util.formatCurrency(item.price)}
                        </div>
                    ))}
                
                <br/>
                <b style = {{float: 'left'}}>TOTAL: {util.formatCurrency(cartItems.reduce((a, c) => (a + c.price * c.count), 0))}</b>
                <button 
                onClick={() => alert("Thank you for shopping at Best Store")} 
                className="btn btn-primary" 
                style={{float: 'right'}}>Checkout
                </button>
                </div>
            }
            </div>
          </div>
            
        )
    }
}