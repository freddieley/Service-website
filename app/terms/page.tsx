import Link from "next/link";

export default function Terms() {
  return (
    <main className="legal-page">
      <Link href="/" className="legal-back">← Bluo</Link>
      <h1>Terms of service</h1>
      <p className="legal-meta">Last updated: 30 September 2026</p>

      <h2>About the service</h2>
      <p>
        Bluo Web Design &amp; Development provides website design and development services.
        Projects are agreed individually in writing before work begins.
      </p>

      <h2>Launch package</h2>
      <p>
        The advertised £199 Launch package covers the scope stated on the Bluo website at the
        time of enquiry. It is intended for one focused website of up to four pages. Additional
        pages, complex integrations, booking systems, e-commerce and other substantial
        functionality may require a separate written quote.
      </p>

      <h2>Project approval</h2>
      <p>
        Work begins only after the project scope, price, payment arrangements and any important
        deadlines have been agreed in writing. A revision round means one consolidated round of
        reasonable changes to the agreed design/build scope.
      </p>

      <h2>Client responsibilities</h2>
      <p>
        You are responsible for providing accurate business information, lawful content, logos,
        images and other materials you have the right to use. Delays in supplying required
        material can affect delivery dates.
      </p>

      <h2>Third-party services</h2>
      <p>
        Domains, hosting, payment providers, email services, booking systems and other
        third-party products may have their own fees and terms. These are not included unless
        the written project scope says otherwise.
      </p>

      <h2>Payment and cancellation</h2>
      <p>
        Payment terms, deposits, cancellation arrangements and any refund rights will be stated
        in the project agreement or invoice. Consumer and business-client rights may differ, and
        nothing here removes rights that cannot legally be excluded.
      </p>

      <h2>Ownership</h2>
      <p>
        Unless the written project agreement says otherwise, the client receives the agreed
        website deliverables once all amounts due have been paid. Third-party software, fonts,
        services and licences remain subject to their own terms.
      </p>

      <h2>Liability</h2>
      <p>
        The final agreement will contain appropriate limits and exclusions permitted by
        applicable UK law. Nothing in these terms excludes liability that cannot legally be
        excluded.
      </p>

      <h2>Contact</h2>
      <p>
        Questions about a project or these terms can be sent to{" "}
        <a href="mailto:freddie.ley@icloud.com">freddie.ley@icloud.com</a>.
      </p>

      <p>
        <strong>Important:</strong> these are starter terms, not legal advice. Before taking paid
        client work, replace this page with the final terms agreed for your business structure,
        trading details and payment model.
      </p>
    </main>
  );
}
