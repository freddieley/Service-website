import Link from "next/link";

export default function Privacy() {
  return (
    <main className="legal-page">
      <Link href="/" className="legal-back">← Bluo</Link>
      <h1>Privacy notice</h1>
      <p className="legal-meta">Last updated: 30 September 2026</p>

      <h2>Who I am</h2>
      <p>
        Bluo Web Design &amp; Development is an independent web design and development service
        operated by Freddie Ley in the UK. For privacy questions, contact{" "}
        <a href="mailto:freddie.ley@icloud.com">freddie.ley@icloud.com</a>.
      </p>

      <h2>What this website collects</h2>
      <p>
        The enquiry form asks for your name, business name, email address, current website
        (optional) and project brief. The form currently prepares an email in your own email
        client rather than sending the information to a Bluo database.
      </p>

      <h2>Email</h2>
      <p>
        If you contact Bluo by email, your message and contact details are used to respond to
        your enquiry and, where relevant, discuss or deliver a project.
      </p>

      <h2>Third parties</h2>
      <p>
        The site may be hosted by Vercel. When the site is deployed, normal hosting, security
        and technical request data may be processed by the hosting provider. Payment processing,
        if enabled, will be handled by the payment provider shown at checkout.
      </p>

      <h2>Cookies and analytics</h2>
      <p>
        This site does not intentionally use advertising cookies. If analytics are added later,
        this notice should be updated before they are enabled.
      </p>

      <h2>Your rights</h2>
      <p>
        UK data protection law may give you rights over personal data, including access,
        correction and deletion. Contact me by email if you want to exercise an applicable right.
      </p>

      <p>
        <strong>Important:</strong> this is a practical starter notice, not legal advice. Before
        accepting client work at scale, the final business identity, trading address, payment
        providers and any analytics/cookie tools should be reflected here.
      </p>
    </main>
  );
}
