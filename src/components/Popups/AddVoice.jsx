import React, { useState } from 'react'

import activeItem from "../../store/activeItem"
import popup from "../../store/popup"
import url from "../../store/url"

const AddVoice = () => {
   const [rating, setRating] = useState(0)
   const [form, setForm] = useState({
      user: "",
      rating: rating,
      text: ""
   })
   const changeHandler = (event) => {
      setForm({ ...form, [event.target.name]: event.target.value })
      if (event.target.value.split("").length < 4) {
         console.log(event.target.value.split(""));
         event.target.classList.add("_error")
      }
      else {
         event.target.classList.remove("_error")
      }
   }

   let [stars, setStars] = useState(
      ["stars__star", "stars__star", "stars__star", "stars__star", "stars__star"]
   )
   const changeStars = (number) => {
      let counter = 0
      let massive = ["stars__star", "stars__star", "stars__star", "stars__star", "stars__star"]
      while (counter < number) {
         massive.push("stars__star _active")
         counter++
      }
      massive = massive.reverse().slice(0, 5)
      setStars(massive)
   }

   const [loading, setLoading] = useState(false)
   let post = JSON.stringify({ ...form, id: activeItem.id, rating: rating })
   const fetchData = async () => {
      if (form.user.split("").length < 4 || form.text.split("").length < 4) {
         return window.M.toast({ html: '<div className="toast__error">"Некоректные данные! Форма не отправлена!"</div>', classes: "toast__error" })
      }

      setLoading(true)
      await fetch(`${url.url}/api/mask/voice`, {
         method: "POST",
         body: post,
         headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
         }
      })
      window.M.toast({ html: '<div className="toast__success">"Форма отправлена!"</div>', classes: "toast__success" })
      setLoading(false)
   }

   return (
      <div className="voice-popup">
         <div className="voice-popup__title-wrap">
            <h2 className="voice-popup__title">Напишите свой отзыв</h2>
         </div>
         <div className="voice-popup__rating voice-popup-rating">
            <h4 className="voice-popup-rating__title">Ваша оценка</h4>
            <div className="voice-popup-rating__stars">{stars.map((item, index) => {
               return <div key={index} className={`${item} voice-popup-rating__item`}
                  onClick={() => {
                     setRating(index + 1)
                     changeStars(index + 1)
                  }} />
            })}</div>
         </div>
         <div className="voice-popup__fields voice-popup-fields">
            <input
               type="text"
               className="voice-popup-fields__name"
               placeholder="Ваше имя"
               name="user"
               id="user"
               maxLength="200"
               minLength="4"
               onChange={(event) => { changeHandler(event) }} />
            <input
               type="text"
               className="voice-popup-fields__text"
               placeholder="Ваш отзыв"
               name="text"
               id="text"
               maxLength="200"
               minLength="4"
               onChange={(event) => { changeHandler(event) }} />
         </div>
         <button
            className="voice-popup__button"
            onClick={() => {
               fetchData()
               popup.changeAddVoice()
               setRating(0)
               changeStars(0)
               setForm({
                  user: "",
                  rating: rating,
                  text: ""
               })
               document.getElementById("user").value = ""
               document.getElementById("user").classList.remove("_error")
               document.getElementById("text").value = ""
               document.getElementById("text").classList.remove("_error")
            }}
            disabled={loading}
         >Добавить отзыв</button>
         <div className="voice-popup__image">
            <img src="../img/note.png" alt="note" />
         </div>
      </div>
   )
}

export default AddVoice
