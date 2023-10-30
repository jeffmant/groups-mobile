import { NewGroup } from '@components/NewGroup'
import { Users } from '@components/Users'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Groups } from '@screens/Groups'

const { Navigator, Screen } = createNativeStackNavigator()

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name='groups' component={Groups} />
      <Screen name='new' component={NewGroup} />
      <Screen name='users' component={Users} />
    </Navigator>
  )
}