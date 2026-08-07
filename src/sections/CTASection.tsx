import { Link } from "react-router-dom";


export default function CTASection() {

  return (

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

  );

}