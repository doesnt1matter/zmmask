import { makeAutoObservable } from "mobx"

class Popup {
   constructor() {
      makeAutoObservable(this)
   }

   addVoice = false
   addCart = false
   alreadyAddCart = false

   changeAddVoice() {
      this.addVoice = !this.addVoice
   }
   changeAddCart() {
      this.addCart = !this.addCart
   }
   changeAlreadyAddCart() {
      this.alreadyAddCart = !this.alreadyAddCart
   }

}

export default new Popup()