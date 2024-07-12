// initialize the initial state of the favorite product list and
// implement the business logic for each action before updating the state. 
import { createReducer, on } from '@ngrx/store';
import { add, remove, clear, updateAllState } from '../action/app.action';
import { AppState } from '../app.state';

//initialize initial state with empty favourite product array
export const initialState: AppState = { 
  products:[],
};

//createreducer receives the initial state and several ons for the actions
export const favoriteReducer = createReducer( 
  initialState,
  // adds a new product to the current state.
  on(add, (state, {product}) => (
    {
      ...state,
      products: [...state.products, product]
    }
  )
  ),

  //removes a specific product from the current state.
  on(remove, (state, {product}) => ({
    ...state,
    products: state.products.filter((p)=> product.id != p.id)
  })),

  //updates the state with a list of products received as a parameter.
  on(updateAllState, (state, {products}) => (
    {
      ...state,
      products
    }
  )
  ),
  // resets the state by setting it to the initial state, 
  //effectively clearing all favorite products from the storage.
  on(clear, state => initialState)
);