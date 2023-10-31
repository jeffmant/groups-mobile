import AsyncStorage from "@react-native-async-storage/async-storage"
import { USER_COLLECTION } from "@storage/storage.config"
import { UserStorageDTO } from "./UserStorage.dto"

export async function getUserByGroup (groupName: string) {
  try {
    const storage = await AsyncStorage.getItem(`${USER_COLLECTION}-${groupName}`)

    const users: UserStorageDTO[] = storage ? JSON.parse(storage) : [] 
  
    return users
  } catch (error) {
    throw error
  }

}