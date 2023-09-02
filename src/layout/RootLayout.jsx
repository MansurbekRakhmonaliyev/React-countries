import { Outlet } from "react-router-dom"
import Header from "../components/header/Header"
import Footer from "../components/footer/Footer"
import { useEffect, useRef, useState } from "react"
import { useContext } from "react"
import { Context } from "../context/ThemeContext"
const RootLayout = () => {
  const {mode} = useContext(Context)
  
  return (
    <div className={`modeEl ${mode == 'light' ? '' : 'dark-mode'}`}>
      <Header/>
      <main className="main">
        <div className="container">
        <Outlet/>
        </div>
      </main>
      {/* <Footer/> */}
    </div>
  )
}

export default RootLayout
