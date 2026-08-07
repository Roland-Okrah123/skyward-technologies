import Hero from "../components/Hero";
import About from "../components/About";
import ProductsPage from "./ProductsPage";


function Home() {

  return (

    <main
  className="
  pb-16
  min-h-screen
  bg-white
  "
>

      <Hero />

      <ProductsPage />

      <About />

    </main>

  );

}


export default Home;