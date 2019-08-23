import React from 'react';
import util from '../util';


export default class Products extends Component {
    render(){
        const productItems = this.props.products.map(product => (
            <div className = "col-md-4" key={product.sku}>
                <div className= "thumbnail text-center">
                    <img src={product.mediumImage} alt={product.title}/>
                    <p>{product.title}</p>
                    <b>{util.formatCurrency(product.regularPrice)}</b>
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