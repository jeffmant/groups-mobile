import { Header } from '@components/Header';
import { Container } from './styles';
import { Highlight } from '@components/Highlight';
import { GroupCard } from '@components/GroupCard';
import { useState } from 'react';
import { FlatList } from 'react-native';
import { ListEmpty } from '@components/ListEmpty';
import { Button } from '@components/Button';
import { useNavigation } from '@react-navigation/native';

export function Groups() {
  const [groups, setGroups] = useState<string[]>([])
  const { navigate } = useNavigation()

  function handleNewGroup () {
    navigate('new')
  }

  return (
    <Container>
      <Header />

      <Highlight title='Grupos' subtitle='fale com sua turma' />
      
      <FlatList
        data={groups}
        keyExtractor={item => item}
        contentContainerStyle={groups?.length === 0 && { flex: 1 }}
        renderItem={({ item }) => (
          <GroupCard title={item} />
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
