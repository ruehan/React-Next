import AppLayout from '@/layout/AppLayout'
import HeaderLayout from '@/mocules/HeaderMenu/HeaderLayout'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { QueryClient, QueryClientProvider } from 'react-query'
import { RecoilRoot } from 'recoil'

export default function App({ Component, pageProps }: AppProps) {

  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <AppLayout>
          <Component {...pageProps} />
        </AppLayout>
      </RecoilRoot>
    </QueryClientProvider>
  )
}
