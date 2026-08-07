import { useParams } from "react-router-dom";


export default function ProductDetail() {


  const { productId } = useParams();



  const products = {

    "business-suite": {

      title: "Skyward Business Suite",

      description:
        "A complete business automation platform designed to help companies manage sales, inventory, customers, suppliers, and financial operations from one central system.",

      features: [
        "Point of Sale System",
        "Inventory Tracking",
        "Customer Management",
        "Supplier Management",
        "Business Analytics",
        "Reports Dashboard",
      ],

    },


    "eduos": {

      title: "Skyward EduOS",

      description:
        "A modern education management platform built to help schools manage students, teachers, academics, and administrative activities digitally.",

      features: [
        "Student Information Management",
        "Teacher Management",
        "Digital Attendance",
        "Examination Management",
        "Results Processing",
        "Academic Records",
      ],

    },


    "essentials": {

      title: "Skyward Essentials",

      description:
        "A digital commerce platform that helps businesses showcase products, manage customers, and grow through online sales channels.",

      features: [
        "Online Product Store",
        "Payment Integration",
        "Order Management",
        "Customer Support Tools",
        "Delivery Integration",
        "Business Growth Analytics",
      ],

    },

  };



  const product =
    products[productId as keyof typeof products];



  if (!product) {

    return (

      <main className="pt-28 px-6 min-h-screen">

        <h1 className="text-4xl font-bold text-slate-900">
          Product Not Found
        </h1>

      </main>

    );

  }



  return (

    <main className="pt-20 bg-white min-h-screen">


      <section className="
        py-20
        px-6
        bg-gradient-to-br
        from-blue-50
        via-white
        to-white
      ">


        <div className="
          max-w-5xl
          mx-auto
          text-center
        ">


          <span className="
            bg-blue-100
            text-blue-600
            px-4
            py-2
            rounded-full
            text-sm
            font-semibold
          ">
            Skyward Technologies Product
          </span>



          <h1 className="
            mt-6
            text-5xl
            font-extrabold
            text-slate-900
          ">
            {product.title}
          </h1>



          <p className="
            mt-6
            text-lg
            text-slate-600
          ">
            {product.description}
          </p>


        </div>


      </section>




      <section className="px-6 py-20">


        <div className="max-w-6xl mx-auto">


          <h2 className="
            text-3xl
            font-bold
            text-slate-900
          ">
            Key Features
          </h2>



          <div className="
            mt-8
            grid
            md:grid-cols-2
            gap-6
          ">


            {product.features.map((feature)=>(

              <div
                key={feature}
                className="
                  p-6
                  rounded-xl
                  border
                  border-slate-100
                  shadow-sm
                "
              >

                ✓ {feature}

              </div>

            ))}


          </div>


        </div>


      </section>


    </main>

  );

}