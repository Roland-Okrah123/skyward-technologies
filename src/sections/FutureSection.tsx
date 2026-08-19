export default function FutureSection() {

  const features = [
    {
      title:"Modern Software",
      text:"Building scalable applications for businesses and organizations."
    },

    {
      title:"Digital Transformation",
      text:"Helping organizations move from traditional systems to smart platforms."
    },

    {
      title:"Innovation Driven",
      text:"Creating technology solutions designed for Africa's future."
    }
  ];


  return (

    <section className="py-16">

      <div className="
      grid
      grid-cols-1
      lg:grid-cols-12
      gap-12
      items-center
      max-w-7xl
      mx-auto
      px-6
      ">


        <div className="lg:col-span-5">

          <h2 className="
          text-3xl
          md:text-4xl
          font-extrabold
          text-slate-900
          leading-tight
          ">

            Building Technology That Creates A Better Future

          </h2>


          <p className="mt-6 text-slate-600 leading-relaxed">

            We develop innovative digital solutions that empower businesses,
            schools, and individuals through technology.

          </p>


          <button className="
          mt-8
          bg-blue-600
          text-white
          px-8
          py-3
          rounded-lg
          font-semibold
          hover:bg-blue-700
          ">

            Get Started

          </button>

        </div>



        <div className="
        lg:col-span-7
        flex
        flex-col
        gap-6
        ">


          {features.map((item)=>(
            <div
              key={item.title}
              className="flex gap-5 items-start"
            >

              <div className="
              w-12
              h-12
              rounded-full
              bg-blue-600
              text-white
              flex
              items-center
              justify-center
              font-bold
              ">
                ✓
              </div>


              <div>

                <h3 className="font-bold text-slate-900">
                  {item.title}
                </h3>

                <p className="text-slate-600 mt-2">
                  {item.text}
                </p>

              </div>

            </div>
          ))}


        </div>


      </div>

    </section>

  );
}