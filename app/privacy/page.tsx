import Link from "next/link";

export default function Privacy() {
  return (
    <main className="legal-page">
      <Link href="/" className="legal-back">← Bluo</Link>
      <h1>Privacy notice</h1>
      <p className="legal-meta">Last updated: 6 October 2026</p>

      <h2>Who I am</h2>
      <p>
        Bluo Web Design &amp; Development is the trading name used by Freddie Ley for
        independent web design and development services in the UK. For privacy questions,
        contact <a href="mailto:freddie.ley@icloud.com">freddie.ley@icloud.com</a>.
      </p>

      <h2>Information I collect</h2>
      <p>
        If you use the enquiry form, I collect your name, business name, email address,
        optional current website address and project brief. If you contact me by email,
        I also receive the information contained in your message and any attachments you
        choose to send.
      </p>

      <h2>Why I use your information</h2>
      <p>
        I use enquiry information to respond to requests, assess project requirements,
        prepare quotations, communicate about agreed work and provide the services you
        request. Where a project is agreed, information may also be used for invoicing,
        accounting, legal and record-keeping purposes.
      </p>
      <p>
        The lawful basis will normally be taking steps at your request before a contract,
        performing a contract, complying with a legal obligation, or legitimate interests
        where appropriate.
      </p>

      <h2>Who processes your information</h2>
      <p>
        Website enquiries are transmitted through Resend, the email delivery provider used
        by Bluo, and are delivered to Bluo's email inbox. The website is hosted through
        Vercel. These providers may process technical information required to provide
        hosting and email delivery. Payment providers and other third-party services may
        process information when they are used for a project.
      </p>

      <h2>How long I keep information</h2>
      <p>
        Enquiry information is kept only for as long as reasonably necessary to deal with
        the enquiry and any resulting relationship. Project, invoice, accounting and legal
        records are retained for the periods required by law or reasonably necessary to
        establish, exercise or defend legal claims. Information that is no longer needed
        is deleted or securely disposed of where practicable.
      </p>

      <h2>Cookies and analytics</h2>
      <p>
        The Bluo website does not intentionally use advertising cookies or behavioural
        tracking. Essential technical processing may occur as part of hosting and security.
        If non-essential analytics or cookies are introduced, the information provided to
        visitors and any consent mechanism will be updated as required.
      </p>

      <h2>Your rights</h2>
      <p>
        Depending on the circumstances, UK data protection law gives you rights including
        access, correction, deletion, restriction, objection and data portability, together
        with rights relating to consent where consent is the lawful basis. You can contact
        me at <a href="mailto:freddie.ley@icloud.com">freddie.ley@icloud.com</a> about
        a request.
      </p>

      <h2>Complaints</h2>
      <p>
        I would welcome the opportunity to resolve a privacy concern directly. You can
        also complain to the Information Commissioner's Office if you believe your
        information has been handled unlawfully.
      </p>

      <h2>Security</h2>
      <p>
        I take reasonable technical and organisational measures to protect personal
        information. No internet transmission or storage system can be guaranteed to be
        completely secure, so information should only be sent where necessary.
      </p>
    </main>
  );
}
