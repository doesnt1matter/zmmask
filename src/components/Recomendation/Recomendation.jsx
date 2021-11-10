import React, { useEffect, useState } from 'react'

import Loader from "react-js-loader"

import url from "../../store/url"

import { Link } from "react-router-dom"
import { Item } from "../index"

import SwiperCore, { Navigation } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/swiper.scss"
SwiperCore.use([Navigation])

const Recomendation = (props) => {

   const [masks, setMasks] = useState([])
   const [loading, setLoading] = useState(false)
   const [httpProp, setHttpProp] = useState("?limit=20")

   const path = `${url.url}/api/mask${httpProp}`

   useEffect(() => {
      setLoading(true)
      const fetchData = async () => {
         await fetch(path)
            .then(response => response.json())
            .then(response => setMasks(response.data))
         setLoading(false)
      }
      fetchData()
   }, [path])


   const [navigation, setNavigation] = useState("all")

   return (
      <div className="recomendation">
         <div className="recomendation__wrap _container">
            <div className="recomendation__filter">
               <div className="recomendation__title-wrap">
                  <h2 className="recomendation__title">{props.title}</h2>
               </div>
               {props.navigation === false ? null :
                  <div className="recomendation__filter-button filter-button">
                     <button
                        className={navigation === "all" ? "filter-button__all _active" : "filter-button__all"}
                        onClick={() => {
                           setNavigation("all")
                        }}
                     >Все товары</button>
                     <button
                        className={navigation === "brand" ? "filter-button__all _active" : "filter-button__all"}
                        onClick={() => {
                           setNavigation("brand")
                        }}
                     >Бренды</button>
                  </div>
               }
            </div>
            {props.navigation === false ? null :
               navigation === "all"
                  ? <div className="recomendation__recom-navigation recom-navigation">
                     <button
                        className={httpProp === "?limit=20&field=defend&value=FFP1" ? "recom-navigation__button _active" : "recom-navigation__button"}
                        onClick={() => {
                           httpProp === "?limit=20&field=defend&value=FFP1" ? setHttpProp("?limit=20") : setHttpProp("?limit=20&field=defend&value=FFP1")
                        }}
                        disabled={loading}
                     >FFP1</button>
                     <button
                        className={httpProp === "?limit=20&field=defend&value=FFP2" ? "recom-navigation__button _active" : "recom-navigation__button"}
                        onClick={() => {
                           httpProp === "?limit=20&field=defend&value=FFP2" ? setHttpProp("?limit=20") : setHttpProp("?limit=20&field=defend&value=FFP2")
                        }}
                        disabled={loading}
                     >FFP2</button>
                     <button
                        className={httpProp === "?limit=20&field=defend&value=FFP3" ? "recom-navigation__button _active" : "recom-navigation__button"}
                        onClick={() => {
                           httpProp === "?limit=20&field=defend&value=FFP3" ? setHttpProp("?limit=20") : setHttpProp("?limit=20&field=defend&value=FFP3")
                        }}
                        disabled={loading}
                     >FFP3</button>
                     <button
                        className={httpProp === "?limit=20&field=brand&value=ZM" ? "recom-navigation__button _active" : "recom-navigation__button"}
                        onClick={() => {
                           httpProp === "?limit=20&field=brand&value=ZM" ? setHttpProp("?limit=20") : setHttpProp("?limit=20&field=brand&value=ZM")
                        }}
                        disabled={loading}
                     >3M</button>
                     <button
                        className={httpProp === "?limit=20&field=brand&value=Alina" ? "recom-navigation__button _active" : "recom-navigation__button"}
                        onClick={() => {
                           httpProp === "?limit=20&field=brand&value=Alina" ? setHttpProp("?limit=20") : setHttpProp("?limit=20&field=brand&value=Alina")
                        }}
                        disabled={loading}
                     >Алина</button>
                     <button
                        className={httpProp === "?limit=20&field=brand&value=Spirotek" ? "recom-navigation__button _active" : "recom-navigation__button"}
                        onClick={() => {
                           httpProp === "?limit=20&field=brand&value=Spirotek" ? setHttpProp("?limit=20") : setHttpProp("?limit=20&field=brand&value=Spirotek")
                        }}
                        disabled={loading}
                     >Spirotek</button>
                     <button
                        className={httpProp === "?limit=20&field=brand&value=KN95" ? "recom-navigation__button _active" : "recom-navigation__button"}
                        onClick={() => {
                           httpProp === "?limit=20&field=brand&value=KN95" ? setHttpProp("?limit=20") : setHttpProp("?limit=20&field=brand&value=KN95")

                        }}
                        disabled={loading}
                     >KN95</button>
                  </div>
                  : <div className="recomendation__recom-navigation recom-navigation">
                     <button
                        className={httpProp === "?limit=20&field=brand&value=ZM" ? "recom-navigation__button _active" : "recom-navigation__button"}
                        onClick={() => {
                           httpProp === "?limit=20&field=brand&value=ZM" ? setHttpProp("?limit=20") : setHttpProp("?limit=20&field=brand&value=ZM")
                        }}
                        disabled={loading}
                     >3M</button>
                     <button
                        className={httpProp === "?limit=20&field=brand&value=Alina" ? "recom-navigation__button _active" : "recom-navigation__button"}
                        onClick={() => {
                           httpProp === "?limit=20&field=brand&value=Alina" ? setHttpProp("?limit=20") : setHttpProp("?limit=20&field=brand&value=Alina")
                        }}
                        disabled={loading}
                     >Алина</button>
                     <button
                        className={httpProp === "?limit=20&field=brand&value=Spirotek" ? "recom-navigation__button _active" : "recom-navigation__button"}
                        onClick={() => {
                           httpProp === "?limit=20&field=brand&value=Spirotek" ? setHttpProp("?limit=20") : setHttpProp("?limit=20&field=brand&value=Spirotek")
                        }}
                        disabled={loading}
                     >Spirotek</button>
                     <button
                        className={httpProp === "?limit=20&field=brand&value=KN95" ? "recom-navigation__button _active" : "recom-navigation__button"}
                        onClick={() => {
                           httpProp === "?limit=20&field=brand&value=KN95" ? setHttpProp("?limit=20") : setHttpProp("?limit=20&field=brand&value=KN95")
                        }}
                        disabled={loading}
                     >KN95</button>
                  </div>
            }

            <div className="recomendation__content-wrap">
               <div className={masks.length <= 4 ? "smallswiper__prev _disactive" : "smallswiper__prev"} ><img src="../img/swiper_arrow.png" alt="swiper_arrow" /></div>
               <div className={masks.length <= 4 ? "smallswiper__next _disactive" : "smallswiper__next"}><img src="../img/swiper_arrow.png" alt="swiper_arrow" /></div>
               <div className="recomendation__content">
                  {loading === true
                     ? <Loader type="spinner-default" bgColor={"#4945FF"} title={"Загрузка..."} color={'#343434'} size={100} />
                     : masks.length === 0
                        ? <p className="recomendation__alert">Такого товара нет в наличии</p>
                        :
                        <Swiper
                           spaceBetween={0}
                           slidesPerView={masks.length > 4 ? 4 : masks.length}
                           navigation={
                              {
                                 prevEl: ".smallswiper__prev",
                                 nextEl: ".smallswiper__next"
                              }
                           }
                           breakpoints={{
                              0: {
                                 slidesPerView: masks.length >= 1 ? 1 : masks.length
                              },
                              780: {
                                 slidesPerView: masks.length >= 3 ? 2 : masks.length
                              },
                              1120: {
                                 slidesPerView: masks.length >= 4 ? 3 : masks.length
                              },
                              1460: {
                                 slidesPerView: masks.length > 4 ? 4 : masks.length
                              }
                           }}
                        >

                           {masks.map((mask, index) => {
                              return <SwiperSlide key={index}><Item mask={mask} popup={{ ...props }} /></SwiperSlide>
                           })}
                        </Swiper>

                  }
               </div>
            </div>

            <div className="recomendation__catalog-link-wrap">
               <Link to="/catalog" className="recomendation__catalog-link">Перейти в каталог</Link>
            </div>
         </div>
      </div >
   )
}

export default Recomendation
