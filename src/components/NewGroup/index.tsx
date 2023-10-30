import { Header } from "@components/Header";
import { Container, Content, Icon } from "./styles";
import { Highlight } from "@components/Highlight";

export function NewGroup () {
  return (
    <Container>
      <Header showBackButton />

      <Content>
        <Icon />

        <Highlight title="Novo Grupo" subtitle="Crie um grupo para adicionar pessoas" />
      </Content>
    </Container>
  )
}