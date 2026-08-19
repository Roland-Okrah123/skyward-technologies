import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X, ArrowRight } from "lucide-react";
import logo from "../assets/logo.png";

function Navbar() {

  const [open, setOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Products", path: "/products" },
    { name: "Solutions", path: "/solutions" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];


  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-md shadow-sm">

      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">


        {/* Logo */}
        <NavLink 
          to="/"
          className="flex items-center gap-3"
        >
          <img
            src={logo}
            alt="Skyward Technologies Logo"
            className="h-10 w-10 object-contain"
          />

          <div>
            <h1 className="text-xl font-bold text-blue-700">
              Skyward
            </h1>

            <p className="text-xs text-gray-500 -mt-1">
              Technologies
            </p>
          </div>

        </NavLink>



        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">

          {navLinks.map((link)=>(
            <NavLink
              key={link.name}
              to={link.path}
              className={({isActive}) =>
                `
                text-sm font-medium transition-all duration-300
                ${
                  isActive
                  ? "text-blue-700"
                  : "text-gray-600 hover:text-blue-600"
                }
                `
              }
            >
              {link.name}
            </NavLink>
          ))}


          <NavLink
            to="/contact"
            className="
            flex items-center gap-2
            bg-blue-700
            text-white
            px-5 py-2.5
            rounded-lg
            text-sm
            font-semibold
            hover:bg-blue-800
            transition
            "
          >
            Get Started
            <ArrowRight size={16}/>
          </NavLink>


        </div>




        {/* Mobile Button */}
        <button
          onClick={()=>setOpen(!open)}
          className="md:hidden text-blue-700"
        >
          {
            open 
            ? <X size={28}/>
            : <Menu size={28}/>
          }

        </button>

      </div>



      {/* Mobile Menu */}
      {
        open && (

          <div className="
          md:hidden
          bg-white
          border-t
          px-6
          py-6
          space-y-5
          ">


            {
              navLinks.map((link)=>(

                <NavLink
                  key={link.name}
                  to={link.path}
                  onClick={()=>setOpen(false)}
                  className={({isActive})=>
                  `
                  block text-sm font-medium
                  ${
                    isActive
                    ? "text-blue-700"
                    : "text-gray-600"
                  }
                  `
                  }
                >

                  {link.name}

                </NavLink>

              ))
            }



            <NavLink
              to="/contact"
              onClick={()=>setOpen(false)}
              className="
              block
              text-center
              bg-blue-700
              text-white
              py-3
              rounded-lg
              font-semibold
              "
            >
              Get Started
            </NavLink>


          </div>

        )
      }


    </nav>
  );
}


export default Navbar;