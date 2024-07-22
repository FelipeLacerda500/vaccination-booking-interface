import { createContext, ReactNode, useEffect, useState } from 'react';
import { toast } from 'sonner';
import { Schedule } from '@/api/models';
import {
  listSchedules,
  fetchSchedules,
  createSchedule,
  confirmSchedule,
} from '@/api';

interface ScheduleContextType {
  schedules: Schedule[];
  page: number;
  setPage: (page: number) => void;
  hasNextPage: boolean;
  searchSchedules: (
    page: number,
    patientName?: string,
    scheduleDate?: string,
  ) => Promise<void>;
  registerSchedule: (
    patient_name: string,
    patient_birth_date: string,
    schedule_date: string,
  ) => Promise<void>;
  finalizeSchedule: (id: string) => Promise<void>;
}

interface SchedulesProviderProps {
  children: ReactNode;
}

export const SchedulesContext = createContext({} as ScheduleContextType);

export function SchedulesProvider({ children }: SchedulesProviderProps) {
  const [schedules, setSchedules] = useState<Schedule[]>([]);
  const [page, setPage] = useState<number>(1);
  const [hasNextPage, setHasNextPage] = useState<boolean>(false);

  async function loadSchedules(page: number) {
    const { schedules } = await listSchedules(page);
    setSchedules(schedules);

    const nextPageData = await listSchedules(page + 1);

    setHasNextPage(nextPageData.schedules.length > 0);
  }

  async function searchSchedules(
    page: number,
    patientName?: string,
    scheduleDate?: string,
  ) {
    const { schedules } = await fetchSchedules(page, patientName, scheduleDate);
    setSchedules(schedules);

    const nextPageData = await listSchedules(page + 1);

    setHasNextPage(nextPageData.schedules.length > 0);
  }

  async function registerSchedule(
    patient_name: string,
    patient_birth_date: string,
    schedule_date: string,
  ) {
    try {
      await createSchedule({
        patient_name,
        patient_birth_date,
        schedule_date,
      });

      loadSchedules(1);

      toast.success('Agendamento criado com sucesso!');
    } catch (error) {
      toast.error(
        'Ocorreu um erro ao criar o agendamento. Verifique se os dados estão inseridos corretamente ou mude o horário.',
      );
    }
  }

  async function finalizeSchedule(id: string) {
    try {
      await confirmSchedule(id);

      const updatedSchedules = schedules.map((schedule) =>
        schedule.id === id ? { ...schedule, realized: true } : schedule,
      );

      setSchedules(updatedSchedules);
      toast.success('Agendamento confirmado com sucesso!');
    } catch (error) {
      toast.error('Ocorreu um erro ao confirmar o agendamento.');
    }
  }

  useEffect(() => {
    loadSchedules(page);
  }, [page]);

  return (
    <SchedulesContext.Provider
      value={{
        schedules,
        page,
        setPage,
        hasNextPage,
        searchSchedules,
        registerSchedule,
        finalizeSchedule,
      }}
    >
      {children}
    </SchedulesContext.Provider>
  );
}
