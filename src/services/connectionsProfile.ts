import { sendMessage } from '@/utils/index';

type MessageResponse<T> = T | undefined;
export const connectionProfile = <T>(type: string, start?: number): Promise<MessageResponse<T>> =>
  sendMessage<T>(type, { start });
