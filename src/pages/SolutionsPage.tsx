import { Link } from "react-router-dom";
import {
  Building2,
  GraduationCap,
  ShoppingCart,
  Landmark,
  HeartPulse,
  Factory,
  Globe2,
  ShieldCheck,
  Zap,
} from "lucide-react";


export default function SolutionsPage() {

  const solutions = [
    {
      icon: Building2,
      title: "Enterprise & Business Operations",
      description:
        "End-to-end systems that streamline how businesses manage sales, inventory, staff, and customers — built to scale as you grow.",
    },
    {
      icon: GraduationCap,
      title: "Education & Institutions",
      description:
        "Digital platforms for schools and training organizations covering admissions, attendance, results, and learning management.",
    },
    {
      icon: ShoppingCart,
      title: "E-Commerce & Retail",
      description:
        "Online storefronts and retail management tools that help businesses sell, fulfill, and grow across multiple markets.",
    },
    {
      icon: Landmark,
      title: "Finance & Fintech",
      description:
        "Secure, compliant systems for payments, records, and reporting — engineered with the reliability financial workflows demand.",
    },
    {
      icon: HeartPulse,
      title: "Healthcare & Wellness",
      description:
        "Patient and records management tools that help healthcare providers deliver care more efficiently and accurately.",
    },
    {
      icon: Factory,
      title: "Startups & Growing Organizations",
      description:
        "Lean, scalable digital products for startups moving fast — from MVP to a fully-fledged platform.",
    },
  ];


  const whyGlobal = [
    {
      icon: Globe2,
      title: "Built For International Teams",
      description:
        "Remote-friendly delivery, clear communication, and systems designed to work across time zones and markets.",
    },
    {
      icon: ShieldCheck,
      title: "Reliable & Secure By Design",
      description:
        "Every solution is engineered with data security, uptime, and long-term maintainability in mind.",
    },
    {
      icon: Zap,
      title: "Fast, Iterative Delivery",
      description:
        "We ship in stages so you see progress early and can adapt as your goals evolve — no waiting months for a first look.",
    },
  ];


  return (

    <main className="pt-20 min-h-screen bg-white">

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

        <div className="max-w-5xl mx-auto text-center">

          <span className="inline-block bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold">
            Our Solutions
          </span>

          <h1 className="mt-6 text-4xl md:text-6xl font-extrabold text-slate-900 leading-tight">
            Smart Technology Solutions
            <br />
            For Organizations Worldwide
          </h1>

          <p className="mt-6 max-w-3xl mx-auto text-lg text-slate-600 leading-relaxed">
            We build scalable digital solutions that help businesses,
            educational institutions, startups, and organizations — wherever
            they operate — improve efficiency, automate operations, and
            accelerate growth.
          </p>

        </div>

      </section>


      {/* Solutions by industry */}

      <section className="px-6 py-20">

        <div className="max-w-7xl mx-auto">

          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
              Solutions By Industry
            </h2>
            <p className="mt-4 text-slate-600 leading-relaxed">
              Tailored technology built around how your industry actually works.
            </p>
          </div>

          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {solutions.map((solution) => {
              const Icon = solution.icon;

              return (
                <div
                  key={solution.title}
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
                    "
                  >
                    <Icon size={24} />
                  </div>

                  <h3 className="mt-5 text-xl font-bold text-slate-900">
                    {solution.title}
                  </h3>

                  <p className="mt-3 text-slate-600 leading-relaxed">
                    {solution.description}
                  </p>

                </div>
              );
            })}

          </div>

        </div>

      </section>


      {/* Why organizations choose us globally */}

      <section className="px-6 py-20 bg-slate-50">

        <div className="max-w-7xl mx-auto">

          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
              Why Organizations Choose Skyward
            </h2>
            <p className="mt-4 text-slate-600 leading-relaxed">
              Rooted in Ghana, built to serve clients wherever they are.
            </p>
          </div>

          <div className="mt-12 grid md:grid-cols-3 gap-8">

            {whyGlobal.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="
                  bg-white
                  rounded-2xl
                  border
                  border-slate-100
                  shadow-sm
                  p-8
                  text-center
                  "
                >

                  <div
                    className="
                    w-12
                    h-12
                    mx-auto
                    rounded-xl
                    bg-blue-100
                    text-blue-600
                    flex
                    items-center
                    justify-center
                    "
                  >
                    <Icon size={24} />
                  </div>

                  <h3 className="mt-5 text-lg font-bold text-slate-900">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-slate-600 leading-relaxed">
                    {item.description}
                  </p>

                </div>
              );
            })}

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
        px-6
        "
      >

        <h2 className="text-3xl md:text-4xl font-extrabold">
          Have A Project In Mind?
        </h2>

        <p className="mt-4 text-blue-100 max-w-xl mx-auto">
          Wherever you're based, let's talk about how the right solution can
          move your organization forward.
        </p>

        <div className="mt-8 flex justify-center gap-4 flex-wrap">

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
            Start A Conversation
          </Link>

          <Link
            to="/services"
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
            View Services
          </Link>

        </div>

      </section>

    </main>

  );
}
