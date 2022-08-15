import UserService from 'services/UserService'

export const userAuthentication = async (username, password) => {
  try {
    const user = await UserService.userAuthentication(username, password)
    return user
  } catch (error) {
    console.log('userAuthentication error: ', error)
    return false
  }
} 