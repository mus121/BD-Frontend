const extensionId = process.env.NEXT_PUBLIC_BD_EXTENSION_ID;

type MessageResponse<T> = T | undefined;

export const sendMessage = <T>(type: string, payload?: object): Promise<MessageResponse<T>> =>
  new Promise((resolve, reject) => {
    if (chrome.runtime) {
      chrome.runtime.sendMessage(extensionId, { type, ...payload }, (response: T) => {
        if (chrome.runtime.lastError) {
          reject(new Error(chrome.runtime.lastError.message));
        } else {
          resolve(response);
        }
      });
    } else {
      reject(new Error('Chrome runtime not available'));
    }
  });

export const extensionMessage = <T>(type: string): Promise<MessageResponse<T>> =>
  sendMessage<T>(type);

export const liProfile = <T>(type: string): Promise<MessageResponse<T>> => sendMessage<T>(type);

export const connectionProfile = <T>(type: string, start?: number): Promise<MessageResponse<T>> =>
  sendMessage<T>(type, { start });

export const totalConnection = <T>(type: string): Promise<MessageResponse<T>> =>
  sendMessage<T>(type);

export const liuserlocation = <T>(
  type: string,
  publicIdentifier: string,
): Promise<MessageResponse<T>> => sendMessage<T>(type, { publicIdentifier });

export const dropDownSearch = <T>(type: string, searchTerm?: string): Promise<MessageResponse<T>> =>
  sendMessage<T>(type, { searchTerm });

export const globalProfilesResult = <T>(
  type: string,
  query: string,
  page: number,
): Promise<MessageResponse<T>> => sendMessage<T>(type, { searchTerm: query, page });
