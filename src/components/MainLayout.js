import React from 'react'
import { Footer } from './Footer'
import { Header } from './Header'
import { SideMenu } from './side-menu/SideMenu.js'

export const MainLayout = ({children}) => {
  return (
    <>
    {/* header */}
        <Header/>

    {/* side menu */}
      <SideMenu />

        {/* main body */}
      <main className="page-main">{children}</main>

      {/* footer */}
      <Footer/>
    </>
  )
}
