import React from 'react'

const AddCart = () => {
   return (
      <div className="add-cart-popup">
         <div className="add-cart-popup__text-block">
            <div className="add-cart-popup__verefied">
               <img src="../img/popup_verefied.png" alt="verefied" />
            </div>
            <h3 className="add-cart-popup__text">Товар добавлен в корзину!</h3>
         </div>
         <div className="add-cart-popup__cart-img">
            <img src="../img/popup_cart.png" alt="cart" />
         </div>
      </div>
   )
}

export default AddCart
