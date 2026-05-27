import { zodResolver } from '@hookform/resolvers/zod';
import { Send } from 'lucide-react';
import { useState, type ReactNode } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { equipmentCategories } from '../../data/equipment';
import { isInquirySubmissionConfigured, submitInquiry } from '../../services/inquirySubmission';
import { Button } from '../ui/Button';

const schema = z.object({
  name: z.string().min(2, 'Enter your name'),
  company: z.string().min(2, 'Enter company name'),
  email: z.string().email('Enter a valid email'),
  phone: z.string().min(8, 'Enter a valid phone number'),
  equipmentType: z.string().min(1, 'Select equipment'),
  location: z.string().min(2, 'Enter project location'),
  duration: z.string().min(1, 'Enter rental duration'),
  startDate: z.string().optional(),
  message: z.string().min(10, 'Tell us a little more'),
});

export type InquiryValues = z.infer<typeof schema>;

interface InquiryFormProps {
  compact?: boolean;
  includeStartDate?: boolean;
}

export function InquiryForm({ compact = false, includeStartDate = false }: InquiryFormProps) {
  const [success, setSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<InquiryValues>({
    resolver: zodResolver(schema),
    defaultValues: { equipmentType: '' },
  });

  const onSubmit = async (values: InquiryValues) => {
    setSubmitError('');
    try {
      await submitInquiry(values);
      setSuccess(true);
      reset();
    } catch {
      setSuccess(false);
      setSubmitError(
        isInquirySubmissionConfigured()
          ? 'We could not submit your inquiry right now. Please call or email us directly.'
          : 'Inquiry submission is not configured yet. Add VITE_GOOGLE_SCRIPT_URL to .env.local and restart the dev server.',
      );
    }
  };

  const fieldClass =
    'focus-ring w-full rounded-md border bg-white px-4 py-3 text-sm text-brand-ink transition placeholder:text-slate-400 dark:bg-slate-950 dark:text-white';

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
      {success ? (
        <div className="rounded-md border border-emerald-300 bg-emerald-50 p-4 text-sm font-semibold text-emerald-800 dark:border-emerald-800 dark:bg-emerald-950 dark:text-emerald-200">
          Thank you. Our rental team will contact you shortly.
        </div>
      ) : null}
      {submitError ? (
        <div className="rounded-md border border-red-300 bg-red-50 p-4 text-sm font-semibold text-red-800 dark:border-red-800 dark:bg-red-950 dark:text-red-200">
          {submitError}
        </div>
      ) : null}

      <div className={`grid gap-4 ${compact ? '' : 'md:grid-cols-2'}`}>
        <Field label="Name" error={errors.name?.message}>
          <input className={fieldClass} {...register('name')} placeholder="Your name" />
        </Field>
        <Field label="Company" error={errors.company?.message}>
          <input className={fieldClass} {...register('company')} placeholder="Company name" />
        </Field>
        <Field label="Email" error={errors.email?.message}>
          <input className={fieldClass} type="email" {...register('email')} placeholder="name@company.com" />
        </Field>
        <Field label="Phone" error={errors.phone?.message}>
          <input className={fieldClass} {...register('phone')} placeholder="+91" />
        </Field>
        <Field label="Equipment Required" error={errors.equipmentType?.message}>
          <select className={fieldClass} {...register('equipmentType')}>
            <option value="">Select equipment</option>
            {equipmentCategories.map((category) => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
        </Field>
        <Field label="Rental Duration" error={errors.duration?.message}>
          <input className={fieldClass} {...register('duration')} placeholder="e.g. 2 weeks" />
        </Field>
        <Field label="Project Location" error={errors.location?.message}>
          <input className={fieldClass} {...register('location')} placeholder="City / Site" />
        </Field>
        {includeStartDate ? (
          <Field label="Start Date" error={errors.startDate?.message}>
            <input className={fieldClass} type="date" {...register('startDate')} />
          </Field>
        ) : null}
      </div>

      <Field label="Message" error={errors.message?.message}>
        <textarea className={`${fieldClass} min-h-32 resize-y`} {...register('message')} placeholder="Tell us working height, site conditions and schedule." />
      </Field>

      <Button type="submit" variant="secondary" icon={Send} disabled={isSubmitting} className="w-full">
        {isSubmitting ? 'Submitting...' : 'Submit Inquiry'}
      </Button>
    </form>
  );
}

function Field({ label, error, children }: { label: string; error?: string; children: ReactNode }) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-bold text-slate-700 dark:text-slate-200">{label}</span>
      {children}
      {error ? <span className="mt-1 block text-sm font-semibold text-red-600 dark:text-red-400">{error}</span> : null}
    </label>
  );
}
