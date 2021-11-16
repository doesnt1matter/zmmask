import React from 'react'
import { Link } from "react-router-dom"

const Wholesale = () => {
   return (
      <div className="wholesale">
         <div className="wholesale__wrap _container">
            <div className="wholesale__text-block">
               <div className="wholesale__title-wrap">
                  <p className="wholesale__title">Респираторы оптом со скидкой до 50%</p>
               </div>
               <div className="wholesale__subtitle">И доставкой в день заказа.</div>
               <Link to="/catalog"><button className="wholesale__button">Перейти в каталог</button></ Link>
            </div>
            <div className="wholesale__img-center">
               <img src="./img/wholesale__mask.png" alt="img" />
            </div>
            <div className="wholesale__img-rigth">
               <img src="./img/wholesale.png" alt="img" />
            </div>
         </div>
      </div>
   )
}

export default Wholesale
