import { Header } from "@components/Header";
import { Container, Form, HeaderList, UsersCount } from "./styles";
import { Highlight } from "@components/Highlight";
import { ButtonIcon } from "@components/ButtonIcon";
import { Input } from "@components/Input";
import { Filter } from "@components/Filter";
import { FlatList } from "react-native";
import { useState } from "react";


export function Users () {
  const [groups, setGroups] = useState(['Grupo A', 'Grupo B'])
  const [seletedGroup, setSelectedGroup] = useState(groups[0])
  
  return (
    <Container>
      <Header showBackButton />

      <Highlight title="Nome do Grupo" subtitle="Adicione a galera" />

      <Form>
        <Input placeholder="Digite o nome da pessoa" autoCorrect={false} />
        <ButtonIcon icon="add" />
      </Form>

      <HeaderList>
        <FlatList
          data={['Grupo A', 'Grupo B']}
          keyExtractor={item => item}
          renderItem={({ item }) => (
            <Filter 
              title={item}
              isActive={item === seletedGroup}
              onPress={() => setSelectedGroup(item)}
            />
          )}
          horizontal={true}
        />

        <UsersCount>
          {groups?.length}
        </UsersCount>
      </HeaderList>

    </Container>
  );
};