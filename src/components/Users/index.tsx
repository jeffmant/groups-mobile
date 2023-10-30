import { Header } from "@components/Header";
import { Container, Form } from "./styles";
import { Highlight } from "@components/Highlight";
import { ButtonIcon } from "@components/ButtonIcon";
import { Input } from "@components/Input";

export function Users () {
  return (
    <Container>
      <Header showBackButton />

      <Highlight title="Nome do Grupo" subtitle="Adicione a galera" />

      <Form>
        <Input placeholder="Digite o nome da pessoa" autoCorrect={false} />
        <ButtonIcon icon="add" />
      </Form>
    </Container>
  );
};