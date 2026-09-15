import LegalLayout, { LegalSection } from '@/components/LegalLayout';
import { SITE_URL, profile } from '@/data/portfolio';

const UPDATED = '15 September 2026';

export default function TermsAndConditions() {
  return (
    <LegalLayout
      title="Terms & Conditions"
      kicker="Legal"
      path="/terms-and-conditions"
      updated={UPDATED}
      description="Terms & Conditions for using Divy Jain’s personal portfolio website, including portfolio content, inquiries, and external links."
    >
      <LegalSection title="1. Introduction">
        <p>
          These Terms & Conditions explain how you may use this personal portfolio website ({SITE_URL}/), operated by{' '}
          {profile.name}. By using the site, you agree to these terms.
        </p>
        <p>If you do not agree, please do not use the website.</p>
      </LegalSection>

      <LegalSection title="2. Website Use">
        <p>
          This website is provided for professional introduction: to present work, skills, and a way to get in touch.
          You may browse the public pages and send an inquiry through the contact form.
        </p>
        <p>
          Do not misuse the site — for example by attempting to disrupt it, submit automated spam, or use the contact
          form for anything other than a genuine professional inquiry.
        </p>
      </LegalSection>

      <LegalSection title="3. Intellectual Property">
        <p>
          Unless stated otherwise, the design, writing, and original content on this website belong to {profile.name}.
          You may view and share links to the site. You may not copy the site as your own portfolio, reuse substantial
          content without permission, or present the work as someone else’s.
        </p>
      </LegalSection>

      <LegalSection title="4. Portfolio Content">
        <p>
          Case studies and project descriptions are written to explain the type of work involved without sharing
          confidential client data, private credentials, or internal system details. Content is provided for information
          and may be updated from time to time.
        </p>
        <p>
          Named technologies, metrics, and outcomes reflect information already presented on this website. They are not
          a promise that the same result will apply to every future project.
        </p>
      </LegalSection>

      <LegalSection title="5. External Links">
        <p>
          The site may link to LinkedIn, a resume file, or other third-party destinations. Those destinations are not
          controlled by this website, and their terms and privacy practices apply there.
        </p>
      </LegalSection>

      <LegalSection title="6. Contact / Inquiry Submissions">
        <p>
          If you send an inquiry, you are responsible for providing accurate details and for having the right to share
          them. Submissions are sent through Web3Forms so they can be delivered to {profile.name}. Please do not include
          passwords, payment-card numbers, or other sensitive secrets in the form.
        </p>
        <p>
          Sending an inquiry does not create a contract for work. Any engagement would be agreed separately.
        </p>
      </LegalSection>

      <LegalSection title="7. Disclaimer">
        <p>
          This website is provided as a personal professional portfolio. It is offered “as is,” without a warranty that
          it will always be available, error-free, or suitable for a particular purpose.
        </p>
      </LegalSection>

      <LegalSection title="8. Limitation of Liability">
        <p>
          To the extent permitted by applicable law, {profile.name} is not liable for loss arising from your use of, or
          inability to use, this website, or from your use of third-party sites linked from it. This does not affect
          rights that cannot be limited under applicable law.
        </p>
      </LegalSection>

      <LegalSection title="9. Changes to These Terms">
        <p>
          These terms may be updated as the website changes. The “Last updated” date at the top of the page will change
          when that happens. Continued use of the site after an update means you accept the revised terms.
        </p>
      </LegalSection>

      <LegalSection title="10. Contact">
        <p>
          Questions about these terms can be sent through the{' '}
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
    </LegalLayout>
  );
}
