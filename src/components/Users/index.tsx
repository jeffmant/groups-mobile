import { Header } from "@components/Header";
import { Container, Form } from "./styles";
import { Highlight } from "@components/Highlight";
import { ButtonIcon } from "@components/ButtonIcon";
import { Input } from "@components/Input";
import { Filter } from "@components/Filter";

export function Users () {
  return (
    <Container>
      <Header showBackButton />

      <Highlight title="Nome do Grupo" subtitle="Adicione a galera" />

      <Form>
        <Input placeholder="Digite o nome da pessoa" autoCorrect={false} />
        <ButtonIcon icon="add" />
      </Form>

      <Filter 
        title="Time A"
        isActive={true}
      />
    </Container>
  );
};