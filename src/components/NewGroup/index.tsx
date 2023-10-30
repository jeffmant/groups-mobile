import { Header } from "@components/Header";
import { Container, Content, Icon } from "./styles";
import { Highlight } from "@components/Highlight";
import { Input } from "@components/Input";
import { Button } from "@components/Button";

export function NewGroup () {
  return (
    <Container>
      <Header showBackButton />

      <Content>
        <Icon />

        <Highlight title="Novo Grupo" subtitle="Crie um grupo para adicionar pessoas" />

        <Input placeholder="Digite o nome do grupo" style={{ marginBottom: 16 }} />

        <Button title="Criar" />
      </Content>
    </Container>
  )
}