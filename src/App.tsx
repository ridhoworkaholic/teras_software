import './App.css'
import { About, Contact, FAQ, Footer, Hero, Nav, Portfolio, Pricing, Process } from './components/landing';

function App() {
  return (
    <div className="min-h-screen">
      <Nav />
      <main>
        <Hero />
        <Portfolio />
        <Pricing />
        <Process />
        <About />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App
