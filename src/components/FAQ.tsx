import { useState } from "react";
import { ChevronDown } from "lucide-react";


const faqs = [
  {
    question: "What type of software does Skyward Technologies build?",
    answer:
      "We build websites, web applications, mobile apps, business management systems, e-commerce platforms, and custom industry software — tailored to how your organization actually operates.",
  },
  {
    question: "Do you work with small businesses?",
    answer:
      "Yes. We work with businesses of all sizes — from small and growing operations to larger organizations and institutions.",
  },
  {
    question: "Can you build custom software for my specific industry?",
    answer:
      "Yes. Every project starts with understanding your business problem, then we design and build a system around it rather than forcing you into a generic template.",
  },
  {
    question: "Do you work with clients outside Ghana?",
    answer:
      "Yes. We work remotely with clients across different countries and time zones, using clear communication and regular check-ins to keep projects on track wherever you're based.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "It depends on scope. A simple website may take a few weeks, while a full business management system or education platform can take a few months. We'll give you a clear timeline after the discovery phase, before any work begins.",
  },
  {
    question: "How does pricing work?",
    answer:
      "Every project is scoped individually based on your requirements — complexity, number of users, modules, and integrations all factor in. After an initial consultation, we provide a clear proposal outlining cost and timeline, no hidden fees.",
  },
  {
    question: "Will I own the final product?",
    answer:
      "Yes. Once a project is completed and paid for, the source code and assets belong to you. We don't lock clients into ongoing dependency on us.",
  },
  {
    question: "Do you offer support and maintenance after launch?",
    answer:
      "Yes. We offer post-launch support and maintenance packages covering updates, bug fixes, security improvements, and feature enhancements as your needs evolve.",
  },
  {
    question: "Can you integrate payment systems?",
    answer:
      "Yes, payment integration can be built into e-commerce platforms and business systems where needed, depending on the payment providers relevant to your market.",
  },
  {
    question: "Can you sign an NDA before we share project details?",
    answer:
      "Absolutely. We're happy to sign a non-disclosure agreement before any detailed discussion, so you can share your ideas with confidence.",
  },
];


export default function FAQ() {

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (

    <div className="max-w-3xl mx-auto">

      {faqs.map((faq, index) => {

        const isOpen = openIndex === index;

        return (

          <div
            key={faq.question}
            className="border-b border-slate-200 py-6"
          >

            <button
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className="w-full flex items-center justify-between text-left gap-4"
            >

              <span className="text-lg font-semibold text-slate-900">
                {faq.question}
              </span>

              <ChevronDown
                size={20}
                className={`shrink-0 text-blue-600 transition-transform ${
                  isOpen ? "rotate-180" : ""
                }`}
              />

            </button>

            {isOpen && (
              <p className="mt-4 text-slate-600 leading-relaxed">
                {faq.answer}
              </p>
            )}

          </div>

        );

      })}

    </div>

  );

}
