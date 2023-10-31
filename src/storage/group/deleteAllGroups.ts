import AsyncStorage from "@react-native-async-storage/async-storage";
import { GROUP_COLLECTION } from "@storage/storage.config";

export async function deleteAllGroups (): Promise<void> {
  try {
    await AsyncStorage.setItem(GROUP_COLLECTION, JSON.stringify([]))
  } catch (error) {
    throw error
  }
}