import AsyncStorage from "@react-native-async-storage/async-storage";
import { GROUP_COLLECTION } from "@storage/storage.config";
import { getAllGroups } from "./getAllGroups";
import { AppError } from "@utils/AppError";

export async function createGroup (groupName: string) {
  try {
    const storedGroups = await getAllGroups()

    const groupAlreadyExists = storedGroups.includes(groupName)

    if (groupAlreadyExists) {
      throw new AppError('Este grupo já existe!')
    }

    await AsyncStorage.setItem(
      GROUP_COLLECTION, 
      JSON.stringify([...storedGroups, groupName])
    )

  } catch (error) {
    throw error
  }
}