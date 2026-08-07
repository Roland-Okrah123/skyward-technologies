import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white w-full">

      <div className="max-w-7xl mx-auto px-6 py-12">


        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">


          {/* Brand Column */}
          <div>

            <div className="flex items-center gap-3 mb-4">

              <div className="bg-white rounded-md p-1.5">

                <img
                  src={logo}
                  alt="Skyward Technologies Logo"
                  className="w-16 h-16 object-contain"
                />

              </div>


            </div>


            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">

              Skyward Technologies provides modern technology solutions,
              software development, and digital services that help businesses
              grow and succeed in the digital world.

            </p>


            <div className="flex gap-4 mt-5 text-sm">


              <a
                href="https://www.linkedin.com/in/okrah-roland-8486792aa"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-blue-400"
              >
                LinkedIn
              </a>


              <a
                href="https://github.com/Roland-Okrah123"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white"
              >
                GitHub
              </a>


              <a
                href="https://x.com/roland_skyward"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-blue-400"
              >
                X
              </a>


            </div>


          </div>




          {/* Contact Column */}
          <div>


            <h3 className="text-lg font-bold mb-5">
              Contact Us
            </h3>


            <div className="space-y-3 text-sm text-slate-400">


              <div>

                <p className="text-white">
                  Email
                </p>

                <a
  href="mailto:support.skywardtechnologies@gmail.com"
  className="
    text-slate-400
    hover:text-blue-400
    transition
  "
>
  support.skywardtechnologies@gmail.com
</a>
              </div>


              <div>

                <p className="text-white">
                  Phone / WhatsApp
                </p>

                <a
                  href="tel:+233243995107"
                  className="text-slate-400 hover:text-blue-400 transition"
                >
                  +233 24 399 5107
                </a>

              </div>


              <div>

                <p className="text-white">
                  Location
                </p>

                <p>
                  Accra, Ghana — Serving clients worldwide
                </p>

              </div>


            </div>


          </div>





          {/* Quick Links Column */}
          <div>
  <h3 className="
    text-lg
    font-semibold
    mb-5
  ">
    Quick Links
  </h3>

  <ul className="
    space-y-3
    text-slate-300
  ">

    <li>
      <Link
        to="/"
        className="hover:text-white transition"
      >
        Home
      </Link>
    </li>


    <li>
      <Link
        to="/services"
        className="hover:text-white transition"
      >
        Services
      </Link>
    </li>


    <li>
      <Link
        to="/products"
        className="hover:text-white transition"
      >
        Products
      </Link>
    </li>


    <li>
      <Link
        to="/solutions"
        className="hover:text-white transition"
      >
        Solutions
      </Link>
    </li>


    <li>
      <Link
        to="/contact"
        className="hover:text-white transition"
      >
        Contact
      </Link>
    </li>

  </ul>
</div>

        </div>




        <div className="border-t border-slate-800 mt-10 pt-5 text-center text-sm text-slate-500">

          © {new Date().getFullYear()} Skyward Technologies. All rights reserved.

        </div>


      </div>


    </footer>
  );
}