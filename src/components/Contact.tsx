import {
  Mail,
  Phone,
  MapPin,
} from "lucide-react";


const Contact = () => {


  const contactInfo = [
    {
      title: "Email",
      value: "support.skywardtechnologies.com",
      icon: Mail,
    },

    {
      title: "Phone",
      value: "+233 24 399 5107",
      icon: Phone,
    },

    {
      title: "Location",
      value: "Ghana",
      icon: MapPin,
    },

  ];



  return (

    <>

      {/* CTA SECTION */}

      <section className="
      py-24
      bg-blue-600
      ">


        <div className="
        max-w-5xl
        mx-auto
        px-6
        text-center
        text-white
        ">


          <h2 className="
          text-4xl
          md:text-5xl
          font-bold
          ">

            Ready To Build The Future?

          </h2>


          <p className="
          mt-6
          text-blue-100
          text-lg
          ">

            Let's transform your ideas into powerful
            digital solutions.

          </p>



          <button
          className="
          mt-8
          bg-white
          text-blue-600
          px-8
          py-3
          rounded-xl
          font-semibold
          hover:bg-gray-100
          transition-colors
          "
          >

            Start A Project

          </button>


        </div>


      </section>





      {/* CONTACT INFO */}

      <section className="
      py-20
      bg-white
      ">


        <div className="
        max-w-7xl
        mx-auto
        px-6
        ">


          <div className="
          grid
          md:grid-cols-3
          gap-8
          ">


          {contactInfo.map((item)=>{


            const Icon = item.icon;


            return (

              <div
              key={item.title}
              className="
              p-8
              rounded-2xl
              border
              border-gray-100
              text-center
              "
              >


                <div className="
                mx-auto
                w-14
                h-14
                rounded-xl
                bg-blue-50
                flex
                items-center
                justify-center
                "
                >

                  <Icon
                  size={26}
                  className="text-blue-600"
                  />

                </div>



                <h3 className="
                mt-5
                font-bold
                text-gray-900
                ">

                  {item.title}

                </h3>



                <p className="
                mt-2
                text-gray-600
                ">

                  {item.value}

                </p>


              </div>

            );


          })}


          </div>


        </div>


      </section>





      {/* FOOTER */}

      <footer className="
      bg-gray-900
      text-gray-300
      py-12
      ">


        <div className="
        max-w-7xl
        mx-auto
        px-6
        ">


          <div className="
          grid
          md:grid-cols-3
          gap-10
          ">


            <div>

              <h3 className="
              text-white
              text-2xl
              font-bold
              ">

                Skyward Technologies

              </h3>


              <p className="
              mt-4
              text-gray-400
              ">

                Building innovative technology
                solutions for a smarter future.

              </p>

            </div>




            <div>

              <h4 className="text-white font-semibold">
                Company
              </h4>


              <ul className="mt-4 space-y-3">

                <li>About</li>
                <li>Services</li>
                <li>Products</li>
                <li>Contact</li>

              </ul>


            </div>




            <div>

              <h4 className="text-white font-semibold">
                Solutions
              </h4>


              <ul className="mt-4 space-y-3">

                <li>Business Suite</li>
                <li>EduOS</li>
                <li>AI Solutions</li>
                <li>Cloud Systems</li>

              </ul>


            </div>


          </div>



          <div className="
          mt-12
          pt-6
          border-t
          border-gray-700
          text-center
          text-sm
          "
          >

            © 2026 Skyward Technologies. All rights reserved.

          </div>


        </div>


      </footer>


    </>

  );

};


export default Contact;