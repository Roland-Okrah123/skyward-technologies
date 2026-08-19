import { Link } from "react-router-dom";

export interface Testimonial {
  quote: string;
  clientName: string;
  role?: string;
  company?: string;
  industry?: string;
  avatarSrc?: string;
  rating?: number;
  project?: string;
}

// Populate this array with real client testimonials as they come in.
// Nothing is displayed until there's genuine feedback to show —
// see the empty state below.
const testimonials: Testimonial[] = [];

export default function Testimonials() {

  if (testimonials.length === 0) {
    return (
      <div className="max-w-3xl mx-auto px-6 text-center">

        <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
          Client Testimonials
        </h2>

        <p className="mt-5 text-slate-600 leading-relaxed">
          We're early in building out our public track record — real
          client feedback will appear here as projects are completed.
        </p>

        <Link
          to="/contact"
          className="inline-block mt-6 text-blue-600 font-semibold hover:text-blue-700"
        >
          Become our next success story →
        </Link>

      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-6">

      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
          What Clients Say
        </h2>
      </div>

      <div className="mt-12 grid md:grid-cols-3 gap-8">

        {testimonials.map((t) => (
          <div
            key={t.clientName}
            className="rounded-2xl border border-slate-100 shadow-sm p-8"
          >
            <p className="text-slate-700 leading-relaxed">"{t.quote}"</p>

            <div className="mt-6 flex items-center gap-3">

              {t.avatarSrc && (
                <img
                  src={t.avatarSrc}
                  alt={t.clientName}
                  className="w-10 h-10 rounded-full object-cover"
                />
              )}

              <div>
                <p className="font-semibold text-slate-900 text-sm">
                  {t.clientName}
                </p>
                <p className="text-xs text-slate-500">
                  {[t.role, t.company].filter(Boolean).join(", ")}
                </p>
              </div>

            </div>

          </div>
        ))}

      </div>

    </div>
  );
}
