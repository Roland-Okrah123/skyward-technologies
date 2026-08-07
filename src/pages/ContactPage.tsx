import {
  Mail,
  Phone,
  MapPin,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";

import ContactForm from "../components/ContactForm";


export default function ContactPage() {

  return (

    <main className="pt-20 bg-white min-h-screen">


      {/* Hero Section */}
      <section className="px-6 py-16 md:py-24 bg-gradient-to-br from-blue-50 via-white to-white">

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">


          {/* Left Content */}
          <div>

            <span
              className="
              inline-flex
              bg-blue-100
              text-blue-700
              px-4
              py-2
              rounded-full
              text-sm
              font-semibold
              "
            >
              Start Your Digital Journey
            </span>


            <h1
              className="
              mt-6
              text-4xl
              md:text-5xl
              font-extrabold
              text-slate-900
              leading-tight
              "
            >
              Let's Build Your Next
              <br />
              Digital Solution
            </h1>


            <p
              className="
              mt-6
              text-lg
              text-slate-600
              leading-relaxed
              max-w-xl
              "
            >
              Whether you need custom software, business automation,
              education technology, or digital transformation solutions,
              Skyward Technologies helps organizations build for the future.
            </p>


            <div className="mt-8 flex flex-wrap gap-4">


              <a
                href="#contact-form"
                className="
                bg-blue-600
                hover:bg-blue-700
                text-white
                px-7
                py-3
                rounded-xl
                font-semibold
                transition
                "
              >
                Get Free Consultation
              </a>


              <Link
                to="/services"
                className="
                border
                border-blue-600
                text-blue-600
                hover:bg-blue-50
                px-7
                py-3
                rounded-xl
                font-semibold
                transition
                "
              >
                View Services
              </Link>


            </div>


          </div>



          {/* Right Feature Card */}
          <div
            className="
            bg-white
            rounded-3xl
            border
            border-slate-100
            shadow-lg
            p-8
            "
          >

            <h2 className="text-2xl font-bold text-slate-900">
              Technology We Build
            </h2>


            <div className="mt-8 space-y-5">


              {[
                "Software Development",
                "Business Management Systems",
                "AI & Automation",
                "Web Applications",
                "Mobile Applications",
                "Cloud Solutions",
              ].map((item)=>(


                <div
                  key={item}
                  className="
                  flex
                  items-center
                  gap-4
                  "
                >

                  <div
                    className="
                    w-10
                    h-10
                    rounded-full
                    bg-blue-100
                    text-blue-600
                    flex
                    items-center
                    justify-center
                    font-bold
                    "
                  >
                    ✓
                  </div>


                  <span className="text-slate-700 font-medium">
                    {item}
                  </span>


                </div>


              ))}


            </div>


          </div>


        </div>


      </section>




      {/* Contact Information */}
      <section className="px-6 py-20">


        <div className="max-w-7xl mx-auto">


          <div className="grid md:grid-cols-3 gap-8">



            <div
              className="
              bg-white
              rounded-2xl
              border
              border-slate-100
              shadow-sm
              p-8
              text-center
              "
            >

              <Mail className="mx-auto text-blue-600" size={32}/>

              <h3 className="mt-5 text-xl font-bold text-slate-900">
                Email Us
              </h3>

              <p className="mt-3 text-slate-600 break-all">
                support.skywardtechnologies@gmail.com
              </p>


            </div>



            <div
              className="
              bg-white
              rounded-2xl
              border
              border-slate-100
              shadow-sm
              p-8
              text-center
              "
            >

              <Phone className="mx-auto text-blue-600" size={32}/>


              <h3 className="mt-5 text-xl font-bold text-slate-900">
                Call / WhatsApp
              </h3>


              <p className="mt-3 text-slate-600">
                +233 24 399 5107
              </p>


            </div>



            <div
              className="
              bg-white
              rounded-2xl
              border
              border-slate-100
              shadow-sm
              p-8
              text-center
              "
            >

              <MapPin className="mx-auto text-blue-600" size={32}/>


              <h3 className="mt-5 text-xl font-bold text-slate-900">
                Location
              </h3>


              <p className="mt-3 text-slate-600">
                Ghana
              </p>


            </div>


          </div>


        </div>


      </section>




      {/* Contact Form */}
      <section
        id="contact-form"
        className="px-6 pb-20"
      >

        <div className="max-w-7xl mx-auto">

          <ContactForm />

        </div>


      </section>




      {/* CTA */}
      <section
        className="
        bg-gradient-to-r
        from-blue-600
        to-blue-700
        py-16
        text-center
        text-white
        "
      >

        <div className="max-w-5xl mx-auto px-6">


          <h2 className="text-4xl font-extrabold">
            Ready To Build The Future?
          </h2>


          <p className="mt-4 text-blue-100 text-lg">
            Partner with Skyward Technologies and turn your ideas into powerful digital solutions.
          </p>


          <a
            href="#contact-form"
            className="
            inline-flex
            items-center
            gap-2
            mt-8
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

            Start Your Project

            <ArrowRight size={18}/>

          </a>


        </div>


      </section>



    </main>

  );

}