export default function ServicesSection() {
  const services = [
    {
      title: "Software Development",
      description:
        "Custom software solutions designed to solve business challenges and improve efficiency.",
    },

    {
      title: "Website Development",
      description:
        "Modern responsive websites and web applications that help organizations build a strong digital presence.",
    },

    {
      title: "Mobile Application Development",
      description:
        "Powerful mobile applications designed to provide seamless digital experiences.",
    },

    {
      title: "Business Management Systems",
      description:
        "Digital systems that help businesses manage sales, inventory, customers, and operations.",
    },

    {
      title: "Education Technology Solutions",
      description:
        "Smart education platforms that improve school administration and learning experiences.",
    },

    {
      title: "AI & Automation",
      description:
        "Intelligent solutions that automate tasks and help organizations work smarter.",
    },
  ];


  return (
    <section className="py-20 px-6 bg-slate-50">


      <div className="max-w-7xl mx-auto">


        {/* Heading */}

        <div className="max-w-3xl mx-auto text-center">


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



          <h2
            className="
            mt-6
            text-4xl
            font-extrabold
            text-slate-900
            "
          >
            Technology Solutions Designed For Growth
          </h2>



          <p
            className="
            mt-5
            text-lg
            text-slate-600
            leading-relaxed
            "
          >
            We provide innovative technology services that help
            businesses, schools, and organizations build,
            improve, and scale their digital future.
          </p>


        </div>




        {/* Services Grid */}

        <div
          className="
          mt-12
          grid
          grid-cols-1
          md:grid-cols-3
          gap-8
          "
        >


          {services.map((service) => (

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
              hover:-translate-y-1
              transition-all
              duration-300
              "
            >


              <div
                className="
                w-12
                h-12
                rounded-xl
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



              <h3
                className="
                mt-6
                text-xl
                font-bold
                text-slate-900
                "
              >
                {service.title}
              </h3>



              <p
                className="
                mt-4
                text-slate-600
                leading-relaxed
                "
              >
                {service.description}
              </p>



            </div>

          ))}


        </div>


      </div>


    </section>
  );
}