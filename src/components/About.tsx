import { Link } from "react-router-dom";

export default function About() {
  return (
    <section className="py-20 px-6 bg-white">

      <div className="max-w-7xl mx-auto">

        <div className="max-w-4xl mx-auto text-center">

          <span className="
            inline-block
            bg-blue-100
            text-blue-600
            px-4
            py-2
            rounded-full
            text-sm
            font-semibold
          ">
            About Skyward Technologies
          </span>


          <h2 className="
            mt-6
            text-4xl
            md:text-5xl
            font-extrabold
            text-slate-900
            leading-tight
          ">
            Building Technology That Creates A Better Future
          </h2>


          <p className="
            mt-6
            text-lg
            text-slate-600
            leading-relaxed
          ">
            Skyward Technologies designs software solutions,
            digital platforms, and intelligent systems that help
            businesses, schools, and organizations work smarter
            and grow faster.
          </p>


          <Link
            to="/about"
            className="
              inline-block
              mt-8
              text-blue-600
              font-semibold
              hover:text-blue-700
            "
          >
            Learn More →
          </Link>


        </div>


      </div>

    </section>
  );
}