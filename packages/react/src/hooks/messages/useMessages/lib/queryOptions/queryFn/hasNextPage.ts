import OpenAI from 'openai'
import { messagesLimit } from './messagesLimit'

export const hasNextPage = ({
  messagesResponse,
}: {
  messagesResponse: OpenAI.CursorPage<OpenAI.Beta.Threads.Messages.ThreadMessage>
}) => {
  if (messagesResponse.data.length < messagesLimit) return false

  return messagesResponse.hasNextPage()
}
