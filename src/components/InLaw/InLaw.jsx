import React from 'react'

const InLaw = () => {
   return (
      <div className="inlaw">
         <div className="inlaw__wrap _container">
            <div className="inlaw__title-wrap">
               <div className="inlaw__title">Соответствие Федеральному <br /> закону от 01.04.2020 №98-ФЗ </div>
            </div>
            <div className="inlaw__subtitle">Специализированные защитные респираторы для защиты <br /> дыхательных путей</div>
            <div className="inlaw__content">
               <div className="inlaw__item inlaw-item">
                  <div className="inlaw-item__img">
                     <img src="./img/bank.png" alt="bank" />
                  </div>
                  <div className="inlaw-item__title">Всегда в наличии</div>
                  <div className="inlaw-item__subtitle">Собственный склад гарантирует наличие продукции и самовывоз для наших клиентов</div>
               </div>
               <div className="inlaw__item inlaw-item">
                  <div className="inlaw-item__img">
                     <img src="./img/inlaw_card.png" alt="card" />
                  </div>
                  <div className="inlaw-item__title">Оплата по безналичному расчету</div>
                  <div className="inlaw-item__subtitle">Весь заказанный товар вы оплачиваете через банк и получаете товарную накладную ТОРГ 12</div>
               </div>
               <div className="inlaw__item inlaw-item">
                  <div className="inlaw-item__img">
                     <img src="./img/inlaw_mask.png" alt="mask" />
                  </div>
                  <div className="inlaw-item__title">Оригинальная продукция</div>
                  <div className="inlaw-item__subtitle">Каждый товар имеет сертификат соответствия</div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default InLaw
