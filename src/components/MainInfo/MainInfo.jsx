import React from 'react'

const MainInfo = () => {
   return (
      <div className="main-info">
         <div className="main-info__wrap _container">
            <div className="main-info__text-block">
               <div className="main-info__title-wrap">
                  <h1 className="main-info__title">Сертифицированные <br /> маски-респираторы</h1>
               </div>
               <p className="main-info__subtitle">В наличии с доставкой за 2 часа и оплатой по факту получения</p>
               <div className="main-info__advantage-block advantage-block">
                  <div className="advantage-block__item">
                     <div className="advantage-block__img">
                        <img src="./img/track.png" alt="track" />
                     </div>
                     <div className="advantage-block__text">
                        <p className="advantage-block__title">Самовывоз и отгрузки</p>
                        <p className="advantage-block__subtitle">Обладая фирменным магазином, предоставляем  возможность осуществить самовывоз.</p>
                     </div>
                  </div>
                  <div className="advantage-block__item">
                     <div className="advantage-block__img">
                        <img src="./img/money.png" alt="track" />
                     </div>
                     <div className="advantage-block__text">
                        <p className="advantage-block__title">Лучшие цены, оптовые продажи</p>
                        <p className="advantage-block__subtitle">Являемся прямым импортером и производителем.</p>
                     </div>
                  </div>
                  <div className="advantage-block__item">
                     <div className="advantage-block__img">
                        <img src="./img/main-info-mask.png" alt="main-info-mask" />
                     </div>
                     <div className="advantage-block__text">
                        <p className="advantage-block__title">Оригинальная продукция</p>
                        <p className="advantage-block__subtitle">Каждый респиратор имеет сертификат соответствия, что доказывает оригинальность продукции.</p>
                     </div>
                  </div>
                  <div className="advantage-block__item">
                     <div className="advantage-block__img">
                        <img src="./img/shield.png" alt="shield" />
                     </div>
                     <div className="advantage-block__text">
                        <p className="advantage-block__title">Защита до 99%</p>
                        <p className="advantage-block__subtitle">Респираторы применяются как при защите от COVID-19, так и в производственных и строительных целях.</p>
                     </div>
                  </div>
               </div>
               <p className="main-info__link-app">Ознакомьтесь  с нашим коммерческим предложением 3Маски КП</p>
               <div className="main-info__buttons">
                  <button className="main-info__catalog-link">Перейти в каталог</button>
                  <div className="main-info__round-button">
                     <button className="round-button__button">
                        <img src="./img/play.png" alt="play" />
                     </button>
                     <p className="round-button__text">Смотреть видео-презентацию</p>
                  </div>
               </div>
            </div>
            <div className="main-info__img-block">
               <img src="./img/main-img.jpg" alt="main-img" />
            </div>
         </div>
      </div>
   )
}

export default MainInfo
