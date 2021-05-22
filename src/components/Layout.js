import React, { useState } from "react"
import Navbar from "./Navbar"
import Sidebar from "./Sidebar"
import Footer from "./Footer"

import "../assets/css/main.css"

const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleSidebar = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      {/* we pass the toggle function to nav bar, so when state changes here, it will make its way down to the sidebar component */}
      <Navbar toggleSidebar={toggleSidebar} />
      {/* we'll pass the state value down to the sidebar component so the sidebar can act accordingly */}
      {/* and toggle sidebar for the close button */}
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
      {children}
      <Footer />
    </>
  )
}

export default Layout
