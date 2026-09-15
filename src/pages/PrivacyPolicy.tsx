import LegalLayout, { LegalSection } from '@/components/LegalLayout';
import { SITE_URL, profile } from '@/data/portfolio';

const UPDATED = '15 September 2026';

export default function PrivacyPolicy() {
  return (
    <LegalLayout
      title="Privacy Policy"
      kicker="Legal"
      path="/privacy-policy"
      updated={UPDATED}
      description="Privacy Policy for Divy Jain’s personal portfolio website, including how contact-form inquiries are handled through Web3Forms."
    >
      <LegalSection title="1. Introduction">
        <p>
          This Privacy Policy describes how this personal portfolio website ({SITE_URL}/) handles information when you
          visit the site or send an inquiry. The website is operated by {profile.name}, a Software Developer based in{' '}
          {profile.location}.
        </p>
        <p>
          This page is written to reflect how the website currently works. It is not a certification of any particular
          privacy standard.
        </p>
      </LegalSection>

      <LegalSection title="2. Information We Collect">
        <p>
          If you only browse the site, this portfolio does not ask you to create an account and does not run its own
          advertising or analytics trackers.
        </p>
        <p>
          Like most websites, the hosting provider may process standard technical information needed to deliver the
          pages — for example IP address, browser type, and request logs. That processing is part of hosting the site,
          not a separate tracking feature added in this portfolio.
        </p>
      </LegalSection>

      <LegalSection title="3. Information Submitted Through the Contact Form">
        <p>If you use the contact form, you choose to send:</p>
        <ul className="list-disc space-y-1 pl-5">
          <li>Full name</li>
          <li>Email address</li>
          <li>Mobile number</li>
          <li>City</li>
        </ul>
        <p>
          The form also includes a hidden anti-spam field. You should leave that field empty. It is used only to reduce
          automated submissions.
        </p>
      </LegalSection>

      <LegalSection title="4. How Information Is Used">
        <p>Information submitted through the contact form is used to receive and respond to professional inquiries.</p>
        <p>
          It is not sold, and this website is not used to run marketing lists or advertising profiles. LinkedIn visits
          and resume downloads are handled by those destinations under their own terms.
        </p>
      </LegalSection>

      <LegalSection title="5. Contact Form / Third-Party Service">
        <p>
          Contact-form inquiries are sent through Web3Forms so they can be delivered to {profile.name}. The request is
          made to Web3Forms over HTTPS. This portfolio does not keep its own database of form submissions.
        </p>
        <p>
          Web3Forms is a third-party service. How it stores, forwards, or retains submissions is governed by Web3Forms,
          not by this website’s own database. Please review their documentation and privacy information here:{' '}
          <a
            href="https://web3forms.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-champagne-200 underline-offset-4 hover:text-champagne-100 hover:underline"
          >
            web3forms.com
          </a>
          .
        </p>
      </LegalSection>

      <LegalSection title="6. Cookies and Similar Technologies">
        <p>
          This portfolio does not set its own tracking cookies and does not use a separate analytics script. A custom
          cursor and smooth-scroll behavior may run in your browser while you use the site; they are display features,
          not a data-collection product.
        </p>
        <p>
          Fonts are loaded from Google Fonts. Google may process technical data under its own policies when those fonts
          are requested.
        </p>
      </LegalSection>

      <LegalSection title="7. External Links">
        <p>
          This website may link to LinkedIn and other external sites. Those sites have their own privacy practices. This
          policy applies only to this portfolio website.
        </p>
      </LegalSection>

      <LegalSection title="8. Data Security">
        <p>
          The site is served over HTTPS, and contact-form submissions are sent to Web3Forms over HTTPS. No method of
          transmission or storage is completely secure, and this page does not claim that information can never be
          accessed without authorization.
        </p>
      </LegalSection>

      <LegalSection title="9. Data Retention">
        <p>
          This website does not retain contact-form submissions in its own application storage. Copies that reach{' '}
          {profile.name} through Web3Forms and email are kept only as needed to respond to the inquiry and for ordinary
          professional record-keeping.
        </p>
      </LegalSection>

      <LegalSection title="10. Your Rights">
        <p>
          Depending on the law that applies to you, you may be able to ask for access to, correction of, or deletion of
          personal information you submitted. To make a request, use the{' '}
          <a href="/#contact" className="text-champagne-200 underline-offset-4 hover:text-champagne-100 hover:underline">
            contact form
          </a>
          {profile.linkedin ? (
            <>
              {' '}
              or{' '}
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-champagne-200 underline-offset-4 hover:text-champagne-100 hover:underline"
              >
                LinkedIn
              </a>
            </>
          ) : null}
          .
        </p>
      </LegalSection>

      <LegalSection title="11. Changes to This Privacy Policy">
        <p>
          This page may be updated when the website’s behavior changes. The “Last updated” date at the top of the page
          will change when that happens.
        </p>
      </LegalSection>

      <LegalSection title="12. Contact">
        <p>
          For privacy questions about this website, use the contact form at{' '}
          <a href={`${SITE_URL}/#contact`} className="text-champagne-200 underline-offset-4 hover:text-champagne-100 hover:underline">
            {SITE_URL}/#contact
          </a>
          {profile.linkedin ? ', or send a message on LinkedIn.' : '.'}
        </p>
      </LegalSection>
    </LegalLayout>
  );
}
