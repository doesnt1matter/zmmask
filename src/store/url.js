import { makeAutoObservable } from "mobx"

class Url {
   constructor() {
      makeAutoObservable(this)
   }

   url = "https://zmmasks.herokuapp.com"

   // https://zmmasks.herokuapp.com
   // http://localhost:5000
}

export default new Url()