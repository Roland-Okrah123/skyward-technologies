import {
  Code2,
  Building2,
  GraduationCap,
  Bot,
  Smartphone,
  Cloud,
} from "lucide-react";


const Services = () => {


  const services = [
    {
      title: "Software Development",
      description:
        "Custom software solutions and enterprise applications built for modern organizations.",
      icon: Code2,
    },

    {
      title: "Skyward Business Suite",
      description:
        "Smart business management systems that simplify operations and improve productivity.",
      icon: Building2,
    },

    {
      title: "Skyward EduOS",
      description:
        "Digital education platforms that connect schools, students, and administrators.",
      icon: GraduationCap,
    },

    {
      title: "AI & Automation",
      description:
        "Intelligent solutions that automate workflows and unlock business efficiency.",
      icon: Bot,
    },

    {
      title: "Web & Mobile Applications",
      description:
        "Modern responsive applications designed for users across all devices.",
      icon: Smartphone,
    },

    {
      title: "Cloud Infrastructure",
      description:
        "Secure cloud systems, databases, and scalable digital infrastructure.",
      icon: Cloud,
    },

  ];



  return (

    <section className="py-24 bg-gray-50">


      <div className="max-w-7xl mx-auto px-6">


        {/* Heading */}

        <div className="text-center max-w-3xl mx-auto">


          <span className="text-blue-600 font-semibold">
            What We Do
          </span>


          <h2 className="mt-4 text-4xl font-bold text-gray-900">

            Technology Solutions Built For The Future

          </h2>


          <p className="mt-5 text-gray-600 text-lg">

            We design and develop powerful digital solutions
            that help businesses, schools, and organizations
            operate smarter.

          </p>


        </div>




        {/* Cards */}

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8">


          {services.map((service) => {


            const Icon = service.icon;


            return (

              <div
                key={service.title}
                className="
                bg-white
                rounded-2xl
                p-8
                border
                border-gray-100
                hover:shadow-xl
                hover:-translate-y-2
                transition-all
                duration-300
                "
              >


                <div className="
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
                    size={28}
                    className="text-blue-600"
                  />

                </div>



                <h3 className="
                mt-6
                text-xl
                font-bold
                text-gray-900
                "
                >

                  {service.title}

                </h3>



                <p className="
                mt-3
                text-gray-600
                leading-relaxed
                "
                >

                  {service.description}

                </p>


              </div>

            );


          })}


        </div>


      </div>


    </section>

  );

};


export default Services;