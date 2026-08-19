import { Link } from "react-router-dom";
import {
  Store,
  Pill,
  GraduationCap,
  Hammer,
  UtensilsCrossed,
  HeartPulse,
  Building,
  Truck,
  Home as HomeIcon,
  Briefcase,
  Rocket,
  Users,
} from "lucide-react";

const industries = [
  { icon: Store, label: "Retail & Supermarkets" },
  { icon: Pill, label: "Pharmacies" },
  { icon: GraduationCap, label: "Schools & Institutions" },
  { icon: Hammer, label: "Hardware & Building Materials" },
  { icon: UtensilsCrossed, label: "Restaurants & Hospitality" },
  { icon: HeartPulse, label: "Healthcare" },
  { icon: Building, label: "Churches & Organizations" },
  { icon: Truck, label: "Transport & Logistics" },
  { icon: HomeIcon, label: "Real Estate" },
  { icon: Briefcase, label: "Professional Services" },
  { icon: Rocket, label: "Startups & SMEs" },
  { icon: Users, label: "NGOs & Institutions" },
];

export default function IndustriesSection() {
  return (
    <div className="max-w-7xl mx-auto px-6">

      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
          Industries We Serve
        </h2>
        <p className="mt-4 text-slate-600 leading-relaxed">
          A few examples of the kinds of businesses and institutions we
          build for — this list isn't exhaustive.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">

        {industries.map((industry) => {
          const Icon = industry.icon;

          return (
            <div
              key={industry.label}
              className="
              flex
              flex-col
              items-center
              text-center
              gap-3
              rounded-2xl
              border
              border-slate-100
              p-6
              hover:shadow-md
              hover:border-blue-100
              transition
              "
            >
              <div className="w-11 h-11 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center">
                <Icon size={20} />
              </div>

              <span className="text-sm font-semibold text-slate-700">
                {industry.label}
              </span>
            </div>
          );
        })}

      </div>

      <div className="mt-10 text-center">
        <p className="text-slate-600">
          Don't see your industry?
        </p>
        <Link
          to="/contact"
          className="inline-block mt-2 text-blue-600 font-semibold hover:text-blue-700"
        >
          Tell us what you need →
        </Link>
      </div>

    </div>
  );
}
