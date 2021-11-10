import React, { useState } from 'react'

import { Link } from "react-router-dom"

import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/swiper.scss"
import "swiper/components/pagination/pagination.scss"

import cart from "../../store/cart"
import activeItem from "../../store/activeItem"

import SwiperCore, { Pagination } from "swiper"
SwiperCore.use([Pagination])

const Item = (props) => {

   const [item, setItem] = useState({
      id: props.mask._id,
      name: props.mask.name,
      cost: props.mask.cost,
      defaultCost: props.mask.cost,
      discount: props.mask.discount,
      img: props.mask.img,
      voices: props.mask.voices,
      defend: props.mask.defend,
      number: 1,
      checked: false
   })
   const defaultCost = props.mask.cost

   const changeHandler = (event) => {
      setItem({ ...item, [event.target.name]: parseInt(event.target.value), cost: (props.mask.cost - (props.mask.cost * (props.mask.discount / 100))) * parseInt(event.target.value) })
   }

   let stars = ["stars__star", "stars__star", "stars__star", "stars__star", "stars__star"]
   let massive = []
   item.voices.map(mask => {
      return massive.push(mask.rating)
   })
   let sum = massive.reduce((a, b) => a + b, 0);
   const voices = Math.ceil(sum / massive.length)
   let counter = 0

   while (counter < voices) {
      stars.push("stars__star _active")
      counter++
   }
   stars = stars.reverse().slice(0, 5)

   return (
      <div className="item">
         <Link to={`/catalog/${props.mask._id}`} onClick={() => {
            activeItem.changeId(props.mask._id)
         }}>
            <div className="item__swiper">
               <Swiper
                  slidesPerView={1}
                  loop={true}
                  pagination={{
                     clickable: true
                  }}
               >
                  {props.mask.img.map((item, index) => {
                     return <SwiperSlide key={index}>
                        <div className="item__image" >
                           <img src={`./img/${item}`} alt="mask" />
                        </div>
                     </SwiperSlide>
                  })}
               </Swiper>
            </div>
         </Link>
         <div className="item__name">{props.mask.name}</div>
         <div className="item__rating">
            <div className="item__stars stars">
               {stars.map((item, index) => {
                  return <div className={item} key={index}></div>
               })}
            </div>
            <p className="item__voices">({props.mask.voices.length})</p>
         </div>

         {props.mask.discount !== 0
            ? <div className="item__cost">
               <div className="item__cost-value">{Math.ceil((props.mask.cost - (props.mask.cost * (props.mask.discount / 100))) * item.number)} ₽</div>
               <div className="item__discount-cost">{defaultCost * item.number} ₽</div>
               <div className="item__cost-discount">-{props.mask.discount}%</div>
            </div>
            : <div className="item__cost">
               <div className="item__cost-value">{(props.mask.cost - (props.mask.cost * (props.mask.discount / 100))) * item.number} ₽</div>
            </div>}

         <div className="item__number">
            <button
               className={item.number === 1 ? "item__change-num-btn _active" : "item__change-num-btn"}
               name="number"
               value="1"
               onClick={(event) => {
                  changeHandler(event)
               }}
            >1шт</button>
            <button
               className={item.number === 5 ? "item__change-num-btn _active" : "item__change-num-btn"}
               name="number"
               value="5"
               onClick={(event) => {
                  changeHandler(event)
               }}
            >5шт</button>
            <button
               className={item.number === 10 ? "item__change-num-btn _active" : "item__change-num-btn"}
               name="number"
               value="10"
               onClick={(event) => {
                  changeHandler(event)
               }}
            >10шт</button>
            <button
               className={item.number === 20 ? "item__change-num-btn _active" : "item__change-num-btn"}
               name="number"
               value="20"
               onClick={(event) => {
                  changeHandler(event)
               }}
            >ОПТ</button>

         </div>

         <div className="item__buy">
            <button
               className="item__add-btn"
               onClick={() => {
                  cart.addToCart(props.mask._id, { ...item, cost: Math.ceil((props.mask.cost - (props.mask.cost * (props.mask.discount / 100))) * item.number) })
               }}
            >В корзину <img src="./img/cart_w.png" alt="cart" /></button>
            <Link to="/" className="item__add-link">Купить в 1 клик</Link>
         </div>
      </div>
   )
}

export default Item
