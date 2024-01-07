import { ReactElement, ReactNode } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient()

interface Props {
 children: ReactNode
}

export const ApiProvider = ({ children }: Props): ReactElement => {
 return (
  <QueryClientProvider client={queryClient}>
   {children}
  </QueryClientProvider>
 )
}