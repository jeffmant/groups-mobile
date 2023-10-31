import AsyncStorage from "@react-native-async-storage/async-storage";
import { GROUP_COLLECTION } from "@storage/storage.config";
import { deleteAllUsersByGroup } from "@storage/user/deleteAllUsersByGroup";

export async function deleteAllGroups (): Promise<void> {
  try {
    const storedGroups = await AsyncStorage.getItem(GROUP_COLLECTION)

    if (storedGroups) {
      for (const group of JSON.parse(storedGroups)) {
        await deleteAllUsersByGroup(group)
      }
    }

    await AsyncStorage.setItem(GROUP_COLLECTION, JSON.stringify([]))
  } catch (error) {
    throw error
  }
}