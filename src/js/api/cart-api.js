const CartAPI = {
  catalog: [],
  cartItems: [],
  removeItem( item ) {
    this.cartItems.splice( this.cartItems.findIndex( i => i === item ), 1 );
  },
  findCartItem( item ) {
    return this.cartItems.find( cartItem => cartItem.id === item.id )
  },
}

export default CartAPI;