
import './globals.css'
import Header from './components/Header';
import Footer from './components/Footer';



export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <Header></Header>
          <div className="container w-screen mx-auto px-4">
            {children}
          </div>
        <Footer></Footer>
      </body>
    </html>
  )
}
