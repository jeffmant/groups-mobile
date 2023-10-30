import { Header } from "@components/Header";
import { Container, Content, Icon } from "./styles";
import { Highlight } from "@components/Highlight";
import { Input } from "@components/Input";
import { Button } from "@components/Button";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";

export function NewGroup () {
  const { navigate } = useNavigation()

  const [groupName, setGroupName] = useState('')

  function handleCreate () {
    navigate('users', { group: groupName })
  }

  return (
    <Container>
      <Header showBackButton />

      <Content>
        <Icon />

        <Highlight title="Novo Grupo" subtitle="Crie um grupo para adicionar pessoas" />

        <Input 
          placeholder="Digite o nome do grupo" 
          style={{ marginBottom: 16 }} 
          value={groupName}
          onChangeText={setGroupName}
        />

        <Button title="Criar" onPress={handleCreate} />
      </Content>
    </Container>
  )
}