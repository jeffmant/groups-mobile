import { Header } from '@components/Header';
import { Container } from './styles';
import { Highlight } from '@components/Highlight';
import { GroupCard } from '@components/GroupCard';
import { useState, useCallback } from 'react';
import { Alert, FlatList } from 'react-native';
import { ListEmpty } from '@components/ListEmpty';
import { Button } from '@components/Button';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { getAllGroups, deleteGroupByName, deleteAllGroups } from '@storage/group';

export function Groups() {
  const [groups, setGroups] = useState<string[]>([])
  const { navigate } = useNavigation()

  function handleNewGroup () {
    navigate('new')
  }

  function handleOpenGroup (groupName: string) {
    navigate('users', { group: groupName })
  }

  async function handleDeleteGroup (groupName: string) {
    try {
      Alert.alert('Deletar Grupo', `Deseja deletar o grupo ${groupName}?`, [
        {
          text: 'Cancelar',
          style: 'cancel'
        },
        {
          text: 'Sim',
          onPress: async () => {
            await deleteGroupByName(groupName)
            setGroups(groups.filter((group) => group !== groupName))
          }
        }
      ])
    } catch (error) {
      
    }
  }

  async function handleDeleteAllGroups () {
    try {
      if (groups.length > 0) {
        Alert.alert('Deletar tudo', 'Deseja realmente deletar todos os grupos?', [
          {
            text: 'Cancelar',
            style: 'cancel'
          },
          {
            text: 'Sim',
            onPress: async () => {
              await deleteAllGroups()
              setGroups([])
            }
          }
        ])
      }
    } catch (error) {}
  }

  async function fetchGroups () {
    try {
      const data = await getAllGroups()
      setGroups(data) 
    } catch (error) {}
  }

  useFocusEffect(useCallback(() => {
    fetchGroups()
  }, []))

  return (
    <Container>
      <Header />

      <Highlight title='Grupos' subtitle='fale com sua turma' />
      
      <FlatList
        data={groups}
        keyExtractor={item => item}
        contentContainerStyle={groups?.length === 0 && { flex: 1 }}
        renderItem={({ item }) => (
          <GroupCard 
            title={item}
            onPress={() => handleOpenGroup(item)} 
            onRemove={() => handleDeleteGroup(item)} 
          />
        )}
        ListEmptyComponent={() => 
          <ListEmpty 
            message='Nenhum grupo cadastrado' 
          />
        }
        showsVerticalScrollIndicator={false}
      />

    <Button 
      title='Criar novo Grupo' 
      type='PRIMARY'
      onPress={handleNewGroup} 
    />

  {
    groups?.length > 0 ? (
      <Button 
        title='Excluir todos grupos' 
        type='SECONDARY'
        onPress={handleDeleteAllGroups} 
      />
      )
      : null
  }

    </Container>
  );
}
