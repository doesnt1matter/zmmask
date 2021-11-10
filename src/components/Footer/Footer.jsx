import React from 'react'

const Footer = () => {
   return (
      <div className="footer">
         <div className="footer__wrap _container">
            <div className="footer__contact-block footer-contact-block">
               <div className="footer-contact-block__title-wrap">
                  <h4 className="footer-contact-block__title">КОНТАКТЫ</h4>
               </div>
               <div className="footer-contact-block__adress footer-adress">
                  <div className="footer-adress__img">
                     <img src="./img/geolocation.png" alt="geolocation" />
                  </div>
                  <div className="footer-adress__text-block">
                     <div className="footer-adress__title">Наш адрес</div>
                     <div className="footer-adress__subtitle">Московская обл., Мытищи, Шараповский пр-д, 7 <br /> Санкт-Петербург, ул.Федора Абрамова, д.18</div>
                  </div>
               </div>
               <div className="footer-contact-block__telephone footer-telephone">
                  <div className="footer-adress__img">
                     <img src="./img/footer_tel.png" alt="tel" />
                  </div>
                  <div className="footer-telephone__text-block">
                     <div className="footer-telephone__title">Наш телефон</div>
                     <div className="footer-telephone__subtitle">8 (499) 322-76-55</div>
                  </div>
               </div>
               <div className="footer-contact-block__email footer-email">
                  <div className="footer-email__img">
                     <img src="./img/email.png" alt="email" />
                  </div>
                  <div className="footer-email__text-block">
                     <div className="footer-email__title">Наша почта</div>
                     <div className="footer-email__subtitle"> info@3maski.ru </div>
                  </div>
               </div>
            </div>
            <div className="footer__about-block footer-about-block">
               <div className="footer-about-block__title-wrap">
                  <h4 className="footer-about-block__title">О МАГАЗИНЕ</h4>
               </div>
               <h5 className="footer-about-block__subtitle">
                  Специализированный магазин сертифицированных, оригинальных защитных материалов для органов дыхания и защиты от вируса COVID-19
               </h5>
               <div className="footer-about-block__info about-info">
                  <div className="about-info__img">
                     <img src="./img/footer_user.png" alt="user" />
                  </div>
                  <div className="about-info__text-block">
                     <h5 className="about-info__title">ИП Корнев Иван Сергеевич</h5>
                     <p className="about-info__subtitle">
                        <span>Адрес офиса:</span> Московская область город Мытищи Шараповский проезд Строение 7 <br />
                        ИНН <br />
                        503809142008, <br />
                        ОГРН <br />
                        320508100210632, <br />
                        Расчетный счет <br />
                        40802810500001545520, <br />
                        Банк <br />
                        АО "ТИНЬКОФФ БАНК", <br />
                        ИНН банка <br />
                        7710140679, <br />
                        БИК банка <br />
                        044525974 <br />
                     </p>
                  </div>
               </div>
            </div>
            <div className="footer__img-block">
               <img src="./img/footer_img.png" alt="footer_img" />
            </div>
         </div>
      </div>
   )
}

export default Footer
