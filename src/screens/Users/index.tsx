import { Header } from "@components/Header";
import { Container, Form, HeaderList, UsersCount } from "./styles";
import { Highlight } from "@components/Highlight";
import { ButtonIcon } from "@components/ButtonIcon";
import { Input } from "@components/Input";
import { Filter } from "@components/Filter";
import { Alert, FlatList, TextInput } from "react-native";
import { useCallback, useRef, useState } from "react";
import { UserCard } from "@components/UserCard";
import { ListEmpty } from "@components/ListEmpty";
import { Button } from "@components/Button";
import { useFocusEffect, useNavigation, useRoute } from "@react-navigation/native";
import { UserStorageDTO, createUserToGroup, deleteUserByGroup, getUserByGroup } from "@storage/user";
import { AppError } from "@utils/AppError";
import { deleteGroupByName } from "@storage/group";

type RouteParams = {
  group: string;
}

export function Users () {
  const inputRef = useRef<TextInput>(null)
  const { navigate } = useNavigation()
  const [teams, setTeams] = useState(['Time 1', 'Time 2'])
  const [selectedTeam, setSelectedTeam] = useState(teams[0])

  const [users, setUsers] = useState<UserStorageDTO[]>([])
  const [newUserName, setNewUserName] = useState('')

  const route = useRoute()
  const { group } = route.params as RouteParams; 


  async function handleAddUser () {
    if(newUserName.trim().length === 0){
      return Alert.alert('Nova pessoa', 'Digite o nome da Pessoa.')
    }

    try {
      await createUserToGroup({ name: newUserName, team: selectedTeam }, group)

      setNewUserName('')
      
      inputRef.current?.blur()
      
      await fetchUsers()
      
    } catch (error) {
      Alert.alert(
        'Criar Usuéario',
        error instanceof AppError ? error.message : 'Não foi possível criar usuário.'
      )
    }
  }

  async function handleDeleteUser (userName: string) {
    try {
      await deleteUserByGroup(group, userName)
      await fetchUsers()
    } catch (error) {
      console.log(error)
    }
  }

  async function handleDeleteGroup () {
    try {
      Alert.alert('Deletar Grupo', `Deseja deletar o grupo ${group}?`, [
        {
          text: 'Não',
          style: 'cancel'
        },
        {
          text: 'Sim',
          onPress: async () => {
            try {
              await deleteGroupByName(group)
              navigate('groups')
            } catch (error) {
              Alert.alert('Ops!', ' Não foi possível excluir o grupo')
            }
          }
        }
      ])
    } catch (error) {
      
    }
  }

  async function fetchUsers () {
    try {
      const data = await getUserByGroup(group)
      setUsers(data.filter((user) => user.team === selectedTeam))
      
    } catch (error) {
      
    }
  }

  useFocusEffect(useCallback(() => {
    fetchUsers()
  }, [selectedTeam]))
  
  return (
    <Container>
      <Header showBackButton />

      <Highlight title={group} subtitle="Adicione a galera" />

      <Form>
        <Input 
          placeholder="Digite o nome da pessoa" 
          value={newUserName}
          onChangeText={setNewUserName}
          autoCorrect={false}
          inputRef={inputRef}
          onSubmitEditing={handleAddUser}
        />
        <ButtonIcon icon="add" onPress={handleAddUser}  />
      </Form>

      <HeaderList>
        <FlatList
          data={teams}
          keyExtractor={item => item}
          renderItem={({ item }) => (
            <Filter 
              title={item}
              isActive={item === selectedTeam}
              onPress={() => setSelectedTeam(item)}
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
        keyExtractor={( user ) => user.name}
        renderItem={({ item: user }) => (
          <UserCard name={user.name} onRemove={() => handleDeleteUser(user.name)} />
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
        onPress={handleDeleteGroup}
      />

    </Container>
  );
};