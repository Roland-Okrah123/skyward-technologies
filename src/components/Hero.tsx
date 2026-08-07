import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <section className="min-h-screen bg-white pt-28">

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">


        {/* LEFT SIDE */}

        <div>

          <span className="inline-block px-4 py-2 rounded-full bg-blue-50 text-blue-600 text-sm font-semibold">
            Innovative Digital Solutions
          </span>


          <h1 className="mt-6 text-5xl md:text-6xl font-bold leading-tight text-gray-900">

            Building Technology
            <br />

            <span className="text-blue-600">
              That Moves Businesses Forward
            </span>

          </h1>


          <p className="mt-6 text-lg text-gray-600 max-w-xl">

            Skyward Technologies designs modern software solutions,
            business systems, and digital platforms that empower
            organizations — from Ghana to the rest of the world — to
            work smarter and grow faster.

          </p>

          <div className="mt-6 flex items-center gap-2 text-sm font-medium text-gray-500">
            <span className="w-2 h-2 rounded-full bg-blue-600" />
            Proudly built in Ghana, serving clients worldwide
          </div>


<div className="mt-8 flex gap-4">


  <Link
    to="/contact"
    className="
    bg-blue-600
    text-white
    px-8
    py-3
    rounded-xl
    font-semibold
    hover:bg-blue-700
    transition
    "
  >
    Start A Project
  </Link>



  <Link
    to="/products"
    className="
    border
    border-gray-300
    px-8
    py-3
    rounded-xl
    font-semibold
    hover:border-blue-600
    hover:text-blue-600
    transition
    "
  >
    View Solutions
  </Link>


</div>
          


        </div>




        {/* RIGHT SIDE VISUAL */}

        <div className="relative">


          <div className="
          bg-gradient-to-br
          from-blue-600
          to-blue-400
          rounded-3xl
          p-10
          shadow-2xl">


            <div
className="
bg-white
rounded-2xl
px-10
py-8
shadow-sm
"
>


              <h2 className="text-2xl font-bold text-gray-900">

                Digital Innovation

              </h2>


              <div className="mt-6 space-y-4">


                <div className="
px-6
py-4
bg-gray-50
rounded-xl
border
border-gray-100
">
                  Software Development
                </div>


                <div className="p-4 bg-gray-50 rounded-xl">
                  AI & Automation
                </div>


                <div className="p-4 bg-gray-50 rounded-xl">
                  Business Systems
                </div>


              </div>


            </div>


          </div>


        </div>


      </div>

    </section>
  );
};


export default Hero;