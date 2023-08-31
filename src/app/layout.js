'use client';
import Footer from './components/Footer'
import Header from './components/Header'
import './globals.css'
import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';
import { useState } from 'react';


export default function RootLayout({ children }) {

  const [theme, setTheme] = useState(false);

  const themeHandle = ()=>{
    setTheme(prevCheck => !prevCheck)
  }


  return (
    <html  className={theme === true ? 'dark' : 'bg-light'}>
      <body>
        <Header themeOption={themeHandle}></Header>
        <ProgressBar height="4px" color="#fffd00" options={{ showSpinner: false }} shallowRouting/>
          <div className="container w-screen mx-auto px-4">
            {children}
          </div>
        <Footer></Footer>
      </body>
    </html>
  )
}
