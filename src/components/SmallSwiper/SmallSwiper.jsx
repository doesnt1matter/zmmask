import React from 'react'

import cart from "../../store/cart"

import Loader from "react-js-loader"

import SwiperCore, { Navigation } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/swiper.scss"
import "swiper/components/navigation/navigation.scss"

SwiperCore.use([Navigation])

const SmallSwiper = (props) => {
   return (
      <div className="smallswiper" id="smallswiper">
         <div className="smallswiper__wrap ._container">
            <div className="smallswiper__prev"><img src="../img/swiper_arrow.png" alt="swiper_arrow" /></div>
            <div className="smallswiper__next"><img src="../img/swiper_arrow.png" alt="swiper_arrow" /></div>
            {props.loading === true
               ? <Loader type="spinner-default" bgColor={"#4945FF"} title={"Загрузка..."} color={'#343434'} size={100} />
               : <Swiper
                  spaceBetween={20}
                  slidesPerView={3}
                  navigation={
                     {
                        prevEl: ".smallswiper__prev",
                        nextEl: ".smallswiper__next"
                     }
                  }
                  breakpoints={{
                     0: {
                        slidesPerView: 1
                     },
                     900: {
                        slidesPerView: 2
                     },
                     1200: {
                        slidesPerView: 3
                     }
                  }}
               >
                  {props.masks.map((item, index) => {
                     return <SwiperSlide key={index} className="smallswiper__item-wrap">
                        <div className="smallswiper__item">
                           <div className="smallswiper__img">
                              <img src={`../img/${item.img[0]}`} alt="item" />
                           </div>
                           <div className="smallswiper__text">
                              <p className="smallswiper__name">{item.name}</p>
                              <div className="smallswiper__cost-block">
                                 <div className="smallswiper__cost">{Math.ceil((item.cost - (item.cost * (item.discount / 100))))} ₽</div>
                                 <div className="smallswiper__default-cost">{item.cost} ₽</div>
                              </div>
                              <button
                                 className="smallswiper__buy"
                                 onClick={() => {
                                    cart.addToCart(item._id, {
                                       id: item._id,
                                       name: item.name,
                                       cost: Math.ceil((item.cost - (item.cost * (item.discount / 100)))),
                                       defaultCost: item.cost,
                                       discount: item.discount,
                                       img: item.img,
                                       voices: item.voices,
                                       defend: item.defend,
                                       number: 1,
                                       checked: false
                                    })
                                 }}
                              >В корзину <img src="../img/cart_w.png" alt="cart" /></button>
                           </div>
                        </div>
                     </ SwiperSlide>
                  })}
               </Swiper>
            }
         </div>
      </div>
   )
}

export default SmallSwiper
