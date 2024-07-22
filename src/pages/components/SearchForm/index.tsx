import { Button, CustomDatePicker } from '@/components';
import { SearchFormContainer } from './styles';
import { useForm } from 'react-hook-form';
import { SearchFormInputs, searchFormResolver } from '../../../utils';
import { useContext } from 'react';
import { SchedulesContext } from '@/contexts';

export function SearchForm() {
  const { page, searchSchedules } = useContext(SchedulesContext);

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SearchFormInputs>({
    resolver: searchFormResolver,
  });

  async function handleSearchSchedules(data: SearchFormInputs) {
    await searchSchedules(page, data.patientName, data.scheduleDate);
  }

  return (
    <SearchFormContainer
      autoComplete="off"
      onSubmit={handleSubmit(handleSearchSchedules)}
    >
      <input
        type="text"
        placeholder="Nome do paciente"
        {...register('patientName')}
      />

      <CustomDatePicker
        minDate={true}
        {...register('scheduleDate')}
      ></CustomDatePicker>

      <Button type="submit" disabled={isSubmitting}>
        Buscar
      </Button>
    </SearchFormContainer>
  );
}
