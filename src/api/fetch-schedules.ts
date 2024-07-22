import { api } from '@/lib';
import { Schedule } from './models';

type schedulesList = { schedules: Schedule[] };

export async function fetchSchedules(
  page: number,
  patientName?: string,
  scheduleDate?: string,
): Promise<schedulesList> {
  try {
    const params: { [key: string]: any } = { page };

    if (patientName) {
      params.patientName = patientName;
    }
    if (scheduleDate) {
      params.scheduleDate = scheduleDate;
    }

    const response = await api.get('/schedules/search', { params });

    return response.data;
  } catch (error) {
    console.error('Failed to fetch schedules:', error);
    throw error;
  }
}
