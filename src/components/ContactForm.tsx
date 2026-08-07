import { Send } from "lucide-react";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
export default function ContactForm() {

  const form = useRef<HTMLFormElement>(null);

  const [status, setStatus] = useState<{ type: "success" | "error"; message: string } | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();


    if (!form.current) return;

    setIsSubmitting(true);
    setStatus(null);

emailjs.sendForm(
  "service_5bjjada",
  "template_mtwixaj",
  form.current,
  {
    publicKey: "EAmKPvXBvMInlyb0D",
  }
)
    .then(() => {

      setStatus({ type: "success", message: "Message sent successfully! We will contact you soon." });

      form.current?.reset();

    })
   .catch((error) => {

  console.error("EmailJS Error:", error);

  setStatus({ type: "error", message: "Failed to send message. Please try again or reach us via WhatsApp." });

})
  .finally(() => {

    setIsSubmitting(false);

  });

  };
  return (
    <div className="grid lg:grid-cols-2 gap-12 items-start">

      {/* Information Side */}
      <div>

        <span className="
          inline-flex
          bg-blue-100
          text-blue-700
          px-4
          py-2
          rounded-full
          text-sm
          font-semibold
        ">
          Project Inquiry
        </span>


        <h2 className="
          mt-5
          text-4xl
          font-extrabold
          text-slate-900
          leading-tight
        ">
          Tell Us About Your Project
        </h2>


        <p className="
          mt-5
          text-slate-600
          leading-relaxed
        ">
          Share your idea with Skyward Technologies.
          Whether you need software development,
          business systems, education platforms,
          or digital solutions, our team is ready
          to help you build it.
        </p>


        <div className="mt-8 space-y-6">


          <div className="flex gap-4">

            <div className="
              w-10
              h-10
              rounded-full
              bg-blue-100
              text-blue-600
              flex
              items-center
              justify-center
              font-bold
            ">
              1
            </div>


            <div>

              <h3 className="font-bold text-slate-900">
                Submit Your Request
              </h3>

              <p className="text-sm text-slate-600">
                Tell us what you want to build.
              </p>

            </div>

          </div>



          <div className="flex gap-4">

            <div className="
              w-10
              h-10
              rounded-full
              bg-blue-100
              text-blue-600
              flex
              items-center
              justify-center
              font-bold
            ">
              2
            </div>


            <div>

              <h3 className="font-bold text-slate-900">
                We Contact You
              </h3>

              <p className="text-sm text-slate-600">
                We discuss your goals and requirements.
              </p>

            </div>

          </div>



          <div className="flex gap-4">

            <div className="
              w-10
              h-10
              rounded-full
              bg-blue-100
              text-blue-600
              flex
              items-center
              justify-center
              font-bold
            ">
              3
            </div>


            <div>

              <h3 className="font-bold text-slate-900">
                We Build Together
              </h3>

              <p className="text-sm text-slate-600">
                We transform your idea into a digital solution.
              </p>

            </div>

          </div>


        </div>


      </div>




      {/* Form Card */}

      <div className="
        bg-white
        rounded-3xl
        border
        border-slate-100
        shadow-lg
        p-8
      ">


        <form
  ref={form}
  onSubmit={sendEmail}
  className="space-y-5"
>


          <div>

            <label className="block text-sm font-semibold text-slate-700 mb-2">
              Full Name
            </label>

            <input
  name="from_name"
  type="text"
  required
  placeholder="Your name"
              className="
                w-full
                border
                border-slate-200
                rounded-xl
                px-4
                py-3
                outline-none
                focus:border-blue-600
              "
            />

          </div>



          <div>

            <label className="block text-sm font-semibold text-slate-700 mb-2">
              Email Address
            </label>

            <input
  name="from_email"
  type="email"
  required
  placeholder="example@email.com"
  className="
    w-full
    border
    border-slate-200
    rounded-xl
    px-4
    py-3
    outline-none
    focus:border-blue-600
  "
/>

          </div>




          <div>

            <label className="block text-sm font-semibold text-slate-700 mb-2">
              Phone Number
            </label>

           <input
              name="phone"
              type="tel"
              required
              placeholder="+233"
              className="
                w-full
                border
                border-slate-200
                rounded-xl
                px-4
                py-3
                outline-none
                focus:border-blue-600
              "
            />

          </div>




          <div>

            <label className="block text-sm font-semibold text-slate-700 mb-2">
              Service Needed
            </label>


            <select
  name="service"
  required
  defaultValue=""
  className="
    w-full
    border
    border-slate-200
    rounded-xl
    px-4
    py-3
    outline-none
    focus:border-blue-600
  "
>

  <option value="" disabled>
    Select a service
  </option>

  <option>
    Software Development
  </option>

  <option>
    Website Development
  </option>

  <option>
    Mobile Application Development
  </option>

  <option>
    Business Management Systems
  </option>

  <option>
    School Management Systems
  </option>

  <option>
    AI & Automation Solutions
  </option>

  <option>
    Cloud Solutions
  </option>

  <option>
    UI/UX Design
  </option>

  <option>
    IT Consulting
  </option>

  <option>
    Other
  </option>

</select>

          </div>




          <div>

            <label className="block text-sm font-semibold text-slate-700 mb-2">
              Project Details
            </label>


            <textarea
              name="message"
              rows={5}
              placeholder="Describe your project..."
              required
              className="
                w-full
                border
                border-slate-200
                rounded-xl
                px-4
                py-3
                outline-none
                focus:border-blue-600
                resize-none
              "
            />


          </div>
          {status && (
  <p
    className={`text-center text-sm font-medium ${
      status.type === "success" ? "text-green-600" : "text-red-600"
    }`}
  >
    {status.message}
  </p>
)}



          <button
            type="submit"
            disabled={isSubmitting}
            className="
              w-full
              bg-blue-600
              hover:bg-blue-700
              disabled:opacity-60
              disabled:cursor-not-allowed
              text-white
              py-4
              rounded-xl
              font-semibold
              flex
              items-center
              justify-center
              gap-2
              transition
            "
          >

            {isSubmitting ? "Sending..." : "Send Project Request"}

            <Send size={18}/>

          </button>



        </form>


      </div>


    </div>
  );
}