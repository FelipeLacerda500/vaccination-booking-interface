import { api } from '@/lib';

export async function confirmSchedule(id: string): Promise<void> {
  try {
    await api.patch(`/schedules/confirm/${id}`);
  } catch (error) {
    console.error('Failed to confirm schedule:', error);
    throw error;
  }
}
