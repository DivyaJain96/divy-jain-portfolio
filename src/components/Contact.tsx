import {
  cloneElement,
  isValidElement,
  useEffect,
  useId,
  useRef,
  useState,
  type ChangeEvent,
  type FormEvent,
  type ReactElement,
  type ReactNode,
} from 'react';
import { AlertCircle, ArrowUpRight, Linkedin, Loader2, Mail, MapPin, MessageCircle, Send, Wifi, WifiOff } from 'lucide-react';
import { profile, whatsappChatUrl } from '@/data/portfolio';
import {
  INQUIRY_MESSAGES,
  inquiryErrorMessage,
  isBrowserOffline,
  submitInquiry,
} from '@/lib/submitInquiry';
import Reveal from './ui/Reveal';

type Status = 'idle' | 'loading' | 'error';

interface FormErrors {
  name?: string;
  email?: string;
  mobile?: string;
  city?: string;
}

const emptyForm = {
  name: '',
  email: '',
  mobile: '',
  city: '',
  botcheck: '',
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MOBILE_PATTERN = /^\+?[0-9]{8,15}$/;

function normalizeMobile(value: string) {
  return value.replace(/[\s().-]/g, '');
}

export default function Contact() {
  const [status, setStatus] = useState<Status>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [errors, setErrors] = useState<FormErrors>({});
  const [form, setForm] = useState(emptyForm);
  const [connectionNote, setConnectionNote] = useState<'offline' | 'restored' | null>(null);
  const submittingRef = useRef(false);

  useEffect(() => {
    const goOffline = () => setConnectionNote('offline');
    const goOnline = () => setConnectionNote((current) => (current === 'offline' ? 'restored' : current));

    if (isBrowserOffline()) setConnectionNote('offline');

    window.addEventListener('offline', goOffline);
    window.addEventListener('online', goOnline);
    return () => {
      window.removeEventListener('offline', goOffline);
      window.removeEventListener('online', goOnline);
    };
  }, []);

  useEffect(() => {
    if (connectionNote !== 'restored') return;
    const id = window.setTimeout(() => setConnectionNote(null), 2800);
    return () => window.clearTimeout(id);
  }, [connectionNote]);

  const setField = (key: keyof typeof emptyForm) => (e: ChangeEvent<HTMLInputElement>) => {
    setForm((current) => ({ ...current, [key]: e.target.value }));
    setErrors((current) => ({ ...current, [key]: undefined }));
    setErrorMessage('');
  };

  const validate = () => {
    const next: FormErrors = {};
    if (!form.name.trim() || form.name.trim().length < 2) {
      next.name = 'Please enter your full name';
    }
    if (!form.email.trim() || !EMAIL_PATTERN.test(form.email.trim())) {
      next.email = 'Please enter a valid email address';
    }
    if (!form.mobile.trim() || !MOBILE_PATTERN.test(normalizeMobile(form.mobile))) {
      next.mobile = 'Please enter a valid mobile number';
    }
    if (!form.city.trim() || form.city.trim().length < 2) {
      next.city = 'Please enter your city';
    }
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (submittingRef.current || status === 'loading') return;
    if (!validate()) return;

    if (isBrowserOffline()) {
      setConnectionNote('offline');
      setStatus('error');
      setErrorMessage(INQUIRY_MESSAGES.offlineBefore);
      return;
    }

    submittingRef.current = true;
    setStatus('loading');
    setErrorMessage('');

    try {
      await submitInquiry({
        name: form.name.trim(),
        email: form.email.trim(),
        mobile: form.mobile.trim(),
        city: form.city.trim(),
        botcheck: form.botcheck,
      });
      setForm(emptyForm);
      window.location.assign('/thank-you');
    } catch (error) {
      submittingRef.current = false;
      setStatus('error');
      setErrorMessage(inquiryErrorMessage(error));
    }
  };

  const whatsappNumber = profile.whatsapp.trim() || profile.phone.trim();
  const whatsappHref = whatsappChatUrl(whatsappNumber);

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px hairline" />
      <div className="container-max">
        <div className="grid items-start gap-10 lg:grid-cols-[0.88fr_1.12fr]">
          <Reveal>
            <div className="mb-5 flex items-center gap-3">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center text-champagne-400" aria-hidden>
                <Mail className="h-4 w-4" strokeWidth={1.75} />
              </span>
              <span className="kicker !gap-0 before:hidden">Contact</span>
            </div>
            <h2 className="text-[1.85rem] font-medium leading-[1.12] tracking-tight text-ink-100 sm:text-4xl lg:text-5xl">
              Let’s build
              <span className="mt-2 block font-medium text-champagne-300">something great.</span>
            </h2>
            <p className="mt-5 max-w-md text-ink-200">
              Have an idea, project, or technical challenge? I would be glad to discuss enterprise software, web
              application development, APIs, system integrations, frontend/UI work, or improvements to an existing
              product.
            </p>
            <p className="mt-4 max-w-md text-ink-300">
              Share your details below. I will get back to you as soon as possible, typically within 24 hours.
            </p>

            <div className="mt-8 space-y-3">
              {profile.email && (
                <a
                  href={`mailto:${profile.email}`}
                  className="contact-link panel group flex items-center justify-between rounded-2xl px-4 py-4"
                >
                  <span className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-champagne-300 transition-transform duration-220 ease-out group-hover:-translate-y-0.5" />
                    <span>
                      <span className="block text-xs text-ink-400">Email</span>
                      <span className="text-ink-100">{profile.email}</span>
                    </span>
                  </span>
                  <ArrowUpRight className="h-4 w-4 text-ink-400 transition-transform duration-220 ease-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              )}
              {whatsappHref && (
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-link panel group flex items-center justify-between rounded-2xl px-4 py-4"
                >
                  <span className="flex items-center gap-3">
                    <MessageCircle className="h-5 w-5 text-champagne-300 transition-transform duration-220 ease-out group-hover:-translate-y-0.5" />
                    <span>
                      <span className="block text-xs text-ink-400">WhatsApp</span>
                      <span className="text-ink-100">{whatsappNumber}</span>
                    </span>
                  </span>
                  <ArrowUpRight className="h-4 w-4 text-ink-400 transition-transform duration-220 ease-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              )}
              <div className="panel flex items-center justify-between rounded-2xl px-4 py-4">
                <span className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-champagne-300" />
                  <span>
                    <span className="block text-xs text-ink-400">Location</span>
                    <span className="text-ink-100">{profile.location}</span>
                  </span>
                </span>
              </div>
              {profile.linkedin && (
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-link panel group flex items-center justify-between rounded-2xl px-4 py-4"
                >
                  <span className="flex items-center gap-3">
                    <Linkedin className="h-5 w-5 text-champagne-300 transition-transform duration-220 ease-out group-hover:-translate-y-0.5" />
                    <span>
                      <span className="block text-xs text-ink-400">LinkedIn</span>
                      <span className="text-ink-100">Connect with Divy</span>
                    </span>
                  </span>
                  <ArrowUpRight className="h-4 w-4 text-ink-400 transition-transform duration-220 ease-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              )}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <form onSubmit={handleSubmit} className="contact-panel panel rounded-[1.7rem] p-6 sm:p-8" noValidate>
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Full name" required error={errors.name}>
                  <input
                    value={form.name}
                    onChange={setField('name')}
                    className={fieldClass(errors.name)}
                    placeholder="Enter your full name"
                    autoComplete="name"
                    autoCapitalize="words"
                  />
                </Field>
                <Field label="Email address" required error={errors.email}>
                  <input
                    type="email"
                    inputMode="email"
                    value={form.email}
                    onChange={setField('email')}
                    className={fieldClass(errors.email)}
                    placeholder="Enter your email address"
                    autoComplete="email"
                  />
                </Field>
                <Field label="Mobile number" required error={errors.mobile}>
                  <input
                    type="tel"
                    inputMode="tel"
                    value={form.mobile}
                    onChange={setField('mobile')}
                    className={fieldClass(errors.mobile)}
                    placeholder="Enter your mobile number"
                    autoComplete="tel"
                  />
                </Field>
                <Field label="City" required error={errors.city}>
                  <input
                    value={form.city}
                    onChange={setField('city')}
                    className={fieldClass(errors.city)}
                    placeholder="Enter your city"
                    autoComplete="address-level2"
                    autoCapitalize="words"
                  />
                </Field>
              </div>

              <div className="hp-field" aria-hidden="true">
                <label>
                  Website
                  <input
                    tabIndex={-1}
                    autoComplete="off"
                    value={form.botcheck}
                    onChange={setField('botcheck')}
                  />
                </label>
              </div>

              {connectionNote && (
                <p
                  className="mt-5 flex items-start gap-2 text-sm text-ink-300"
                  role="status"
                  aria-live="polite"
                >
                  {connectionNote === 'offline' ? (
                    <WifiOff className="mt-0.5 h-4 w-4 shrink-0 text-champagne-300" />
                  ) : (
                    <Wifi className="mt-0.5 h-4 w-4 shrink-0 text-champagne-300" />
                  )}
                  {connectionNote === 'offline'
                    ? INQUIRY_MESSAGES.offlineBanner
                    : INQUIRY_MESSAGES.onlineRestored}
                </p>
              )}

              <button
                type="submit"
                className="btn-primary mt-6 w-full min-h-12"
                disabled={status === 'loading'}
                aria-busy={status === 'loading'}
              >
                {status === 'loading' ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" /> Connecting...
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4" /> Let's connect
                  </>
                )}
              </button>

              {status === 'error' && errorMessage && (
                <p className="mt-3 flex items-start gap-2 text-sm text-error-400" role="alert">
                  <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
                  {errorMessage}
                </p>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  required,
  error,
  className = '',
  children,
}: {
  label: string;
  required?: boolean;
  error?: string;
  className?: string;
  children: ReactNode;
}) {
  const id = useId();
  const errorId = `${id}-error`;
  const control = isValidElement(children)
    ? cloneElement(children as ReactElement, {
        id,
        'aria-invalid': Boolean(error) || undefined,
        'aria-describedby': error ? errorId : undefined,
      })
    : children;

  return (
    <label className={`block text-sm ${className}`} htmlFor={id}>
      <span className="mb-2 flex items-center justify-between gap-3 text-[0.8125rem] font-medium tracking-[0.01em] text-ink-200">
        <span>
          {label}
          {required && <span className="ml-1 text-champagne-400">*</span>}
        </span>
      </span>
      {control}
      {error && (
        <span id={errorId} className="mt-1.5 flex items-center gap-1 text-xs text-error-400">
          <AlertCircle className="h-3 w-3" /> {error}
        </span>
      )}
    </label>
  );
}

function fieldClass(error?: string) {
  return `field-input ${error ? 'is-error' : ''}`;
}
