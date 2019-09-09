import React from 'react';
import util from '../util';
import { Tooltip, OverlayTrigger } from 'react-bootstrap';
import { connect } from 'react-redux';
import { addToCart } from '../actions/productActions';

class Products extends React.Component {
    render(){
      return <div className="row" >
            {this.props.products.map(product => (
            
            <OverlayTrigger placement="right" key={product.id} overlay={<Tooltip id="tooltip">
            <p>
              {product.title}
            </p>
            </Tooltip>}>
                    <div className = "col-lg-4 col-auto">
                    <div className= " product thumbnail text-center">
                    <img src={product.thumbnail} alt={product.title}/>
                    <p>{product.title}</p>
                    <b>{util.formatCurrency(product.price)}</b>
                    <button className="btn btn-primary" 
                    onClick={() => this.props.addToCart(this.props.cartItems, product)}>Add to Cart
                    </button>
                </div>
            </div>
            </OverlayTrigger>
        ))
        }
        </div> 
    }
}
const mapStateToProps = state => ({
  cartItems: state.cart.items
});

export default connect(mapStateToProps,{ addToCart })(Products);