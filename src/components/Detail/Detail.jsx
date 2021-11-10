import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'

import Loader from "react-js-loader"

import cart from "../../store/cart"
import popup from "../../store/popup"
import url from "../../store/url"

import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/swiper.scss"
import "swiper/components/pagination/pagination.scss"
import SwiperCore, { Pagination } from "swiper"
SwiperCore.use([Pagination])

const Detail = () => {

   const { id } = useParams()
   const [mask, setMask] = useState(undefined)
   const [number, setNumber] = useState(1)
   const [loading, setLoading] = useState(false)
   const [voices, setVoices] = useState(0)


   const path = `${url.url}/api/mask?field=_id&value=${id}`

   useEffect(() => {
      setLoading(true)
      const fetchData = async () => {
         await fetch(path)
            .then(response => response.json())
            .then(response => {
               let massive = []
               response.data[0].voices.map(item => {
                  return massive.push(item.rating)
               })
               setMask(response.data)

               if (massive.length !== 0) {
                  setVoices((massive.reduce((previousValue, currentValue) => previousValue + currentValue) / massive.length))
               }
            })
         setLoading(false)
      }
      fetchData()
   }, [path])

   let stars = ["stars__star", "stars__star", "stars__star", "stars__star", "stars__star"]
   let counter = 0
   while (counter < voices) {
      stars.push("stars__star _active")
      counter++
   }
   stars = stars.reverse().slice(0, 5)

   const increment = () => {
      if (number < 20) {
         setNumber(number + 1)
      }
   }
   const decrement = () => {
      if (number > 1) {
         setNumber(number - 1)
      }
   }

   return (
      <div className="detail">
         {loading === true || mask === undefined
            ? <Loader type="spinner-default" bgColor={"#4945FF"} title={"Загрузка..."} color={'#343434'} size={100} />
            : <div className="detail__wrap _container">
               <div className="detail__title-wrap">
                  <h2 className="detail__title">{mask[0].name}</h2>
               </div>
               <div className="detail__info">
                  <div className="detail__articul"><span>Артикул:</span> Н/Д</div>
                  <div className="detail__category"><span>Категории:</span> {mask[0].defend},{mask[0].brand}</div>
                  <div className="detail__rating">
                     {stars.map((item, index) => {
                        return <div className={item} key={index}></div>
                     })}({(mask[0].voices !== 0 ? mask[0].voices.length : 0)})
                  </div>
               </div>
               <div className="detail__info-block info-block">
                  <div className="detail__swiper">
                     <Swiper
                        slidesPerView={1}
                        loop={true}
                        pagination={{
                           clickable: true
                        }}
                     >
                        {mask[0].img.map((item, index) => {
                           return <SwiperSlide key={index}>
                              <div className="detail__image">
                                 <img src={`../img/${item}`} alt="kn95" />
                              </div>
                           </SwiperSlide>
                        })}
                     </Swiper>
                  </div>
                  <div className="info-block__text">
                     <h5 className="info-block__description">Неформованный респиратор универсального размера из нетканого фильтрующего материала. Имеет эластичную регулируемую ленту оголовья, носовой зажим и клапан выдоха, который обеспечивает понижение влажности и температуры в подмасочном пространстве и создает комфортные условия для дыхания.</h5>
                     {mask[0].discount !== 0
                        ? <div className="info-block__cost">
                           <div className="info-block__cost-value">{Math.ceil((mask[0].cost - (mask[0].cost * (mask[0].discount / 100))) * number)} ₽</div>
                           <div className="info-block__discount-cost">{mask[0].cost * number} ₽</div>
                           <div className="info-block__cost-discount">-{mask[0].discount}%</div>
                        </div>
                        : <div className="info-block__cost">
                           <div className="info-block__cost-value">{(mask[0].cost - (mask[0].cost * (mask[0].discount / 100))) * number} ₽</div>
                        </div>}
                     <div className="info-block__change-num">
                        <button
                           className={number === 1 ? "info-block__change-num-btn _active" : "info-block__change-num-btn"}
                           onClick={() => {
                              setNumber(1)
                           }}
                        >1шт</button>
                        <button
                           className={number === 5 ? "info-block__change-num-btn _active" : "info-block__change-num-btn"}
                           onClick={() => {
                              setNumber(5)
                           }}
                        >5шт</button>
                        <button
                           className={number === 10 ? "info-block__change-num-btn _active" : "info-block__change-num-btn"}
                           onClick={() => {
                              setNumber(10)
                           }}
                        >10шт</button>
                        <button
                           className={number === 20 ? "info-block__change-num-btn _active" : "info-block__change-num-btn"}
                           onClick={() => {
                              setNumber(20)
                           }}
                        >ОПТ</button>
                     </div>
                     <div className="counter">
                        <div
                           className="counter__dec"
                           onClick={() => {
                              decrement()
                           }}
                        >-</div>
                        <div className="counter__state">{number}</div>
                        <div
                           className="counter__inc"
                           onClick={() => {
                              increment()
                           }}
                        >+</div>
                     </div>
                     <div className="info-block__buy">
                        <button
                           className="item__add-btn"
                           onClick={() => {
                              cart.addToCart(id, { ...mask[0], number: number, cost: (mask[0].cost - (mask[0].cost * (mask[0].discount / 100))) * number, id: id, defaultCost: mask[0].cost, checked: false })
                           }}
                        >В корзину <img src="../img/cart_w.png" alt="cart" /></button>
                        <button
                           className="info-block__add-voice"
                           onClick={() => {
                              popup.changeAddVoice()
                           }}
                        >Оставить отзыв</button>
                     </div>
                  </div>
               </div>
               <div className="detail__voices-block voices-block">
                  <div className="voices-block__title-wrap">
                     <h2 className="voices-block__title">Отзывы</h2>
                  </div>
                  <div className="voices-block__content">
                     {mask[0].voices.length === 0
                        ? <p className="voices-block__alert">Здесь еще нет отзывов</p>
                        : mask[0].voices.map((item, index) => {
                           let stars = ["stars__star", "stars__star", "stars__star", "stars__star", "stars__star"]
                           const voices = item.rating
                           let counter = 0

                           while (counter < voices) {
                              stars.push("stars__star _active")
                              counter++
                           }
                           stars = stars.reverse().slice(0, 5)
                           return <div className="voices-block__voice voice" key={index}>
                              <div className="voice__user-info">
                                 <div className="voice__img">
                                    <img src="../img/voice_user.png" alt="user" />
                                 </div>
                                 <div className="voice__main">
                                    <h3 className="voice__title">{item.user}</h3>
                                    <div className="voice__rating">{
                                       stars.map((item, index) => {
                                          return <div className={item} key={index}></div>
                                       })
                                    }</div>
                                 </div>
                              </div>
                              <div className="voice__subtitle">{item.text}</div>
                           </div>
                        })}
                  </div>
               </div>
            </div>
         }
      </div>
   )
}

export default Detail
