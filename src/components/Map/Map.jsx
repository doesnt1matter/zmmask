import React, { useState } from 'react'
import url from "../../store/url"

const Map = () => {
   const [form, setForm] = useState({
      name: "",
      phone: ""
   })
   const [loading, setLoading] = useState(false)

   const changeHandler = (event) => {
      if (event.target.name === "name") {
         if (event.target.value.split("").length < 4 && event.target.value.split("").length !== 0) {
            event.target.classList.add("_error")
         }
         else {
            event.target.classList.remove("_error")
         }
      }
      if (event.target.name === "phone") {
         if (event.target.value.split("").length < 11 && event.target.value.split("").length !== 0) {
            event.target.classList.add("_error")
         }
         else {
            event.target.classList.remove("_error")
         }
      }

      setForm({ ...form, [event.target.name]: event.target.value })
   }
   const post = JSON.stringify({ ...form })
   const fetchData = async () => {
      if (form.name.split("").length < 4 || form.phone.split("").length < 11) {
         return window.M.toast({ html: '<div className="toast__error">"Некоректные данные! Форма не отправлена!"</div>', classes: "toast__error" })
      }
      setLoading(true)
      await fetch(`${url.url}/api/call/create`, {
         method: "POST",
         body: post,
         headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
         }
      })
      window.M.toast({ html: '<div className="toast__success">"Заявка прината! Ждите звонка"</div>', classes: "toast__success" })
      setLoading(false)
   }
   const clear = () => {
      setForm({
         name: "",
         phone: "",
      })
      document.getElementById("name").value = ""
      document.getElementById("name").classList.remove("_error")
      document.getElementById("phone").value = ""
      document.getElementById("phone").classList.remove("_error")
   }

   return (
      <div className="map">
         <div className="map__wrap _container">
            <div className="map__form map-form">
               <div className="map-form__title-wrap">
                  <div className="map-form__title">Закажите звонок</div>
               </div>
               <div className="map-form__subtitle">Прямо сейчас</div>
               <input
                  name="name"
                  id="name"
                  onChange={(event) => {
                     changeHandler(event)
                  }}
                  type="text" className="map-form__name" placeholder="Ваше имя" />
               <input
                  name="phone"
                  id="phone"
                  onChange={(event) => {
                     changeHandler(event)
                  }}
                  type="tel" className="map-form__phone" placeholder="Ваш телефон" maxLength="17" />
               <button
                  loading={loading ? 1 : 0}
                  className="map-form__button"
                  onClick={() => {
                     fetchData()
                     clear()
                  }}
               >Заказать</button>
            </div>

            <iframe title="zmmasks" src="https://yandex.ru/map-widget/v1/?um=constructor%3A46c674f50cc78c4e59aaacdc8af25db120d2eb7438adb2efae28239c657b0df3&amp;source=constructor" width="100%" height="400" frameBorder="0"></iframe>
         </div>
      </div>
   )
}

export default Map