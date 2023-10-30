import { Header } from '@components/Header';
import { Container } from './styles';
import { Highlight } from '@components/Highlight';
import { GroupCard } from '@components/GroupCard';

export function Groups() {
  return (
    <Container>
      <Header />
      <Highlight title='Title' subtitle='Subtitle' />
      
      <GroupCard title='Grupo 1' />

    </Container>
  );
}
