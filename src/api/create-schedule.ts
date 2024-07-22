import { api } from '@/lib';

type createSchedule = {
  patient_name: string;
  patient_birth_date: string;
  schedule_date: string;
};

export async function createSchedule(
  schedule: createSchedule,
): Promise<boolean> {
  try {
    const camelCaseSchedule = {
      patientName: schedule.patient_name,
      patientBirthDate: schedule.patient_birth_date,
      scheduleDate: schedule.schedule_date,
    };

    await api.post('/', { ...camelCaseSchedule });

    return true;
  } catch (error) {
    console.error('Failed to create schedule:', error);
    throw error;
  }
}
