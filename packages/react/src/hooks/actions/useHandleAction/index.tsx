import { partob } from 'radash'
import {
  useMutation,
  useQueryClient,
} from '@tanstack/react-query'
import { useSuperinterfaceContext } from '@/hooks/core/useSuperinterfaceContext'
import { useThreadContext } from '@/hooks/threads/useThreadContext'
import { mutationOptions } from '@/lib/threads/mutationOptions'

export const useHandleAction = () => {
  const queryClient = useQueryClient()
  const superinterfaceContext = useSuperinterfaceContext()
  const threadContext = useThreadContext()

  const props = useMutation(mutationOptions({
    mutationKeyBase: ['handleAction'],
    path: '/actions',
    queryClient,
    threadContext,
    superinterfaceContext,
  }))

  return {
    ...props,
    handleAction: partob(props.mutate, threadContext.variables),
  }
}
