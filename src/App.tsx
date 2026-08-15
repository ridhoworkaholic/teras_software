import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import {
  Contact,
  Footer,
  Hero,
  Nav,
  Portfolio,
  Pricing,
} from "./components/landing";

import AboutUsPage from "./components/about/aboutUsPage";
import WorkPage from "./components/portofolio/portofolioPage";
import ServicesPage from "./components/service/servicePage";
import ServiceDetailPage from "./components/service/serviceDetailPage";

function HomePage() {
  return (
    <div className="min-h-screen">
      <Nav />

      <main>
        <Hero />
        <Portfolio />
        <Pricing />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/services" element={<ServicesPage />} />

        <Route path="/service/:slug" element={<ServiceDetailPage />} />

        <Route path="/works" element={<WorkPage />} />

        <Route path="/about" element={<AboutUsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
