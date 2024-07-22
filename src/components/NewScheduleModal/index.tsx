import * as Dialog from '@radix-ui/react-dialog';
import { X } from 'lucide-react';
import { CloseButton, Content, Overlay } from './styles';
import { CustomDatePicker } from '../CustomDatePicker';
import { Button } from '../Button';
import { useForm } from 'react-hook-form';
import {
  convertDateToFixedUtcTime,
  newScheduleFormInputs,
  newScheduleFormResolver,
} from '@/utils';
import { useContext } from 'react';
import { SchedulesContext } from '@/contexts';
import { number } from 'zod';
import { toast } from 'sonner';

export function NewScheduleModal() {
  const { registerSchedule,  } = useContext(SchedulesContext);

  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<newScheduleFormInputs>({
    resolver: newScheduleFormResolver,
  });

  async function handleCreateSchedules(data: newScheduleFormInputs) {
    if (
      !data.patientName ||
      !data.patientBirthDate ||
      !data.scheduleDate ||
      !data.scheduleHour
    ) {
      toast.error('Todos os campos são obrigatórios.');
      return;
    }

    await registerSchedule(
      data.patientName,
      `${convertDateToFixedUtcTime(data.patientBirthDate)}`,
      `${convertDateToFixedUtcTime(data.scheduleDate, true, data.scheduleHour)}`,
    );
  }

  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <Dialog.Title>Novo agendamento</Dialog.Title>
        <CloseButton>
          <X size={24} />
        </CloseButton>
        <form autoComplete="off" onSubmit={handleSubmit(handleCreateSchedules)}>
          <label htmlFor="patientName">Nome do paciente:</label>
          <input
            type="text"
            id="patientName"
            placeholder="Nome do paciente"
            {...register('patientName')}
          />
          {errors.patientName && <p>{errors.patientName.message}</p>}

          <label htmlFor="patientBirthDate">Data de nascimento:</label>
          <CustomDatePicker
            maxDate={true}
            id="patientBirthDate"
            {...register('patientBirthDate')}
          />
          {errors.patientBirthDate && <p>{errors.patientBirthDate.message}</p>}

          <label htmlFor="scheduleDate">Data de agendamento:</label>
          <CustomDatePicker
            minDate={true}
            id="scheduleDate"
            {...register('scheduleDate')}
          />
          {errors.scheduleDate && <p>{errors.scheduleDate.message}</p>}

          <label htmlFor="scheduleHour">Horário agendamento:</label>
          <input
            type="time"
            id="scheduleHour"
            min="08:00"
            max="17:00"
            step="3600"
            {...register('scheduleHour')}
          />

          <Button type="submit" disabled={isSubmitting}>
            Agendar
          </Button>
        </form>
      </Content>
    </Dialog.Portal>
  );
}
