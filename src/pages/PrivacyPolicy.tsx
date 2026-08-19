export default function PrivacyPolicy() {

  return (

    <main className="pt-28 px-6 pb-20 bg-white min-h-screen">

      <div className="max-w-3xl mx-auto">

        <span className="inline-block bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold">
          Privacy Policy
        </span>

        <h1 className="mt-6 text-4xl font-extrabold text-slate-900">
          Privacy Policy
        </h1>

        <p className="mt-4 text-sm text-slate-500">
          Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
        </p>

        <div className="mt-10 space-y-8 text-slate-600 leading-relaxed">

          <section>
            <h2 className="text-xl font-bold text-slate-900">1. Introduction</h2>
            <p className="mt-3">
              Skyward Technologies ("we", "our", "us") respects your privacy.
              This Privacy Policy explains what information we collect through
              this website, how we use it, and the choices you have.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900">2. Information We Collect</h2>
            <p className="mt-3">
              When you use our contact form, we collect the information you
              provide directly, such as your name, email address, phone
              number, and project details. We do not collect this information
              through any other means on this site.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900">3. How We Use Your Information</h2>
            <p className="mt-3">
              We use the information you submit solely to respond to your
              inquiry, discuss your project, and provide the services you
              request. We do not sell or rent your information to third parties.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900">4. Data Sharing</h2>
            <p className="mt-3">
              Contact form submissions are processed through a third-party
              email delivery service to reach our team. We do not share your
              information with any other third party except where required by law.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900">5. Data Retention</h2>
            <p className="mt-3">
              We retain the information you submit only for as long as
              necessary to respond to your inquiry or fulfill a contracted
              service, unless a longer retention period is required by law.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900">6. Your Rights</h2>
            <p className="mt-3">
              You may request access to, correction of, or deletion of your
              personal information at any time by contacting us at
              support.skywardtechnologies@gmail.com.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900">7. Contact Us</h2>
            <p className="mt-3">
              If you have questions about this Privacy Policy, reach out to
              us at support.skywardtechnologies@gmail.com.
            </p>
          </section>

        </div>

      </div>

    </main>

  );

}
