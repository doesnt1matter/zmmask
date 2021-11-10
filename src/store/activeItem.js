import { makeAutoObservable } from "mobx"

class ActiveItem {
   constructor() {
      makeAutoObservable(this)
   }

   id = ""

   changeId(id) {
      this.id = id
   }
   getId() {
      return this.id
   }
}

export default new ActiveItem()