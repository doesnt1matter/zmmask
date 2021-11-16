import { makeAutoObservable } from "mobx"

class Popup {
   constructor() {
      makeAutoObservable(this)
   }

   addVoice = false
   addCart = false
   alreadyAddCart = false
   addPhoneOrder = false

   changeAddVoice() {
      this.addVoice = !this.addVoice
   }
   changeAddCart() {
      this.addCart = !this.addCart
   }
   changeAlreadyAddCart() {
      this.alreadyAddCart = !this.alreadyAddCart
   }
   changeAddPhoneOrder() {
      this.addPhoneOrder = !this.addPhoneOrder
   }

}

export default new Popup()