import React, { useState } from 'react'

import cart from "../../store/cart"
import url from "../../store/url"

import { Link } from "react-router-dom"

const Order = () => {
   const [method, setMethod] = useState("Картой онлайн")
   const [deliver, setDeliver] = useState("Курьером по адресу")
   const [loading, setLoading] = useState(false)

   const [form, setForm] = useState({
      name: "",
      phone: "",
      city: "",
      street: "",
      email: "",
      deliver: deliver,
      method: method
   })
   const changeHandler = (event) => {
      setForm({ ...form, [event.target.name]: event.target.value })
      if (event.target.name === "name" || "city" || "street") {
         if (event.target.value.split("").length <= 4 && event.target.value.split("").length !== 0) {
            event.target.classList.add("_error")
         }
         else {
            event.target.classList.remove("_error")
         }
      }
      if (event.target.name === "phone") {
         if (event.target.value.split("").length < 11 && event.target.value.split("").length !== 0) {
            event.target.classList.add("_error")
         }
         else {
            event.target.classList.remove("_error")
         }
      }
      if (event.target.name === "email") {
         if (event.target.value.split("").indexOf("@") === -1 && event.target.value.split("").length !== 0) {
            event.target.classList.add("_error")
         }
         else {
            event.target.classList.remove("_error")
         }
      }
   }
   const post = { ...form, deliver: deliver, method: method, cart: cart.cart }
   const fetchData = async () => {
      setLoading(true)
      await fetch(`${url.url}/api/order/create`, {
         method: "POST",
         body: JSON.stringify(post),
         headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
         }
      })
         .then(response => response.json())
         .then(response => window.M.toast({ html: `<div className="toast__error">${response.message}</div>`, classes: "toast__success" }))
      setLoading(false)
   }
   const clear = () => {
      setMethod("Картой онлайн")
      setDeliver("Курьером по адресу")
      setForm({
         name: "",
         phone: "",
         city: "",
         street: "",
         email: ""
      })
      document.getElementById("name").value = ""
      document.getElementById("name").classList.remove("_error")
      document.getElementById("phone").value = ""
      document.getElementById("phone").classList.remove("_error")
      document.getElementById("city").value = ""
      document.getElementById("city").classList.remove("_error")
      document.getElementById("street").value = ""
      document.getElementById("street").classList.remove("_error")
      document.getElementById("email").value = ""
      document.getElementById("email").classList.remove("_error")
   }
   return (
      <div className="order">
         <div className="order__title-wrap">
            <div className="order__title">Оформление заказа</div>
         </div>
         <div className="order__wrap _container">
            <div className="order__form order-form">
               <div className="order-form__method method">
                  <div className="method__content">
                     <p className="method__title">Способ оплаты</p>
                     <div className="method__state">
                        <img src="./img/card.png" alt="card" />
                        <div className="method__name">{method}</div>
                     </div>
                  </div>
                  <div
                     className="method__change"
                     onClick={() => {
                        method === "Картой онлайн"
                           ? setMethod("Наличными")
                           : setMethod("Картой онлайн")
                        setForm({ ...form, method: method })
                     }}
                  >Изменить</div>
               </div>
               <div className="order-form__deliver deliver">
                  <div className="deliver__content">
                     <p className="deliver__title">Способ получения</p>
                     <div className="deliver__state">
                        <img src="./img/truck_gray.png" alt="card" />
                        <div className="deliver__name">{deliver}</div>
                     </div>
                  </div>
                  <div
                     className="deliver__change"
                     onClick={() => {
                        deliver === "Курьером по адресу"
                           ? setDeliver("Самовывоз")
                           : setDeliver("Курьером по адресу")
                        setForm({ ...form, deliver: deliver })
                     }}
                  >Изменить</div>
               </div>
               <div className="order-form__person-data person-data">
                  <div className="person-data__name">
                     <div className="person-data__label">
                        <img src="./img/user_gray.png" alt="user" />
                        <div className="person-data__label-text">Имя и Фамилия</div>
                     </div>
                     <input
                        id="name"
                        type="text"
                        placeholder="Ваше имя"
                        name="name"
                        onChange={(event) => {
                           changeHandler(event)
                        }} />
                  </div>
                  <div className="person-data__phone">
                     <div className="person-data__label">
                        <img src="./img/user_gray.png" alt="user" />
                        <div className="person-data__label-text">Номер телефона</div>
                     </div>
                     <input
                        type="string"
                        placeholder="+7 000 000-00-00"
                        name="phone"
                        id="phone"
                        onChange={(event) => {
                           changeHandler(event)
                        }} />
                  </div>
               </div>
               <div className="order-form__person-adress person-adress">
                  <div className="person-adress__city">
                     <div className="person-adress__label">
                        <img src="./img/geo_gray.png" alt="user" />
                        <div className="person-adress__label-text">Адрес</div>
                     </div>
                     <input
                        type="text"
                        placeholder="Город"
                        name="city"
                        id="city"
                        onChange={(event) => {
                           changeHandler(event)
                        }} />
                  </div>
                  <div className="person-adress__street">
                     <input
                        type="text"
                        placeholder="Улица, номер дома"
                        name="street"
                        id="street"
                        onChange={(event) => {
                           changeHandler(event)
                        }} />
                  </div>
               </div>
               <div className="order-form__person-email person-email">
                  <div className="person-email__email">
                     <div className="person-email__label">
                        <img src="./img/email_gray.png" alt="user" />
                        <div className="person-email__label-text">Электронная почта</div>
                     </div>
                     <input
                        type="email"
                        placeholder="Электронная почта"
                        name="email"
                        id="email"
                        onChange={(event) => {
                           changeHandler(event)
                        }} />
                  </div>
               </div>
            </div>
            <div className="order__receipt">
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
                        disabled={loading}
                        className="cost-block__button"
                        onClick={() => {
                           if (form.name.split("").length <= 4) {
                              window.M.toast({ html: '<div className="toast__error">"Некоректные данные! Форма не отправлена!"</div>', classes: "toast__error" })
                           }
                           else if (form.phone.split("").length < 11) {
                              window.M.toast({ html: '<div className="toast__error">"Некоректные данные! Форма не отправлена!"</div>', classes: "toast__error" })
                           }
                           else if (form.email.split("").indexOf("@") === -1) {
                              window.M.toast({ html: '<div className="toast__error">"Некоректные данные! Форма не отправлена!"</div>', classes: "toast__error" })
                           }
                           else if (form.street.split("").length < 4 || form.city.split("").length < 2) {
                              window.M.toast({ html: '<div className="toast__error">"Некоректные данные! Форма не отправлена!"</div>', classes: "toast__error" })
                           }
                           else {
                              fetchData()
                              clear()
                              cart.clear()
                           }
                        }
                        }
                     >
                        Оплатить онлайн
                     </button>
                  </Link>
               </div>
            </div>
         </div>
      </div >
   )
}

export default Order
