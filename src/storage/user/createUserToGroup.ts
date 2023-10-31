import AsyncStorage from "@react-native-async-storage/async-storage";
import { UserStorageDTO } from "./UserStorage.dto";
import { USER_COLLECTION } from "@storage/storage.config";
import { getUserByGroup } from "./getUserByGroup";
import { AppError } from "@utils/AppError";

export async function createUserToGroup(newUser: UserStorageDTO, groupName: string) {
  try {
    const storedUsers = await getUserByGroup(groupName)

    const userAlreadyExists = storedUsers.find((user) => user.name === newUser.name)

    if (userAlreadyExists) {
      throw new AppError('Esta pessoa já está cadastrada')
    }

    const storage = JSON.stringify([...storedUsers, newUser])

    await AsyncStorage.setItem(`${USER_COLLECTION}-${groupName}`, storage)
  } catch (error) {
    throw error
  }
}