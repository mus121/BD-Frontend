const extensionId = process.env.NEXT_PUBLIC_BD_EXTENSION_ID;

type MessageResponse<T> = T | undefined;

// Centralized function for sending messages to the Chrome extension
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
