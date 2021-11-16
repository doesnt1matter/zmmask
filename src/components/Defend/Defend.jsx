import React from 'react'
import { Link } from "react-router-dom"

const Defend = () => {
   return (
      <div className="defend">
         <div className="defend__wrap _container">
            <div className="defend__text-block">
               <div className="defend__title-wrap">
                  <div className="defend__title">Маска от COVID-19 <br /> Какая помогает, а какая вредит?</div>
               </div>
               <div className="defend__subtitle">Статистика COVID-19 в России</div>
               <div className="defend__statistic defend-statistic">
                  <div className="defend-statistic__item">
                     <div className="defend-statistic__img">
                        <img src="./img/popup_verefied.png" alt="verefied" />
                     </div>
                     <div className="defend-statistic__text">
                        <div className="defend-statistic__title">2522450</div>
                        <div className="defend-statistic__subtitle">Зараженных</div>
                     </div>
                  </div>
                  <div className="defend-statistic__item">
                     <div className="defend-statistic__img">
                        <img src="./img/popup_verefied.png" alt="verefied" />
                     </div>
                     <div className="defend-statistic__text">
                        <div className="defend-statistic__title">535300</div>
                        <div className="defend-statistic__subtitle">Вылечившихся</div>
                     </div>
                  </div>
                  <div className="defend-statistic__item">
                     <div className="defend-statistic__img">
                        <img src="./img/popup_verefied.png" alt="verefied" />
                     </div>
                     <div className="defend-statistic__text">
                        <div className="defend-statistic__title">23050</div>
                        <div className="defend-statistic__subtitle">Погибших</div>
                     </div>
                  </div>

               </div>
               <Link to="/catalog">
                  <button className="defend__btn">Перейти в каталог</button>
               </ Link>
            </div>
            <div className="defend__img-block">
               <img src="./img/defend.jpg" alt="defend" />
            </div>
         </div>
      </div>
   )
}

export default Defend
