import Hero from "../components/Hero";
import About from "../components/About";
import ProductsSection from "../components/ProductsSection";
import IndustriesSection from "../components/IndustriesSection";
import PainPointsSection from "../components/PainPointsSection";
import Testimonials from "../components/Testimonials";
import { Link } from "react-router-dom";
import { getWhatsAppLink } from "../config/siteConfig";


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

      <section className="py-20">
        <ProductsSection />
      </section>

      <About />

      <section className="py-20 bg-slate-50">
        <IndustriesSection />
      </section>

      <section className="py-20">
        <PainPointsSection />
      </section>

      <section className="py-20 bg-slate-50">
        <Testimonials />
      </section>

      <section className="py-20 px-6">

        <div className="
          max-w-5xl
          mx-auto
          bg-gradient-to-r
          from-blue-600
          to-blue-700
          rounded-3xl
          text-center
          text-white
          px-8
          py-16
        ">

          <h2 className="text-3xl md:text-4xl font-extrabold">
            Your Business Has A Problem.
            <br />
            We Can Build The Solution.
          </h2>

          <p className="mt-5 text-blue-100 max-w-2xl mx-auto">
            Tell us what you're trying to improve, automate, or build.
            We'll help you determine the right technology solution.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">

            <Link
              to="/contact"
              className="
              bg-white
              text-blue-600
              px-8
              py-3
              rounded-xl
              font-bold
              hover:bg-blue-50
              transition
              "
            >
              Start A Conversation
            </Link>

            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="
              border
              border-white
              text-white
              px-8
              py-3
              rounded-xl
              font-bold
              hover:bg-white
              hover:text-blue-600
              transition
              "
            >
              Request A Consultation
            </a>

          </div>

        </div>

      </section>

    </main>

  );

}


export default Home;
