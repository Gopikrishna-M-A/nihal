import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Products from "../components/Products";
import Materials from "../components/Materials";
import ContactUs from "../components/ContactUs";
import Footer from "../components/Footer";


export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Products />
      <Materials  />
      <ContactUs />
      <Footer />
    </div>
  )
}
