import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { siteConfig } from "../config/siteConfig";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white w-full">

      <div className="max-w-7xl mx-auto px-6 py-12">


        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 items-start">


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
              {siteConfig.tagline} We design and build websites, business
              systems, and mobile applications for organizations in{" "}
              {siteConfig.location} and beyond.
            </p>


            <div className="flex gap-4 mt-5 text-sm">


              <a
                href={siteConfig.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Skyward Technologies on LinkedIn"
                className="text-slate-400 hover:text-blue-400"
              >
                LinkedIn
              </a>


              <a
                href={siteConfig.social.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Skyward Technologies on GitHub"
                className="text-slate-400 hover:text-white"
              >
                GitHub
              </a>


              <a
                href={siteConfig.social.x}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Skyward Technologies on X"
                className="text-slate-400 hover:text-blue-400"
              >
                X
              </a>


            </div>


          </div>




          {/* Solutions Column */}
          <div>
            <h3 className="text-lg font-semibold mb-5">Solutions</h3>

            <ul className="space-y-3 text-slate-300 text-sm">
              <li><Link to="/services" className="hover:text-white transition">Websites</Link></li>
              <li><Link to="/services" className="hover:text-white transition">Business Software</Link></li>
              <li><Link to="/services" className="hover:text-white transition">Mobile Apps</Link></li>
              <li><Link to="/products" className="hover:text-white transition">Our Products</Link></li>
              <li><Link to="/solutions" className="hover:text-white transition">Industry Solutions</Link></li>
            </ul>
          </div>




          {/* Company Column */}
          <div>
            <h3 className="text-lg font-semibold mb-5">Company</h3>

            <ul className="space-y-3 text-slate-300 text-sm">
              <li><Link to="/about" className="hover:text-white transition">About</Link></li>
              <li><Link to="/products" className="hover:text-white transition">Portfolio</Link></li>
              <li><Link to="/insights" className="hover:text-white transition">Insights</Link></li>
              <li><Link to="/contact" className="hover:text-white transition">Contact</Link></li>
            </ul>
          </div>




          {/* Contact / Support Column */}
          <div>

            <h3 className="text-lg font-bold mb-5">
              Get In Touch
            </h3>


            <div className="space-y-3 text-sm text-slate-400">


              <div>

                <p className="text-white">
                  Email
                </p>

                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-slate-400 hover:text-blue-400 transition break-all"
                >
                  {siteConfig.email}
                </a>
              </div>


              <div>

                <p className="text-white">
                  Phone / WhatsApp
                </p>

                <a
                  href={`tel:${siteConfig.phone}`}
                  className="text-slate-400 hover:text-blue-400 transition"
                >
                  {siteConfig.phoneDisplay}
                </a>

              </div>


              <div>

                <p className="text-white">
                  Location
                </p>

                <p>
                  {siteConfig.location} — Serving clients worldwide
                </p>

              </div>


            </div>


          </div>

        </div>




        <div className="border-t border-slate-800 mt-10 pt-5 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-500">

          <p>
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>

          <div className="flex gap-6">

            <Link to="/privacy-policy" className="hover:text-slate-300 transition">
              Privacy Policy
            </Link>

            <Link to="/terms-of-service" className="hover:text-slate-300 transition">
              Terms of Service
            </Link>

          </div>

        </div>


      </div>


    </footer>
  );
}
