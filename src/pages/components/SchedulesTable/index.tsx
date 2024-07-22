import { ChevronLeft, ChevronRight, ChevronsLeft } from 'lucide-react';
import {
  SchedulesTableContainer,
  PaginationButtonsContainer,
  PaginationButton,
  ConfirmSheduleButton,
} from './styles';

export function SchedulesTable() {
  return (
    <SchedulesTableContainer>
      <thead>
        <tr>
          <td width="45%">Paciente</td>
          <td width="15%">Data</td>
          <td width="5%">Horário</td>
          <td width="20%">Status</td>
          <td width="15%">
            <PaginationButtonsContainer>
              <PaginationButton>
                <ChevronsLeft size={16} />
                <span className="sr-only">Primeira página</span>
              </PaginationButton>
              <PaginationButton>
                <ChevronLeft size={16} />
                <span className="sr-only">Página anterior</span>
              </PaginationButton>
              <PaginationButton>
                <ChevronRight size={16} />
                <span className="sr-only">Próxima página</span>
              </PaginationButton>
            </PaginationButtonsContainer>
          </td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Felipe Lacerda Fernandes de Assis</td>
          <td>03/09/2024</td>
          <td>15:00</td>
          <td>Nao realizado</td>
          <td>
            <ConfirmSheduleButton disabled={false}>
              Confirmar
            </ConfirmSheduleButton>
          </td>
        </tr>
        <tr>
          <td>Felipe Lacerda Fernandes de Assis</td>
          <td>03/09/2024</td>
          <td>11:00</td>
          <td>Nao realizado</td>
          <td>
            <ConfirmSheduleButton disabled={true}>
              Confirmar
            </ConfirmSheduleButton>
          </td>
        </tr>
      </tbody>
    </SchedulesTableContainer>
  );
}
