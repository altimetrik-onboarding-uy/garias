import React from 'react';
import Filter from './components/Filter';
import Products from './components/Products';
import Basket from './components/Basket';

class App extends React.Component{
  state = {products: [], type:'', filteredProducts: [], cartItems };


  componentDidMount(){
    this.handleChangeURL();
  }

  async onChangeResponse(url){
    const response = await fetch(url);
    const data = await response.json();
    this.setState({products: data})
    }

    
    handleProductChange = (e) => {
      this.setState({ type: e.target.value})
    }
    //crear otra funcion que retorne filteredProducts
    // despues eliminar todos los return de handleChangeURL
    // en handleChangeURL solo actualizar los estados 
    handleChangeURL = () => {
      let url = ""
      if(state.type === ""){
         url = "https://api.bestbuy.com/v1/products"
        this.onChangeResponse(url);
        return {filteredProducts: this.state.products}
      }else if(state.type === "computers"){
        url = "FILTER URL GOES HERE"
        this.onChangeResponse(url);
        return {filteredProducts: this.state.products}
      }else if(state.type === "videogames"){
        url = "FILTER URL GOES HERE"
        this.onChangeResponse(url)
        return {filteredProducts: this.state.products}
      }else if(state.type === "topseller")
        url = "FILTER URL GOES HERE"
        this.onChangeResponse(url)
        return {filteredProducts: this.state.products}
    }

    handleAddToCart = (e, product) => {
      this.setState(state => {
        const cartItems = state.cartItems;
        let productInCart  = false;

        cartItems.forEach(item => {
          if(item.sku === product.sku){
            productInCart = true; 
            item.count++;
           }
          });
          if(!productInCart){
            cartItems.push({...product, count: 1});
          }
          return { cartItems: cartItems }

      });
    }

    handleRemoveFromCart = (e, product) => {
      this.setState(state =>{
        const cartItems = state.cartItems.filter(item => item.sku !== product.sku);
        return { cartItems: cartItems };
      })
    }


  render(){
    return(
      <div className="container">
        <h1>Best Store</h1>
        <hr/>
        <div className="row">
          <div className="col-md-9">
          <Filter 
           count={this.state.filteredProducts.length}
           handleProductChange={this.handleProductChange}/>
          <hr />
          <Products
           products={this.state.filteredProducts}
           handleAddToCart={this.handleAddToCart}/>
          </div>
          <div className="col-md-3">
          <Basket cartItems={this.state.cartItems}
           handleRemoveFromCart={this.handleRemoveFromCart}/>
          </div>
        </div>
      </div>
    )
  }
}


export default App;
