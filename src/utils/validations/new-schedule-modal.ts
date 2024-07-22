import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

export const newScheduleFormSchema = z.object({
  patientName: z.string(),
  patientBirthDate: z.string(),
  scheduleDate: z.string(),
  scheduleHour: z.string(),
});

export type newScheduleFormInputs = z.infer<typeof newScheduleFormSchema>;

export const newScheduleFormResolver = zodResolver(newScheduleFormSchema);
