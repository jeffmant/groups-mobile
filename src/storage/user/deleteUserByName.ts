import AsyncStorage from "@react-native-async-storage/async-storage";
import { USER_COLLECTION } from "@storage/storage.config";
import { getUserByGroup } from "./getUserByGroup";

export async function deleteUserByGroup(groupName: string, userName: string) {
  try {
    const storedUsers = await getUserByGroup(groupName)

    const filteredUsers = storedUsers.filter((user) => user.name !== userName)

    await AsyncStorage.setItem(`${USER_COLLECTION}-${groupName}`, JSON.stringify(filteredUsers))
  } catch (error) {
    throw error
  }
}