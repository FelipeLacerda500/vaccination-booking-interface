import { CustomDatePicker } from '@/components';
import { SearchFormContainer } from './styles';

export function SearchForm() {
  return (
    <SearchFormContainer>
      <input type="text" placeholder="Nome do paciente" />
      <CustomDatePicker></CustomDatePicker>
      <button type="submit">Buscar</button>
    </SearchFormContainer>
  );
}
