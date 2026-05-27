type InquirySubmission = {
  name: string;
  company: string;
  email: string;
  phone: string;
  equipmentType: string;
  location: string;
  duration: string;
  startDate?: string;
  message: string;
};

const scriptUrl = import.meta.env.VITE_GOOGLE_SCRIPT_URL as string | undefined;

export function isInquirySubmissionConfigured() {
  return Boolean(scriptUrl);
}

export async function submitInquiry(values: InquirySubmission) {
  if (!scriptUrl) {
    throw new Error('Missing VITE_GOOGLE_SCRIPT_URL');
  }

  const body = new FormData();
  body.set('submittedAt', new Date().toISOString());
  body.set('pageUrl', window.location.href);

  Object.entries(values).forEach(([key, value]) => {
    body.set(key, value ?? '');
  });

  await fetch(scriptUrl, {
    method: 'POST',
    mode: 'no-cors',
    body,
  });
}
