import { Link } from "react-router-dom";
import { Check } from "lucide-react";

const painPoints = [
  "Manual stock records",
  "Lost or scattered sales records",
  "Difficulty tracking customers",
  "Unclear profit and loss",
  "Manual invoices",
  "Poor or no reporting",
  "Scattered customer information",
  "No real online presence",
  "Too much dependence on WhatsApp for business",
  "Difficulty managing multiple branches",
];

export default function PainPointsSection() {
  return (
    <div className="max-w-5xl mx-auto px-6 text-center">

      <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
        Is Your Business Still Managing These Things Manually?
      </h2>

      <div className="mt-10 grid sm:grid-cols-2 gap-4 text-left">

        {painPoints.map((point) => (
          <div
            key={point}
            className="flex items-start gap-3 rounded-xl bg-white border border-slate-100 p-4"
          >
            <Check size={18} className="text-blue-600 shrink-0 mt-0.5" />
            <span className="text-slate-700">{point}</span>
          </div>
        ))}

      </div>

      <p className="mt-10 text-lg text-slate-700 max-w-2xl mx-auto">
        Skyward Technologies can turn these processes into one connected
        digital system built around how your business actually works.
      </p>

      <Link
        to="/contact"
        className="
        inline-block
        mt-6
        bg-blue-700
        text-white
        px-8
        py-3
        rounded-xl
        font-semibold
        hover:bg-blue-800
        transition
        "
      >
        Start A Conversation
      </Link>

    </div>
  );
}
