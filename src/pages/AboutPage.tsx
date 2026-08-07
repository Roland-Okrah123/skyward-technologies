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


    </main>
  );
}