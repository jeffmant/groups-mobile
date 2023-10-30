import { Header } from "@components/Header";
import { Container, Form, HeaderList, UsersCount } from "./styles";
import { Highlight } from "@components/Highlight";
import { ButtonIcon } from "@components/ButtonIcon";
import { Input } from "@components/Input";
import { Filter } from "@components/Filter";
import { FlatList } from "react-native";
import { useState } from "react";
import { UserCard } from "@components/UserCard";
import { ListEmpty } from "@components/ListEmpty";
import { Button } from "@components/Button";
import { useRoute } from "@react-navigation/native";

type RouteParams = {
  group: string;
}

export function Users () {
  const [groups, setGroups] = useState(['Grupo A', 'Grupo B'])
  const [seletedGroup, setSelectedGroup] = useState(groups[0])

  const route = useRoute()
  const { group } = route.params as RouteParams; 

  const [users, setUsers] = useState([
    'Jefferson', 
    'Gabriel',
  ])
  
  return (
    <Container>
      <Header showBackButton />

      <Highlight title={group} subtitle="Adicione a galera" />

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
          showsHorizontalScrollIndicator={false}
        />

        <UsersCount>
          {users?.length}
        </UsersCount>
      </HeaderList>

      <FlatList 
        data={users}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <UserCard name={item} onRemove={() => console.log(item)} />
        )}
        ListEmptyComponent={() => (
          <ListEmpty 
            message="Não há pessoas neste time."
          /> 
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[
          { paddingBottom: 100 },
          users.length === 0 && { flex: 1 }
        ]}
      />

      <Button 
        title="Remover Grupo"
        type="SECONDARY"
      />

    </Container>
  );
};