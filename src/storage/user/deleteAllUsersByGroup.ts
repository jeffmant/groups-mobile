import AsyncStorage from "@react-native-async-storage/async-storage";
import { USER_COLLECTION } from "@storage/storage.config";

export async function deleteAllUsersByGroup(groupName: string) {
  try {
    await AsyncStorage.setItem(`${USER_COLLECTION}-${groupName}`, JSON.stringify([]))
  } catch (error) {
    throw error
  }
}