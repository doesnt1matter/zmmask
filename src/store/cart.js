import { makeAutoObservable } from "mobx"
import popup from "./popup"

class Cart {
   constructor() {
      makeAutoObservable(this)
   }

   cart = []

   addToCart(id, mask) {
      let massive = this.cart.filter(item => {
         return item.id === id
      })

      if (massive.length > 0) {
         popup.changeAlreadyAddCart()
      }
      else {
         this.cart.push(mask)
         popup.changeAddCart()
      }
   }

   getTotalCost() {
      let massive = []
      this.cart.map(item => {
         return massive.push(item.cost)
      })
      let result = massive.reduce(function (total, value) {
         return total + value;
      }, 0);
      return Math.ceil(result)
   }

   getTotalNumber() {
      return this.cart.length
   }

   increment(id) {
      const mask = this.cart.filter(item => {
         return item.id === id
      })
      if (mask[0].number < 20) {
         mask[0].number++
         mask[0].cost = Math.ceil((mask[0].defaultCost - (mask[0].defaultCost * (mask[0].discount / 100))) * mask[0].number)
      }
   }

   decrement(id) {
      const mask = this.cart.filter(item => {
         return item.id === id
      })
      if (mask[0].number > 1) {
         mask[0].number--
         mask[0].cost = Math.ceil((mask[0].defaultCost - (mask[0].defaultCost * (mask[0].discount / 100))) * mask[0].number)
      }
   }

   getTotalDiscount() {
      let massive = []
      this.cart.map(item => {
         return massive.push(Math.floor((item.defaultCost * item.number * (item.discount / 100))))
      })

      if (massive.length !== 0) {
         massive = massive.reduce((previousValue, currentValue) => previousValue + currentValue)
      }
      else {
         massive = 0
      }
      return massive
   }

   getTotalCostWithout() {
      let massive = []
      this.cart.map(item => {
         return massive.push(item.defaultCost * item.number)
      })
      let result = massive.reduce(function (total, value) {
         return total + value;
      }, 0);
      return result
   }

   toggleChecked(id) {
      let mask = this.cart.filter((item) => {
         return item.id === id
      })

      mask[0].checked = !mask[0].checked
      console.log(mask);
   }

   isAllChecked() {
      let massive = []
      this.cart.map(item => {
         return massive.push(item.checked)
      })
      if (massive.includes(false) || massive.length === 0) {
         return false
      }
      else {
         return true
      }
   }

   checkAll(check) {
      this.cart.map(item => {
         return item.checked = check
      })
   }

   deleteOne(id) {
      this.cart = this.cart.filter(item => {
         return item.id !== id
      })
      return this.cart
   }

   deleteChecked() {
      this.cart = this.cart.filter(item => {
         return item.checked !== true
      })
      console.log(this.cart);
      return this.cart
   }
   clear() {
      return this.cart = []
   }
}

export default new Cart()