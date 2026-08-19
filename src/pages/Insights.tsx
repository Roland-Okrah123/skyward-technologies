import { Link } from "react-router-dom";

// Data structure ready for real posts. Add entries here once written —
// the page will render them automatically instead of the empty state below.
export interface InsightPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
}

const posts: InsightPost[] = [];

export default function Insights() {

  return (

    <main className="pt-28 px-6 pb-20 bg-white min-h-screen">

      <div className="max-w-5xl mx-auto text-center">

        <span className="inline-block bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold">
          Insights
        </span>

        <h1 className="mt-6 text-4xl md:text-5xl font-extrabold text-slate-900">
          Business Technology Insights
        </h1>

        <p className="mt-6 max-w-2xl mx-auto text-lg text-slate-600 leading-relaxed">
          Practical articles on business software, automation, and digital
          transformation — written for business owners, not just developers.
        </p>

      </div>

      {posts.length === 0 ? (

        <div className="max-w-2xl mx-auto text-center mt-16">
          <p className="text-slate-500">
            We're working on our first articles — check back soon, or
            reach out directly if you have a question in the meantime.
          </p>

          <Link
            to="/contact"
            className="inline-block mt-6 text-blue-600 font-semibold hover:text-blue-700"
          >
            Talk To Us →
          </Link>
        </div>

      ) : (

        <div className="max-w-5xl mx-auto mt-16 grid md:grid-cols-2 gap-8">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="rounded-2xl border border-slate-100 shadow-sm p-8"
            >
              <p className="text-sm text-slate-500">{post.date}</p>
              <h2 className="mt-2 text-xl font-bold text-slate-900">{post.title}</h2>
              <p className="mt-3 text-slate-600 leading-relaxed">{post.excerpt}</p>
            </article>
          ))}
        </div>

      )}

    </main>

  );

}
