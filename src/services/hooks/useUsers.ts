import { useQuery } from "react-query"
import { api } from "../api"

type User = {
  id: string;
  name: string;
  email: string;
  createdAt: string;
}

// export async function getUsers() {
export async function getUsers(): Promise<User[]> {
  // const response = await fetch('http://localhost:3000/api/users')
  // const data = await response.json()
  const { data } = await api.get('users')

  const users = data.users.map(user => {
    return {
      ...user,
      createdAt: new Date(user.createdAt).toLocaleDateString('en-US', {
        day: '2-digit',
        month: 'long',
        year: 'numeric'
      }),
    }
  })

  return users
}

export function useUsers() {
  // return useQuery<User[]>('users', getUsers, {
  // chave que a query sera armazenada no cache
  return useQuery('users', getUsers, {
    // milissegundos
    // staleTime: 1000 * 5 // 5 segundos
    refetchInterval: 10000 * 5 // 5 segundos
    // staleTime: Infinity // 5 segundos
  }) 
}

