import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { convertDateToFixedUtcTime } from '@/utils';

export const searchFormSchema = z.object({
  patientName: z.string().optional(),
  scheduleDate: z
    .string()
    .transform((date) => convertDateToFixedUtcTime(date))
    .optional(),
});

export type SearchFormInputs = z.infer<typeof searchFormSchema>;

export const searchFormResolver = zodResolver(searchFormSchema);
