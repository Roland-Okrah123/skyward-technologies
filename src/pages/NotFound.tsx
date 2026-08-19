import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <main className="pt-28 px-6 pb-20 min-h-screen bg-white flex items-center">
      <div className="max-w-2xl mx-auto text-center">
        <span className="inline-block bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold">
          404 Error
        </span>

        <h1 className="mt-6 text-4xl md:text-5xl font-extrabold text-slate-900">
          Page Not Found
        </h1>

        <p className="mt-5 text-lg text-slate-600">
          The page you're looking for doesn't exist or may have been moved.
          Let's get you back on track.
        </p>

        <Link
          to="/"
          className="
            inline-flex
            items-center
            gap-2
            mt-8
            bg-blue-700
            text-white
            px-6
            py-3
            rounded-xl
            font-semibold
            hover:bg-blue-800
            transition
          "
        >
          <ArrowLeft size={18} />
          Back To Home
        </Link>
      </div>
    </main>
  );
}
