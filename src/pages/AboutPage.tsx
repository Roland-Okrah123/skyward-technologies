import FounderCard from "../components/FounderCard";
import founderPhoto from "../assets/founder-roland.jpg";

export default function AboutPage() {
  return (
    <main className="pt-20 bg-white min-h-screen">


      {/* Hero */}
      <section className="px-6 py-20 bg-gradient-to-br from-blue-50 via-white to-white">

        <div className="max-w-7xl mx-auto text-center">

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


          <h1 className="
            mt-6
            text-4xl
            md:text-6xl
            font-extrabold
            text-slate-900
            leading-tight
          ">
            Building Technology
            <br />
            That Creates A Better Future
          </h1>


          <p className="
            mt-6
            max-w-4xl
            mx-auto
            text-lg
            text-slate-600
            leading-relaxed
          ">
            Skyward Technologies is a technology company focused on
            creating modern software solutions, digital platforms,
            and intelligent systems that help businesses, schools,
            and organizations operate efficiently in the digital age.
          </p>


        </div>

      </section>




      {/* Company Story */}

      <section className="px-6 py-20">

        <div className="max-w-5xl mx-auto">


          <h2 className="
            text-3xl
            md:text-4xl
            font-bold
            text-slate-900
          ">
            Who We Are
          </h2>


          <p className="
            mt-6
            text-lg
            text-slate-600
            leading-relaxed
          ">
            Skyward Technologies combines software engineering,
            creativity, and innovation to build solutions that
            solve real-world challenges.
          </p>


          <p className="
            mt-4
            text-lg
            text-slate-600
            leading-relaxed
          ">
            From business automation systems to education technology
            platforms, we develop reliable digital products that
            prepare organizations for the future.
          </p>


        </div>

      </section>




      {/* Meet the Founder */}

      <section className="px-6 py-20">

        <div className="max-w-5xl mx-auto">

          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
              Meet The Founder
            </h2>
            <p className="mt-4 text-slate-600 leading-relaxed">
              The person behind Skyward Technologies.
            </p>
          </div>

          <FounderCard
            name="Roland Okrah"
            title="Founder & CEO"
            bio="Roland founded Skyward Technologies to help businesses, schools, and organizations put reliable, modern software behind their day-to-day operations. He leads the design and development of every product Skyward builds, working closely with each client from first conversation to launch and beyond."
            photoSrc={founderPhoto}
            linkedin="https://www.linkedin.com/in/okrah-roland-8486792aa"
            github="https://github.com/Roland-Okrah123"
            x="https://x.com/roland_skyward"
          />

        </div>

      </section>




      {/* Vision Mission */}

      <section className="px-6 py-16 bg-slate-50">

        <div className="
          max-w-7xl
          mx-auto
          grid
          md:grid-cols-2
          gap-8
        ">


          <div className="
            bg-white
            rounded-2xl
            p-8
            shadow-sm
            border
            border-slate-100
          ">

            <h3 className="
              text-2xl
              font-bold
              text-slate-900
            ">
              Our Vision
            </h3>


            <p className="
              mt-4
              text-slate-600
              leading-relaxed
            ">
              To become one of Africa's leading technology companies
              and a trusted global partner — creating digital solutions
              that empower people, businesses, and institutions everywhere.
            </p>


          </div>



          <div className="
            bg-white
            rounded-2xl
            p-8
            shadow-sm
            border
            border-slate-100
          ">

            <h3 className="
              text-2xl
              font-bold
              text-slate-900
            ">
              Our Mission
            </h3>


            <p className="
              mt-4
              text-slate-600
              leading-relaxed
            ">
              To design accessible, secure, and innovative technology
              solutions that improve the way people work, learn,
              and grow.
            </p>


          </div>


        </div>

      </section>




      {/* Values */}

      <section className="px-6 py-20">

        <div className="max-w-7xl mx-auto">


          <h2 className="
            text-center
            text-3xl
            font-bold
            text-slate-900
          ">
            Our Core Values
          </h2>



          <div className="
            mt-10
            grid
            md:grid-cols-3
            gap-8
          ">


            {[
              {
                title: "Innovation",
                text: "Creating modern solutions that solve problems and open new possibilities."
              },

              {
                title: "Reliability",
                text: "Building secure and scalable systems clients can depend on."
              },

              {
                title: "Impact",
                text: "Using technology to empower businesses and communities."
              }

            ].map((value)=>(

              <div
                key={value.title}
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

                <h3 className="
                  text-xl
                  font-bold
                  text-slate-900
                ">
                  {value.title}
                </h3>


                <p className="
                  mt-4
                  text-slate-600
                  leading-relaxed
                ">
                  {value.text}
                </p>


              </div>

            ))}


          </div>


        </div>

      </section>




      {/* How We Work */}

      <section className="px-6 py-20 bg-slate-50">

        <div className="max-w-7xl mx-auto">

          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
              How We Work
            </h2>
            <p className="mt-4 text-slate-600 leading-relaxed">
              A clear, transparent process from first conversation to
              ongoing support.
            </p>
          </div>

          <div className="mt-14 grid md:grid-cols-4 gap-8">

            {[
              {
                step: "01",
                title: "Discovery",
                text: "We start by understanding your goals, users, and constraints before writing a single line of code.",
              },
              {
                step: "02",
                title: "Design & Planning",
                text: "We map out the architecture, scope, and timeline together, so there are no surprises later.",
              },
              {
                step: "03",
                title: "Build & Test",
                text: "We develop in stages, sharing progress early so you can review, adjust, and stay in control.",
              },
              {
                step: "04",
                title: "Launch & Support",
                text: "We deploy your solution and stay engaged for support, fixes, and future improvements.",
              },
            ].map((item) => (

              <div key={item.step} className="relative">

                <span className="text-4xl font-extrabold text-blue-100">
                  {item.step}
                </span>

                <h3 className="mt-2 text-lg font-bold text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-3 text-slate-600 leading-relaxed text-sm">
                  {item.text}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>




      {/* Trust & Security Commitments */}

      <section className="px-6 py-20">

        <div className="max-w-7xl mx-auto">

          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
              Working With Us
            </h2>
            <p className="mt-4 text-slate-600 leading-relaxed">
              What every client can expect, regardless of project size or location.
            </p>
          </div>

          <div className="mt-12 grid md:grid-cols-3 gap-8">

            {[
              {
                title: "Clear Communication",
                text: "Regular updates and a single point of contact throughout your project — no disappearing acts.",
              },
              {
                title: "Confidentiality",
                text: "Your ideas and data stay private. We're happy to sign an NDA before discussing project details.",
              },
              {
                title: "You Own What We Build",
                text: "Source code and assets belong to you at project completion — no vendor lock-in.",
              },
            ].map((item) => (

              <div
                key={item.title}
                className="
                  rounded-2xl
                  border
                  border-slate-100
                  shadow-sm
                  p-8
                "
              >

                <h3 className="text-lg font-bold text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-3 text-slate-600 leading-relaxed text-sm">
                  {item.text}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>


    </main>
  );
}