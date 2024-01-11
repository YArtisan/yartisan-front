import { useOnAuthStateChanged } from '@/authentication/login/hooks/useOnAuthStateChanged'
import { ReactElement, ReactNode } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient()

interface Props {
 children: ReactNode
}

export const ApiProvider = ({ children }: Props): ReactElement => {
 useOnAuthStateChanged()

 return (
  <QueryClientProvider client={queryClient}>
   {children}
  </QueryClientProvider>
 )
}