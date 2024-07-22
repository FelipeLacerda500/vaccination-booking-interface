import * as Dialog from '@radix-ui/react-dialog';
import { X } from 'lucide-react';
import { CloseButton, Content, Overlay } from './styles';
import { CustomDatePicker } from '../CustomDatePicker';

export function NewScheduleModal() {
  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <Dialog.Title>Novo agendamento</Dialog.Title>
        <CloseButton>
          <X size={24} />
        </CloseButton>
        <form>
          <label htmlFor="patientName">Nome do paciente:</label>
          <input
            type="text"
            id="patientName"
            placeholder="Nome do paciente"
            required
          />

          <label htmlFor="patientBirthDate">Data de nascimento:</label>
          <CustomDatePicker id="patientBirthDate" />

          <label htmlFor="scheduleDate">Data de agendamento:</label>
          <CustomDatePicker id="scheduleDate" />

          <label htmlFor="scheduleDate">Horário agendamento:</label>
          <input type="time" min="08:00" max="17:00" step="3600" />

          <button type="submit">Agendar</button>
        </form>
      </Content>
    </Dialog.Portal>
  );
}
