import AsyncStorage from "@react-native-async-storage/async-storage";
import { GROUP_COLLECTION } from "@storage/storage.config";
import { getAllGroups } from "./getAllGroups";

export async function deleteGroupByName (groupName: string): Promise<void> {
  try {
    const storedGroups = await getAllGroups()
    const filteredFroups = storedGroups.filter((group) => group !== groupName)
    await AsyncStorage.setItem(GROUP_COLLECTION, JSON.stringify(filteredFroups))
  } catch (error) {
    throw error
  }
}