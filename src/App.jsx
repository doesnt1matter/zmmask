import React from 'react'
import "./style/main.scss"

import popup from "./store/popup"

import "materialize-css"

import { Route } from 'react-router-dom'
import ScrollToTop from 'react-router-scroll-top'
import { Header, MainInfo, Recomendation, Detail, Footer, Cart, Popup, AddVoice, AddCart, AlreadyAddCart, Catalog, Order } from "./components/index"
import { observer } from 'mobx-react-lite'

const App = observer(() => {
  return (
    <div className="app">
      <Header />
      <ScrollToTop />

      <Route path="/main">
        <MainInfo />
        <Recomendation title={"Каталог в наличии"} />
      </Route>

      <Route path="/cart">
        <Cart />
        <Recomendation title={"Рекомендуем"} navigation={false} />
      </Route>

      <Route path="/catalog" exact>
        <Catalog />
      </Route>

      <Route path="/catalog/:id">
        <Detail />
      </Route>

      <Route path="/order">
        <Order />
      </Route>

      <Popup component={AddVoice} active={popup.addVoice} setActive={() => { popup.changeAddVoice() }} />
      <Popup component={AddCart} active={popup.addCart} setActive={() => { popup.changeAddCart() }} />
      <Popup component={AlreadyAddCart} active={popup.alreadyAddCart} setActive={() => { popup.changeAlreadyAddCart() }} />

      {/* <Redirect to="/main" /> */}
      <Footer />
    </div>
  )
})

export default App
