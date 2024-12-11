import { sendMessage } from '@/utils/index';

type MessageResponse<T> = T | undefined;
export const profileSearch = <T>(type: string, searchTerm?: string): Promise<MessageResponse<T>> =>
  sendMessage<T>(type, { searchTerm });
