import React, { useState } from 'react'
import url from "../../store/url"
import popup from "../../store/popup"


const AddPhoneOrder = () => {
   const [form, setForm] = useState({
      name: "unknown",
      phone: ""
   })
   const [loading, setLoading] = useState(false)

   const changeHandler = (event) => {
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
      if (form.phone.split("").length < 11) {
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
         phone: ""
      })
      document.getElementById("phone").value = ""
      document.getElementById("phone").classList.remove("_error")
   }
   return (
      <div className="add-phone-order">
         <div className="add-phone-order__text-block">
            <div className="add-phone-order__title-wrap">
               <div className="add-phone-order__title">Закажите звонок</div>
            </div>
            <div className="add-phone-order__subtitle">Прямо сейчас</div>
            <input type="text" id="phone" name="phone" placeholder="+7 (000) 000-00-00"
               onChange={(event) => {
                  changeHandler(event)
               }} />
            <button
               className="add-phone-order__btn"
               loading={loading === true ? 1 : 0}
               onClick={() => {
                  fetchData()
                  clear()
                  popup.changeAddPhoneOrder()
               }}
            >Жду звонка</button>
         </div>
         <div className="add-phone-order__img-block">
            <img src="./img/add_phone_order.png" alt="add_phone_order" />
         </div>
      </div>
   )
}

export default AddPhoneOrder
