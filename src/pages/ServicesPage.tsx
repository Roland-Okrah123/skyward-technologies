import { Link } from "react-router-dom";


export default function ServicesPage() {

  const services = [
    {
      title: "Software Development",
      description:
        "We design and develop custom software solutions that help businesses automate processes, improve productivity, and solve complex challenges.",
      features: [
        "Custom business applications",
        "Database-driven systems",
        "API development",
        "System automation",
      ],
    },


    {
      title: "Website Development",
      description:
        "We create modern, responsive, and high-performance websites that help organizations establish a strong digital presence.",
      features: [
        "Corporate websites",
        "E-commerce platforms",
        "Web applications",
        "Landing pages",
      ],
    },


    {
      title: "Mobile Application Development",
      description:
        "We build mobile solutions that allow businesses and organizations to connect with users anywhere.",
      features: [
        "Android applications",
        "Mobile business solutions",
        "User-friendly interfaces",
        "Mobile integrations",
      ],
    },


    {
      title: "Business Management Systems",
      description:
        "We create digital systems that help businesses manage operations efficiently.",
      features: [
        "POS systems",
        "Inventory management",
        "Customer management",
        "Sales reporting",
      ],
    },


    {
      title: "Education Technology Solutions",
      description:
        "We develop smart education platforms that simplify school administration and improve learning experiences.",
      features: [
        "Student management",
        "Digital attendance",
        "Exams and results management",
        "Learning platforms",
      ],
    },


    {
      title: "AI & Automation",
      description:
        "We integrate intelligent technologies to help organizations reduce repetitive work and make better decisions.",
      features: [
        "AI assistants",
        "Workflow automation",
        "Data analysis",
        "Smart systems",
      ],
    },

  ];



  return (

    <main className="pt-20 bg-white min-h-screen">


      {/* Hero */}

      <section
        className="
        px-6
        py-20
        bg-gradient-to-br
        from-blue-50
        via-white
        to-white
        "
      >

        <div
          className="
          max-w-5xl
          mx-auto
          text-center
          "
        >

          <span
            className="
            inline-block
            bg-blue-100
            text-blue-600
            px-4
            py-2
            rounded-full
            text-sm
            font-semibold
            "
          >
            Our Services
          </span>



          <h1
            className="
            mt-6
            text-4xl
            md:text-6xl
            font-extrabold
            text-slate-900
            leading-tight
            "
          >
            Technology Solutions
            <br />
            Built For The Future
          </h1>



          <p
            className="
            mt-6
            max-w-3xl
            mx-auto
            text-lg
            text-slate-600
            leading-relaxed
            "
          >
            Skyward Technologies provides modern software,
            digital transformation, and intelligent technology
            services that help organizations grow.
          </p>


        </div>

      </section>





      {/* Services */}

      <section className="px-6 py-20">


        <div
          className="
          max-w-7xl
          mx-auto
          grid
          md:grid-cols-2
          gap-8
          "
        >


          {services.map((service)=>(

            <div
              key={service.title}
              className="
              bg-white
              rounded-2xl
              border
              border-slate-100
              shadow-sm
              p-8
              hover:shadow-md
              transition
              "
            >


              <h2
                className="
                text-2xl
                font-bold
                text-slate-900
                "
              >
                {service.title}
              </h2>



              <p
                className="
                mt-4
                text-slate-600
                leading-relaxed
                "
              >
                {service.description}
              </p>



              <ul
                className="
                mt-6
                space-y-3
                text-slate-700
                "
              >

                {service.features.map((feature)=>(

                  <li
                    key={feature}
                    className="
                    flex
                    items-center
                    gap-3
                    "
                  >

                    <span
                      className="
                      w-6
                      h-6
                      rounded-full
                      bg-blue-100
                      text-blue-600
                      flex
                      items-center
                      justify-center
                      text-sm
                      font-bold
                      "
                    >
                      ✓
                    </span>


                    {feature}

                  </li>

                ))}

              </ul>


            </div>

          ))}


        </div>


      </section>





      {/* Development Process */}

      <section
        className="
        px-6
        py-20
        bg-slate-50
        "
      >

        <div
          className="
          max-w-7xl
          mx-auto
          text-center
          "
        >

          <h2
            className="
            text-3xl
            md:text-4xl
            font-bold
            text-slate-900
            "
          >
            Our Development Process
          </h2>



          <div
            className="
            mt-10
            grid
            md:grid-cols-4
            gap-6
            "
          >

            {[
              "Discovery",
              "Planning",
              "Development",
              "Launch & Support",
            ].map((step,index)=>(

              <div
                key={step}
                className="
                bg-white
                rounded-xl
                p-6
                shadow-sm
                border
                border-slate-100
                "
              >

                <div
                  className="
                  text-blue-600
                  text-2xl
                  font-bold
                  "
                >
                  0{index + 1}
                </div>


                <h3
                  className="
                  mt-3
                  font-bold
                  text-slate-900
                  "
                >
                  {step}
                </h3>


              </div>

            ))}


          </div>


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


        <h2
          className="
          text-4xl
          font-extrabold
          "
        >
          Ready To Transform Your Ideas Into Reality?
        </h2>



        <p
          className="
          mt-4
          text-blue-100
          "
        >
          Let's discuss your idea and turn it into a powerful digital solution.
        </p>



        <div
          className="
          mt-8
          flex
          justify-center
          gap-4
          flex-wrap
          "
        >


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
            Contact Us
          </Link>



          <Link
            to="/products"
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
            View Products
          </Link>


        </div>


      </section>



    </main>

  );
}