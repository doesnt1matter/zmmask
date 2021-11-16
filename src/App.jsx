import React from 'react'
import "./style/main.scss"

import popup from "./store/popup"

import "materialize-css"

import { Route } from 'react-router-dom'
import ScrollToTop from 'react-router-scroll-top'
import { Header, MainInfo, Recomendation, Detail, Footer, Cart, Popup, AddVoice, AddCart, AlreadyAddCart, Catalog, Order, Deliver, Wholesale, InLaw, Contacts, Map, Defend, AddPhoneOrder } from "./components/index"
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

      <Route exact path="/">
        <MainInfo />
        <Recomendation title={"Каталог в наличии"} />
      </Route>

      <Route path="/cart">
        <Cart />
        <Recomendation title={"Рекомендуем"} navigation={false} />
      </Route>

      <Route path="/deliver">
        <Deliver />
        <Map />
      </Route>

      <Route path="/opt">
        <Wholesale />
        <InLaw />
        <Recomendation title={<span>Скидка до 50% <br /> при оптовой закупке</span>} navigation={true} />
      </Route>

      <Route path="/catalog" exact>
        <Catalog />
      </Route>

      <Route path="/defend">
        <Defend />
        <Recomendation title={<span>Лучшая защита на 3MASKI.RU <br /> Все товары в наличии</span>} navigation={true} />
      </Route>

      <Route path="/contacts">
        <Contacts />
        <Map />
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
      <Popup component={AddPhoneOrder} active={popup.addPhoneOrder} setActive={() => { popup.changeAddPhoneOrder() }} />

      {/* <Redirect to="/main" /> */}
      <Footer />
    </div>
  )
})

export default App
