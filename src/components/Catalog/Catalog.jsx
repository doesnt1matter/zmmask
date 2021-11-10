import React, { useState, useEffect } from 'react'

import { Item, SmallSwiper } from "../index"

import Loader from "react-js-loader"

import url from "../../store/url"

const Catalog = () => {
   const [selectItem, setSelectItem] = useState("Popular")
   const [selectMenuActive, setSelectMenuActive] = useState(false)

   const [field, setField] = useState(undefined)
   const [value, setValue] = useState(undefined)

   let limit = 3
   const [page, setPage] = useState(1)
   const [path, setPath] = useState(`${url.url}/api/mask/catalog?page=${page}&sort=${selectItem}&limit=${limit}&field=${field}&value=${value}`)
   const [loading, setLoading] = useState(false)
   const [masks, setMasks] = useState([])
   const [allMasks, setAllMasks] = useState([])
   const [navigation, setNavigation] = useState(1)
   useEffect(() => {
      setLoading(true)
      const fetchData = async () => {
         await fetch(path)
            .then(response => response.json())
            .then(response => {
               setNavigation(response.navigation);
               setMasks(response.data)
            })
         setLoading(false)
      }
      fetchData()
      // return () => {
      //    setMasks({})
      // }
   }, [path])

   useEffect(() => {
      setLoading(true)
      const fetchData = async () => {
         await fetch(`${url.url}/api/mask/all`)
            .then(response => response.json())
            .then(response => {
               setAllMasks(response.data)
            })
         setLoading(false)
      }
      fetchData()
      return () => {
         setAllMasks({})
      }
   }, [setLoading])

   let navigationMassive = []
   let counter = 0
   while (counter < Math.ceil(navigation / limit)) {
      navigationMassive.push(undefined)
      counter++
   }

   return (
      <div className="catalog">
         {masks.length === 0 && loading === true
            ? <Loader type="spinner-default" bgColor={"#4945FF"} title={"Загрузка..."} color={'#343434'} size={100} />
            : <div className="catalog__wrap _container">
               <div className="catalog__title" id="title">Респираторы</div>
               <SmallSwiper masks={allMasks} loading={loading} id="swiper" />
               <div className="catalog__content catalog-content">
                  <div className="catalog-content__navigation catalog-content-navigation">
                     <div
                        className="catalog-content-navigation__select"
                        onClick={() => {
                           setSelectMenuActive(!selectMenuActive)
                        }}
                     >{selectItem}</div>
                     <div className={selectMenuActive === false ? "catalog-content-navigation__select-menu catalog-select-menu" : "catalog-content-navigation__select-menu catalog-select-menu _active"}>
                        <div
                           className={selectItem === "Popular" ? "catalog-select-menu__item _selected" : "catalog-select-menu__item"}
                           onClick={() => {
                              setSelectItem("Popular")
                              setPath(`${url.url}/api/mask/catalog?page=${page}&sort=Popular&limit=${limit}&field=${field}&value=${value}`)
                              setSelectMenuActive(!selectMenuActive)
                           }}
                        >Popular</div>
                        <div
                           className={selectItem === "Сheap first" ? "catalog-select-menu__item _selected" : "catalog-select-menu__item"}
                           onClick={() => {
                              setSelectItem("Сheap first")
                              setPath(`${url.url}/api/mask/catalog?page=${page}&sort=Сheap first&limit=${limit}&field=${field}&value=${value}`)
                              setSelectMenuActive(!selectMenuActive)
                           }}
                        >Сheap first</div>
                        <div
                           className={selectItem === "Dear first" ? "catalog-select-menu__item _selected" : "catalog-select-menu__item"}
                           onClick={() => {
                              setSelectItem("Dear first")
                              setPath(`${url.url}/api/mask/catalog?page=${page}&sort=Dear first&limit=${limit}&field=${field}&value=${value}`)
                              setSelectMenuActive(!selectMenuActive)
                           }}
                        >Dear first</div>
                        <div
                           className={selectItem === "New" ? "catalog-select-menu__item _selected" : "catalog-select-menu__item"}
                           onClick={() => {
                              setSelectItem("New")
                              setPath(`${url.url}/api/mask/catalog?page=${page}&sort=New&limit=${limit}&field=${field}&value=${value}`)
                              setSelectMenuActive(!selectMenuActive)
                           }}
                        >New</div>
                        <div
                           className={selectItem === "Stock" ? "catalog-select-menu__item _selected" : "catalog-select-menu__item"}
                           onClick={() => {
                              setSelectItem("Stock")
                              setPath(`${url.url}/api/mask/catalog?page=${page}&sort=Stock&limit=${limit}&field=${field}&value=${value}`)
                              setSelectMenuActive(!selectMenuActive)
                           }}
                        >Stock</div>
                        <div
                           className={selectItem === "Hit" ? "catalog-select-menu__item _selected" : "catalog-select-menu__item"}
                           onClick={() => {
                              setSelectItem("Hit")
                              setPath(`${url.url}/api/mask/catalog?page=${page}&sort=Hit&limit=${limit}&field=${field}&value=${value}`)
                              setSelectMenuActive(!selectMenuActive)
                           }}
                        >Hit</div>
                     </div>
                     <button
                        className={value === "Aura" ? "catalog-content-navigation__filter-btn _active" : "catalog-content-navigation__filter-btn"}
                        onClick={() => {
                           let title = document.getElementById('title').clientHeight
                           let swiper = document.getElementById('smallswiper').clientHeight
                           window.scrollTo({
                              top: title + swiper + 110,
                              behavior: 'smooth'
                           })
                           return value !== "Aura"
                              ? (setPath(`${url.url}/api/mask/catalog?page=1&sort=${selectItem}&limit=${limit}&field=brand&value=Aura`),
                                 setField("brand"),
                                 setValue("Aura"),
                                 setPage(1))
                              : (setPath(`${url.url}/api/mask/catalog?page=1&sort=${selectItem}&limit=${limit}&field=undefined&value=undefined`),
                                 setField(undefined),
                                 setValue(undefined),
                                 setPage(1))
                        }}
                     >ЗМ</button>
                     <button
                        className={value === "Alina" ? "catalog-content-navigation__filter-btn _active" : "catalog-content-navigation__filter-btn"}
                        onClick={() => {
                           let title = document.getElementById('title').clientHeight
                           let swiper = document.getElementById('smallswiper').clientHeight
                           window.scrollTo({
                              top: title + swiper + 110,
                              behavior: 'smooth'
                           })
                           return value !== "Alina"
                              ? (setPath(`${url.url}/api/mask/catalog?page=1&sort=${selectItem}&limit=${limit}&field=brand&value=Alina`),
                                 setField("brand"),
                                 setValue("Alina"),
                                 setPage(1))
                              : (setPath(`${url.url}/api/mask/catalog?page=1&sort=${selectItem}&limit=${limit}&field=undefined&value=undefined`),
                                 setField(undefined),
                                 setValue(undefined),
                                 setPage(1))
                        }}
                     >Алина</button>
                     <button
                        onClick={() => {
                           let title = document.getElementById('title').clientHeight
                           let swiper = document.getElementById('smallswiper').clientHeight
                           window.scrollTo({
                              top: title + swiper + 110,
                              behavior: 'smooth'
                           })
                           return value !== "Spirotek"
                              ? (setPath(`${url.url}/api/mask/catalog?page=1&sort=${selectItem}&limit=${limit}&field=brand&value=Spirotek`),
                                 setField("brand"),
                                 setValue("Spirotek"),
                                 setPage(1))
                              : (setPath(`${url.url}/api/mask/catalog?page=1&sort=${selectItem}&limit=${limit}&field=undefined&value=undefined`),
                                 setField(undefined),
                                 setValue(undefined),
                                 setPage(1))
                        }}
                        className={value === "Spirotek" ? "catalog-content-navigation__filter-btn _active" : "catalog-content-navigation__filter-btn"}
                     >Spirotek</button>
                  </div>
                  <div className="catalog-content__items">
                     {loading === true
                        ? <Loader type="spinner-default" bgColor={"#4945FF"} title={"Загрузка..."} color={'#343434'} size={100} />
                        : masks.length !== 0
                           ? masks.map((mask, index) => {
                              return <Item mask={mask} key={index} />
                           })
                           : <p className="catalog__alert">Такого товара нет в наличии...</p>
                     }
                  </div>
                  <div className="catalog-content__pagination pagination">
                     {navigationMassive.map((item, index) => {
                        return <div
                           key={index + 1}
                           className={page === index + 1 ? "pagination__item _active" : "pagination__item"}
                           onClick={() => {
                              setPage(index + 1)
                              setPath(`${url.url}/api/mask/catalog?page=${index + 1}&sort=${selectItem}&limit=${limit}`)
                              let title = document.getElementById('title').clientHeight
                              let swiper = document.getElementById('smallswiper').clientHeight
                              console.log(title + swiper);
                              window.scrollTo({
                                 top: title + swiper + 110,
                                 behavior: 'smooth'
                              })
                           }}
                        >{index + 1}</div>
                     })}
                  </div>
               </div>
            </div>
         }
      </div >
   )
}

export default Catalog
