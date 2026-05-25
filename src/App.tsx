import { WHATSAPP_URL } from './data/products'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Products } from './components/Products'
import { Features } from './components/Features'
import { About } from './components/About'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Products />
        <Features />
        <About />
        <Contact />
      </main>
      <Footer whatsappUrl={WHATSAPP_URL} />
    </>
  )
}

export default App
