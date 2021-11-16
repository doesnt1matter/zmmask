import React from 'react'

const Deliver = () => {
   return (
      <div className="deliver">
         <div className="deliver__wrap _container">
            <div className="deliver__title-wrap">
               <div className="deliver__main-title">Условия доставки и самовывоза</div>
            </div>
            <div className="deliver__condition deliver-conditions">
               <div className="deliver-conditions__item">
                  <div className="deliver-conditions__number">01</div>
                  <div className="deliver-conditions__content">
                     <img src="./img/track.png" alt="track" />
                     <div className="deliver-conditions__info">
                        <div className="deliver-conditions__title">Доставка</div>
                        <p className="deliver-conditions__text">В пределах МКАД <span>—350 ₽.</span></p>
                        <p className="deliver-conditions__text">За пределами МКАД <span>—350 ₽ + 25 ₽/км.</span></p>
                        <p className="deliver-conditions__text">В Мытищи и Королев мы доставляем бесплатно, минимальная сумма заказа <span>1000₽.</span></p>
                     </div>
                  </div>
               </div>
               <div className="deliver-conditions__item">
                  <div className="deliver-conditions__number">02</div>
                  <div className="deliver-conditions__content">
                     <img src="./img/car.png" alt="car" />
                     <div className="deliver-conditions__info">
                        <div className="deliver-conditions__title">Самовывоз</div>
                        <p className="deliver-conditions__text">Вы можете забрать нужный вам товар в нашем офисе — <span>бесплатно—350 ₽.</span></p>
                     </div>
                  </div>
               </div>
               <div className="deliver-conditions__item">
                  <div className="deliver-conditions__number">03</div>
                  <div className="deliver-conditions__content">
                     <img src="./img/plane.png" alt="plane" />
                     <div className="deliver-conditions__info">
                        <div className="deliver-conditions__title">По России</div>
                        <p className="deliver-conditions__text">Доставка осуществляется через транспортную компанию по выбору клиента отгрузка товара осуществляется в течение <span>15 минут.</span></p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div >
   )
}

export default Deliver
