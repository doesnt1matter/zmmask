const menuWrap = document.querySelector(".header__menu-wrap")
const menu = document.querySelector(".header__menu-wrap")
const cartLink = document.querySelector(".header__cart")
const links = document.querySelectorAll(".header__link")
const catalogbtn = document.querySelector(".header__button")

menuWrap.addEventListener("click", () => {
   document.body.classList.toggle("_lock")
})

cartLink.addEventListener("click", () => {
   document.body.classList.remove("_lock")
})

links.forEach(item => {
   item.addEventListener("click", () => {
      document.body.classList.remove("_lock")
   })
})

catalogbtn.addEventListener("click", () => {
   document.body.classList.remove("_lock")
})