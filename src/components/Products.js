import React from 'react';
import util from '../util';


export default class Products extends React.Component {
    render(){
        const productItems = this.props.products.map(product => (
            <div className = "col-md-4" key={product.id}>
                <div className= "thumbnail text-center">
                    <img src={`products/${product.sku}.png`} alt={product.title}/>
                    <p>{product.title}</p>
                    <b>{util.formatCurrency(product.price)}</b>
                    <button className="btn btn-primary" 
                    onClick={(e) => this.props.handleAddToCart(e, product)}>Add to Cart
                    </button>
                </div>
            </div>

        ));

        return(
            <div className="row">
                {productItems}
            </div>
        )
    }
}