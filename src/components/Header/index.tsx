import { HeaderContainer, HeaderContent, LogoContainer } from './styles';
import { Syringe } from 'lucide-react';
import * as Dialog from '@radix-ui/react-dialog';
import { NewScheduleModal } from '../NewScheduleModal';
import { Button } from '../Button';

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <LogoContainer>
          <Syringe height={'30px'} width={'30px'} color="white" />
          <span>AgendeVacina</span>
        </LogoContainer>
        <Dialog.Root>
          <Dialog.Trigger asChild>
            <Button>Agendar vacinação</Button>
          </Dialog.Trigger>
          <NewScheduleModal />
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  );
}
