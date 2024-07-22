import { Header } from '@/components';
import { SchedulesContainer } from './styles';
import { SchedulesTable, SearchForm } from '../components';

export function Home() {
  return (
    <div>
      <Header />
      <SchedulesContainer>
        <SearchForm />
        <SchedulesTable></SchedulesTable>
      </SchedulesContainer>
    </div>
  );
}
