import React from 'react';
import util from '../util';
import { Tooltip, OverlayTrigger } from 'react-bootstrap';


export default class Products extends React.Component {
    
    


    render(){

        /* const popover = this.props.products.map (product => (
            <Popover id="popover-basic">
              <Popover.Title as="h3">{product.title}</Popover.Title>
              <Popover.Content>
                {product.description}
              </Popover.Content>
            </Popover>
          )); */


        const productItems = this.props.products.map(product => (
            
            <OverlayTrigger placement="right" overlay={<Tooltip id="tooltip">
            <p>
              {product.description}
            </p>
            </Tooltip>}>
                    <div className = "col-lg-4 col-auto" key={product.id}>
                    <div className= " product thumbnail text-center">
                    <img src={`products/${product.sku}.png`} alt={product.title}/>
                    <p>{product.title}</p>
                    <b>{util.formatCurrency(product.price)}</b>
                    <button className="btn btn-primary" 
                    onClick={(e) => this.props.handleAddToCart(e, product)}>Add to Cart
                    </button>
                </div>
            </div>
            </OverlayTrigger>
            
            

        ));

        return(
            <div className="row">
                {productItems}
            </div>
        )
    }
}