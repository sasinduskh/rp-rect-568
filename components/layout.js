import React, { Children } from 'react'
import Nav from './Nav'
import SlideShow from './SlideShow'

export default function Layout({ children }) {
  return (
    <div>
      <Nav />
      <main>{children}</main>
    </div>
  )
}
