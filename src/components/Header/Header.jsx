import React, { useState, useEffect } from 'react'
import { UnderHeader } from "../index"

import { Link } from "react-router-dom"

import cart from "../../store/cart"
import { observer } from 'mobx-react-lite'

import { useHistory } from 'react-router-dom'

const Header = observer(() => {

   const [menuActive, setMenuActive] = useState(false)

   const [url, setUrl] = useState("/main")
   const history = useHistory()
   useEffect(() => {
      return history.listen((location) => {
         setUrl(location.pathname)
         setMenuActive(false)
      })
   }, [history])

   return (
      <header className="header">
         <UnderHeader hidden={menuActive} />
         <div className="header__wrap _container">
            <Link to="/main"><div className="header__logo"><span>ЗМ</span>аски<span>.ру</span></div></Link>
            <Link to="/catalog">
               <button
                  className="header__button"
                  data-da=".header__list,928,first"
                  onClick={() => {
                     setMenuActive(false)
                  }}
               >Каталог <div><span /></div></button>
            </Link>
            <div className={menuActive === false ? "header__list" : "header__list _active"}>
               <Link
                  to="/main" className={url === "/main" ? "header__link  _active" : "header__link"}
                  onClick={() => {
                     setMenuActive(false)
                  }}
               >Главная</Link>
               <Link
                  to="/deliver" className={url === "/deliver" ? "header__link _active" : "header__link "}
                  onClick={() => {
                     setMenuActive(false)
                  }}
               >Доставка</Link>
               <Link
                  to="/opt" className={url === "/opt" ? "header__link _active" : "header__link"}
                  onClick={() => {
                     setMenuActive(false)
                  }}
               >ОПТ</Link>
               <Link
                  to="/contacts" className={url === "/contacts" ? "header__link _active" : "header__link"}
                  onClick={() => {
                     setMenuActive(false)
                  }}
               >Контакты</Link>
               <Link
                  to="/defend" className={url === "/defend" ? "header__link _active" : "header__link"}
                  onClick={() => {
                     setMenuActive(false)
                  }}
               >Что защищает?</Link>
            </div>
            <Link
               to="/cart"
               onClick={() => {
                  if (menuActive === true) {
                     setMenuActive(false)
                  }
               }}
               className="header__cart-link"
            >
               <div className="header__cart" data-da=".header__list,490,last">
                  <div className="header__cart-img">
                     {url === "/cart" ? <img src="./img/cart.svg" alt="cart" /> : <img src="./img/cart_gray.png" alt="cart" />}
                  </div>
                  <div className="header__counters">
                     <div className="header__number">{cart.getTotalNumber()}</div>
                     <div className="header__cost">{cart.getTotalCost()} P</div>
                  </div>
                  <span>Корзина</span>
               </div>
            </Link>
            <div className="header__telephone telephone" data-da=".header__list,760,first">
               <button className="telephone__button">
                  <img src="./img/telephone.png" alt="telephone" />
               </button>
               <a className="telephone__number" href="tel:+79296228880">+7 929 622 88 80</a>
               <p className="telephone__text">Заказать звонок</p>
            </div>
            <div
               className="header__menu-wrap"
               onClick={() => {
                  setMenuActive(!menuActive)
               }}
            >
               <div className={menuActive === false ? "header__menu" : "header__menu _active"}><span /></div>
            </div>
         </div>
      </header>
   )
})

export default Header