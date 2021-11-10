import React, { useState } from 'react'

const UnderHeader = (props) => {
   const [hidden, setHidden] = useState(false)
   return (
      <div className={props.hidden === false && hidden === false ? "under-header" : "under-header _hidden"}>
         <div className="under-header__wrap _container">
            <div className="under-header__info">
               <div className="under-header__geolocation">
                  <div className="under-header__img">
                     <img src="./img/geolocation.png" alt="geo" />
                  </div>
                  <p className="under-header__text">Москва</p>
               </div>
               <div className="under-header__time">
                  <div className="under-header__img">
                     <img src="./img/clock.png" alt="geo" />
                  </div>
                  <p className="under-header__text">Пн-Вс с 10.00 до 20.00</p>
               </div>
               <div className="under-header__email">
                  <div className="under-header__img">
                     <img src="./img/email.png" alt="geo" />
                  </div>
                  <p className="under-header__text">mask@mail.com</p>
               </div>
               <div
                  className={props.hidden === false ? "under-header__button" : "under-header__button _active"}
                  onClick={() => {
                     setHidden(!hidden)
                  }}
               ><img src="./img/arrow.png" alt="arrow" /></div>
            </div>
         </div>
      </div>
   )
}

export default UnderHeader
