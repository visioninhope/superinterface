'use client'
import { useState } from 'react'
import {
  SuperinterfaceProvider,
  Thread,
  AssistantNameContext,
} from '@superinterface/react'
import { Theme, Flex } from '@radix-ui/themes'
import '@radix-ui/themes/styles.css'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

export default function Page() {
  const [queryClient] = useState(() => (
    new QueryClient({
      defaultOptions: {
        queries: {
          // With SSR, we usually want to set some default staleTime
          // above 0 to avoid refetching immediately on the client
          staleTime: 10000,
        },
      },
    })
  ))

  return (
    <QueryClientProvider client={queryClient}>
      <Theme
        accentColor="blue"
        grayColor="gray"
        appearance="light"
        radius="medium"
        scaling="100%"
      >
        <SuperinterfaceProvider
          variables={{
            publicApiKey: '37245be8-902a-440e-aaae-c56151fe8acc',
            assistantId: '26518c2b-07e4-44a7-bc62-36b0b3922bc7',
          }}
        >
          <AssistantNameContext.Provider value="Next Example Assistant">
            <Flex
              flexGrow="1"
              height="100dvh"
            >
              <Thread.Root>
                <Thread.Messages
                  style={{
                    padding: 'var(--space-5)',
                  }}
                />

                <Flex
                  direction="column"
                  pl="5"
                  pr="5"
                  pb="5"
                  flexShrink="0"
                >
                  <Thread.MessageForm />
                </Flex>
              </Thread.Root>
            </Flex>
          </AssistantNameContext.Provider>
        </SuperinterfaceProvider>
      </Theme>
    </QueryClientProvider>
  )
}
