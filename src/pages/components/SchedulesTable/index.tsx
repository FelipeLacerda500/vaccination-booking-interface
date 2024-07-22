import { useContext } from 'react';
import { ChevronLeft, ChevronRight, ChevronsLeft } from 'lucide-react';
import { SchedulesTableContainer, PaginationButtonsContainer } from './styles';
import { SchedulesContext } from '@/contexts';
import { formatDate, getHoursFromDate } from '@/utils/date-methods';
import { Button } from '@/components';

export function SchedulesTable() {
  const { schedules, page, setPage, hasNextPage, finalizeSchedule } =
    useContext(SchedulesContext);

  const handleFirstPage = () => {
    setPage(1);
  };

  const handlePrevPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const handleNextPage = () => {
    setPage(page + 1);
  };

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
              <Button onClick={handleFirstPage} disabled={page === 1}>
                <ChevronsLeft size={16} />
                <span className="sr-only">Primeira página</span>
              </Button>
              <Button onClick={handlePrevPage} disabled={page === 1}>
                <ChevronLeft size={16} />
                <span className="sr-only">Página anterior</span>
              </Button>
              <Button onClick={handleNextPage} disabled={!hasNextPage}>
                <ChevronRight size={16} />
                <span className="sr-only">Próxima página</span>
              </Button>
            </PaginationButtonsContainer>
          </td>
        </tr>
      </thead>
      <tbody>
        {schedules.length === 0 ? (
          <tr>
            <td colSpan={5}>Nenhum agendamento cadastrado.</td>
          </tr>
        ) : (
          schedules.map((schedule) => (
            <tr key={schedule.id}>
              <td>{`${schedule.patient_name}`}</td>
              <td>{formatDate(schedule.schedule_date)}</td>
              <td>{getHoursFromDate(schedule.schedule_date) + ':00'}</td>
              <td>{schedule.realized ? 'Realizado' : 'Não realizado'}</td>
              <td>
                <Button
                  type="submit"
                  disabled={schedule.realized}
                  onClick={() => finalizeSchedule(schedule.id)}
                >
                  Confirmar
                </Button>
              </td>
            </tr>
          ))
        )}
      </tbody>
    </SchedulesTableContainer>
  );
}
