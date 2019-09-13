import { ADD_TO_CART, REMOVE_FROM_CART, CHANGE_TYPE } from './types';

export const addToCart = (items, product) => (dispatch) => {

    const cartItems = items.slice();

          let productInCart  = false;
          cartItems.forEach(item => {
            if(item.id === product.id){
              productInCart = true; 
              item.count++;
             }
            });
            if(!productInCart){
              cartItems.push({...product, count: 1});
            }
           return dispatch({
               type: ADD_TO_CART,
               payload:{ cartItems: cartItems }
           })

}

export const removeFromCart = (items, product) => (dispatch) => {

          const cartItems = items.slice().filter(item => item.id !== product.id);
          
          return dispatch({type:REMOVE_FROM_CART, payload:{
              cartItems
          } })
        
      

}


