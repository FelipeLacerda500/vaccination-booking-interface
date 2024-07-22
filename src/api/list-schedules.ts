import { api } from '@/lib';
import { Schedule } from './models';

type schedulesList = { schedules: Schedule[] };

export async function listSchedules(page: number): Promise<schedulesList> {
  try {
    const response = await api.get('/schedules', { params: { page } });
    return response.data;
  } catch (error) {
    console.error('Failed to list schedules:', error);
    throw error;
  }
}
