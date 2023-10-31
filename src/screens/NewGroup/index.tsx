import { Header } from "@components/Header";
import { Container, Content, Icon } from "./styles";
import { Highlight } from "@components/Highlight";
import { Input } from "@components/Input";
import { Button } from "@components/Button";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { createGroup } from "@storage/group";
import { AppError } from "@utils/AppError";
import { Alert } from "react-native";

export function NewGroup () {
  const { navigate } = useNavigation()

  const [groupName, setGroupName] = useState('')

  async function handleCreate () {
    try {
      await createGroup(groupName) 
      setGroupName('')
      navigate('users', { group: groupName })
    } catch (error) { 
      if (error instanceof AppError) {
        Alert.alert('Novo Grupo', error.message)
      } else {
        Alert.alert('Novo Grupo', 'Não foi possível criar um novo grupo')
      }
    }
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

        <Button title="Criar" onPress={handleCreate} disabled={!groupName?.length} />
      </Content>
    </Container>
  )
}