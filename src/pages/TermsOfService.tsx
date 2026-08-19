export default function TermsOfService() {

  return (

    <main className="pt-28 px-6 pb-20 bg-white min-h-screen">

      <div className="max-w-3xl mx-auto">

        <span className="inline-block bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold">
          Terms of Service
        </span>

        <h1 className="mt-6 text-4xl font-extrabold text-slate-900">
          Terms of Service
        </h1>

        <p className="mt-4 text-sm text-slate-500">
          Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
        </p>

        <div className="mt-10 space-y-8 text-slate-600 leading-relaxed">

          <section>
            <h2 className="text-xl font-bold text-slate-900">1. Agreement to Terms</h2>
            <p className="mt-3">
              By accessing this website or engaging Skyward Technologies for
              services, you agree to be bound by these Terms of Service. If
              you do not agree, please do not use this site or our services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900">2. Our Services</h2>
            <p className="mt-3">
              Skyward Technologies provides software development, business
              management systems, education technology, and related digital
              services. The specific scope, cost, and timeline for any
              project are agreed upon separately with each client before work begins.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900">3. Project Engagements</h2>
            <p className="mt-3">
              Any paid project undertaken with Skyward Technologies is
              governed by a separate written agreement or proposal covering
              deliverables, payment terms, and timelines. These Terms apply
              to your general use of this website, not the specific terms of
              a client engagement.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900">4. Intellectual Property</h2>
            <p className="mt-3">
              Unless otherwise agreed in writing, ownership of source code
              and deliverables produced for a client transfers to that
              client upon full payment. The Skyward Technologies name, logo,
              and website content remain our property.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900">5. Limitation of Liability</h2>
            <p className="mt-3">
              We work to deliver reliable, well-tested solutions, but we
              cannot guarantee that any software will be completely free of
              defects. To the extent permitted by law, Skyward Technologies
              is not liable for indirect or consequential damages arising
              from the use of our services or this website.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900">6. Changes To These Terms</h2>
            <p className="mt-3">
              We may update these Terms from time to time. Continued use of
              this website after changes are posted constitutes acceptance
              of the revised Terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900">7. Contact Us</h2>
            <p className="mt-3">
              Questions about these Terms can be sent to
              support.skywardtechnologies@gmail.com.
            </p>
          </section>

        </div>

      </div>

    </main>

  );

}
