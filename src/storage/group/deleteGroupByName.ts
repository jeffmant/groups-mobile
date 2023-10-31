import AsyncStorage from "@react-native-async-storage/async-storage";
import { GROUP_COLLECTION } from "@storage/storage.config";
import { getAllGroups } from "./getAllGroups";
import { deleteAllUsersByGroup } from "@storage/user/deleteAllUsersByGroup";

export async function deleteGroupByName (groupName: string): Promise<void> {
  try {
    const storedGroups = await getAllGroups()

    const filteredGroups = storedGroups.filter((group) => group !== groupName)

    await deleteAllUsersByGroup(groupName)
    
    await AsyncStorage.setItem(GROUP_COLLECTION, JSON.stringify(filteredGroups))
  } catch (error) {
    throw error
  }
}