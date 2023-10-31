import { Header } from '@components/Header';
import { Container } from './styles';
import { Highlight } from '@components/Highlight';
import { GroupCard } from '@components/GroupCard';
import { useState, useCallback } from 'react';
import { Alert, FlatList } from 'react-native';
import { ListEmpty } from '@components/ListEmpty';
import { Button } from '@components/Button';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { getAllGroups } from '@storage/group';

export function Groups() {
  const [groups, setGroups] = useState<string[]>([])
  const { navigate } = useNavigation()

  function handleNewGroup () {
    navigate('new')
  }

  function handleOpenGroup (groupName: string) {
    navigate('users', { group: groupName })
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

    </Container>
  );
}
