import { sendMessage } from '@/utils/index';

type MessageResponse<T> = T | undefined;
export const extensionMessage = <T>(type: string): Promise<MessageResponse<T>> =>
  sendMessage<T>(type);
