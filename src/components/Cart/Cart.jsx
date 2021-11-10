import React from 'react'

import { Link } from "react-router-dom"
import cart from "../../store/cart"

import { observer } from "mobx-react-lite"

const Cart = observer(() => {
   const masks = cart.cart

   return (
      <div className="cart">
         <div className="cart__wrap _container">
            <div className="cart__title-wrap">
               <h2 className="cart__title">Корзина</h2>
            </div>
            <div className="cart__info-block">
               <div className="cart__cart-list cart-list">
                  <div className="cart-list__interactive">
                     <div className="cart-list__checkAll">
                        <input
                           type="checkbox"
                           className="checkAll__checkbox"
                           checked={cart.isAllChecked()}
                           disabled={cart.cart.length === 0}
                           onChange={() => {
                              cart.checkAll(!cart.isAllChecked())
                           }} />
                        <p className="checkAll__text">Выбрать все</p>
                     </div>
                     <div
                        className="cart-list__deleteChecked"
                        onClick={() => {
                           cart.deleteChecked()
                        }}
                     >
                        Удалить выбранные
                     </div>
                  </div>
                  {masks.length === 0
                     ? <div className="cart-list__alert">Нет ничего в корзине</div>
                     : masks.map((item, index) => {
                        return <div className="cart-list__mask cart-mask" key={index}>
                           <input
                              type="checkbox"
                              className="cart-mask__checkbox"
                              checked={item.checked}
                              onChange={() => {
                                 cart.toggleChecked(item.id)
                              }}
                           />
                           <div className="cart-mask__img">
                              <img src={`../img/${item.img[0]}`} alt="kn95" />
                           </div>
                           <div className="cart-mask__name">
                              <div className="cart-mask__title">{item.name}</div>
                              <button
                                 className="cart-mask__delete"
                                 onClick={() => {
                                    cart.deleteOne(item.id)
                                 }}
                              >Удалить</button>
                           </div>
                           {item.discount !== 0
                              ? <div className="cart-mask__cost">
                                 <div className="cart-mask__total">{Math.ceil((item.defaultCost - (item.defaultCost * (item.discount / 100))) * item.number)} P</div>
                                 <div className="cart-mask__discount">
                                    <div className="cart-mask__discount-cost">{item.defaultCost * item.number} P</div>
                                    <div className="cart-mask__discount-number">-{item.discount}%</div>
                                 </div>
                              </div>
                              : <div className="cart-mask__cost">
                                 <div className="cart-mask__total">{Math.ceil((item.defaultCost - (item.defaultCost * (item.discount / 100))) * item.number)} P</div>
                              </div>
                           }
                           <div className="counter">
                              <div
                                 className="counter__dec"
                                 onClick={() => {
                                    cart.decrement(item.id)
                                 }}
                              >-</div>
                              <div className="counter__state">{item.number}</div>
                              <div
                                 className="counter__inc"
                                 onClick={() => {
                                    cart.increment(item.id)
                                 }}
                              >+</div>
                           </div>
                        </div>
                     })
                  }
               </div>
               <div className="cart__cost-block cost-block">
                  <div className="cost-block__header">
                     <h5 className="cost-block__title">Ваша корзина</h5>
                     <div className="cost-block__number">{cart.getTotalNumber()}</div>
                  </div>
                  <div className="cost-block__total-without">
                     <div className="cost-block__title-num">Товары ({cart.getTotalNumber()})</div>
                     <div className="cost-block__total-cost-without">{cart.getTotalCostWithout()} P</div>
                  </div>
                  <div className="cost-block__discount-block discount-block">
                     <h5 className="discount-block__title">Скидка</h5>
                     <div className="discount-block__total-discount">- {cart.getTotalDiscount()} P</div>
                  </div>
                  <div className="cost-block__footer">
                     <h5 className="cost-block__title-total-score">Общая стоимость</h5>
                     <div className="cost-block__total-score">{cart.getTotalCost()} P</div>
                  </div>
                  <p className="cost-block__text">
                     Доступные способы и время доставки можно выбрать при оформлении заказа.
                  </p>

                  <Link to="/order">
                     <button
                        className={masks.length === 0 ? "cost-block__button _disactive" : "cost-block__button"}
                        disabled={masks.length === 0}>
                        Перейти к оформлению
                     </button>
                  </Link>
               </div>
            </div>
         </div>
      </div>
   )
})

export default Cart
