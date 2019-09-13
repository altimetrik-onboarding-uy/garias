import React from 'react';
import Filter from './components/Filter';
import Products from './components/Products';
import Basket from './components/Basket';
import { connect } from 'react-redux';
import { filterProducts } from './actions/productActions';
import  NavBar  from './components/NavBar';


class App extends React.Component{

  constructor(props){
    super(props);
    this.state = {products: [], type:""};
    this.handleProductChange = this.handleProductChange.bind(this);
  }


    componentDidMount(){
      if(this.state.type === ""){
        this.setState({type: "ofertas"});
      }
    this.handleFetch();
    }

     handleFetch() {
       setTimeout(async () => {
        console.log(this.props.type);
        const response = await fetch(`https://api.mercadolibre.com/sites/MLU/search?q=${this.state.type}`)
        const data = await response.json();
        this.setState({products: data.results});
        console.log(this.state.products)
      }, 1);
      
    }

     /* filterChange = () => {
      if(this.props.type === undefined){
          this.handleFetch("celulares")
      }
    } */

    
    handleProductChange = (e) => {
      this.setState({ type: e.target.value});
      this.handleFetch();
    } 

     /* handleProductChange = async (e) => {
      console.log("1"+this.state.type)
      this.setState({ type: e.target.value});

      console.log("2"+this.state.type)
      const response = await fetch(`https://api.mercadolibre.com/sites/MLU/search?q=${this.state.type}`)
      .then(data => {
        const coso = data.json();
        return coso;
      }).then(products => {
        console.log(products)
        this.setState({products});
      }) */

      // const data = await response.json();
      // this.setState({products: response});
      // console.log("3"+this.state.products) 

      // this.handleFetch(this.state.type);
    
    //crear otra funcion que retorne filteredProducts
    // despues eliminar todos los return de handleChangeURL
    // en handleChangeURL solo actualizar los estados 
    /* handleChangeURL = () => {
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
    } */

    

     /* listProducts = () => {
        if(this.state.type === "iphone"){
        this.setState({searchType:"iphone"})

         
        return {filteredProducts: this.state.products}

        }else if(this.state.type === ""){
          return {filteredProducts: this.state.products}
        } 
    }  */


    


  render(){
    return(
      <div className="container" >
        <NavBar/>
        <div className="row">
          <div className="col-md-9">
          <Filter 
           count={this.state.products.length}
           handleProductChange={this.handleProductChange}
           />
          <hr/>
          <Products
           products={this.state.products}
           handleAddToCart={this.handleAddToCart}/>
          </div>
          <div className="col-md-3">
          <br/>
          <Basket cartItems={this.state.cartItems}
           handleRemoveFromCart={this.handleRemoveFromCart}/>
          </div>
        </div>
      </div>
    )
  }
}



export default App;
