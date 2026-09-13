import type { InquiryPayload } from '@/data/contact';

const WEB3FORMS_ENDPOINT = 'https://api.web3forms.com/submit';
const REQUEST_TIMEOUT_MS = 15000;

export const INQUIRY_MESSAGES = {
  offlineBefore: 'Unable to send your inquiry. Please check your internet connection and try again.',
  offlineBanner: 'You appear to be offline. Please check your internet connection.',
  onlineRestored: 'Connection restored. You can send your inquiry again.',
  network: "We couldn't complete your inquiry submission. Please check your internet connection and try again.",
  unconfirmed:
    "We couldn't confirm the submission status due to a connection issue. Please check your internet connection before trying again.",
  timeout: 'The request is taking longer than expected. Please check your connection and try again.',
  api: 'Sorry, we were unable to send your inquiry at the moment. Please try again.',
} as const;

export type InquiryErrorCode = 'offline' | 'network' | 'unconfirmed' | 'timeout' | 'api';

export class InquiryError extends Error {
  readonly code: InquiryErrorCode;

  constructor(code: InquiryErrorCode, message: string) {
    super(message);
    this.name = 'InquiryError';
    this.code = code;
  }
}

export function isBrowserOffline() {
  return typeof navigator !== 'undefined' && navigator.onLine === false;
}

function buildMessage(data: InquiryPayload) {
  return [
    'NEW PORTFOLIO INQUIRY',
    '',
    'Full Name:',
    data.name,
    '',
    'Email Address:',
    data.email,
    '',
    'Mobile Number:',
    data.mobile,
    '',
    'City:',
    data.city,
  ].join('\n');
}

function isAbortError(error: unknown) {
  return error instanceof DOMException
    ? error.name === 'AbortError'
    : error instanceof Error && error.name === 'AbortError';
}

function isConfirmedSuccess(result: unknown): boolean {
  return Boolean(result && typeof result === 'object' && (result as { success?: unknown }).success === true);
}

/**
 * Sends an inquiry through Web3Forms.
 *
 * Add your access key in a local `.env` file (not committed):
 *   VITE_WEB3FORMS_ACCESS_KEY=YOUR_WEB3FORMS_ACCESS_KEY
 *
 * Create the key at https://web3forms.com — the inbox you verify there
 * is the destination. Never put Gmail or SMTP passwords in this project.
 *
 * For Vercel, add the same variable in Project Settings → Environment Variables.
 */
export async function submitInquiry(data: InquiryPayload): Promise<void> {
  const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY?.trim();
  if (!accessKey || accessKey === 'YOUR_WEB3FORMS_ACCESS_KEY') {
    throw new InquiryError('api', INQUIRY_MESSAGES.api);
  }

  if (data.botcheck?.trim()) {
    await new Promise((resolve) => window.setTimeout(resolve, 600));
    throw new InquiryError('api', INQUIRY_MESSAGES.api);
  }

  if (isBrowserOffline()) {
    throw new InquiryError('offline', INQUIRY_MESSAGES.offlineBefore);
  }

  const controller = new AbortController();
  const timeoutId = window.setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);

  let response: Response;
  try {
    response = await fetch(WEB3FORMS_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      signal: controller.signal,
      body: JSON.stringify({
        access_key: accessKey,
        subject: `New Portfolio Inquiry from ${data.name}`,
        from_name: 'Divy Jain Portfolio',
        replyto: data.email,
        name: data.name,
        email: data.email,
        'Full Name': data.name,
        'Email Address': data.email,
        'Mobile Number': data.mobile,
        City: data.city,
        message: buildMessage(data),
        botcheck: data.botcheck || '',
      }),
    });
  } catch (error) {
    if (isAbortError(error)) {
      throw new InquiryError('timeout', INQUIRY_MESSAGES.timeout);
    }
    if (isBrowserOffline()) {
      throw new InquiryError('unconfirmed', INQUIRY_MESSAGES.unconfirmed);
    }
    throw new InquiryError('network', INQUIRY_MESSAGES.network);
  } finally {
    window.clearTimeout(timeoutId);
  }

  let result: unknown = null;
  try {
    result = await response.json();
  } catch {
    throw new InquiryError(
      response.ok ? 'unconfirmed' : 'api',
      response.ok ? INQUIRY_MESSAGES.unconfirmed : INQUIRY_MESSAGES.api,
    );
  }

  if (!isConfirmedSuccess(result)) {
    throw new InquiryError('api', INQUIRY_MESSAGES.api);
  }
}

export function inquiryErrorMessage(error: unknown) {
  if (error instanceof InquiryError) return error.message;
  return INQUIRY_MESSAGES.api;
}
