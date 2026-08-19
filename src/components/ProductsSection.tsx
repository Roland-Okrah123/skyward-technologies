import { Link } from "react-router-dom";


const products = [
  {
    id: "business-suite",
    title: "Skyward Business Suite",
    description:
      "A powerful business management platform designed to help organizations manage operations, sales, inventory, and customer relationships.",
    features: [
      "POS Management",
      "Inventory Management",
      "Customer Management",
    ],
  },


  {
    id: "eduos",
    title: "Skyward EduOS",
    description:
      "A complete education operating system that simplifies school administration and improves digital learning experiences.",
    features: [
      "Student Management",
      "Attendance Tracking",
      "Results Management",
    ],
  },


  {
    id: "essentials",
    title: "Skyward Essentials",
    description:
      "A digital commerce solution designed to help businesses sell products and connect with customers online.",
    features: [
      "Online Store",
      "Secure Payments",
      "Delivery Support",
    ],
  },
];


export default function ProductsSection() {

  return (

    <div className="max-w-7xl mx-auto px-6">


      <h2 className="
        text-4xl
        md:text-5xl
        font-extrabold
        text-slate-900
      ">
        Our Products
      </h2>


      <p className="
        mt-5
        max-w-3xl
        text-lg
        text-slate-600
      ">
        Explore innovative platforms created by Skyward Technologies
        to transform businesses, education, and digital commerce.
      </p>



      <div className="
        mt-12
        grid
        md:grid-cols-3
        gap-8
      ">


        {products.map((product)=>(

          <div
            key={product.id}
            className="
              rounded-2xl
              border
              border-slate-100
              shadow-sm
              p-8
              hover:shadow-md
              transition
            "
          >

            <span className="
              inline-block
              text-xs
              font-semibold
              text-blue-600
              bg-blue-50
              px-3
              py-1
              rounded-full
            ">
              In-House Product
            </span>


            <h3 className="
              mt-4
              text-xl
              font-bold
              text-slate-900
            ">
              {product.title}
            </h3>



            <p className="
              mt-4
              text-slate-600
            ">
              {product.description}
            </p>



            <ul className="
              mt-5
              space-y-2
              text-slate-600
            ">

              {product.features.map((feature)=>(

                <li key={feature}>
                  ✓ {feature}
                </li>

              ))}

            </ul>



            <Link
              to={`/products/${product.id}`}
              className="
                inline-block
                mt-6
                text-blue-600
                font-semibold
                hover:text-blue-700
              "
            >
              Explore Product →
            </Link>



          </div>

        ))}


      </div>


    </div>

  );

}
