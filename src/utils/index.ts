const extensionId = process.env.NEXT_PUBLIC_BD_EXTENSION_ID;

// type MessageResponse<T> = T | undefined;

// // Centralized function for sending messages to the Chrome extension
// const sendMessage = <T>(type: string, payload?: object): Promise<MessageResponse<T>> =>
//   new Promise((resolve, reject) => {
//     if (chrome.runtime) {
//       chrome.runtime.sendMessage(extensionId, { type, ...payload }, (response: T) => {
//         if (chrome.runtime.lastError) {
//           reject(new Error(chrome.runtime.lastError.message));
//         } else {
//           resolve(response);
//         }
//       });
//     } else {
//       reject(new Error('Chrome runtime not available'));
//     }
//   });

// // Exported utility functions
// export const sendextensionmessage = <T>(type: string): Promise<MessageResponse<T>> => {
//   return sendMessage<T>(type);
// };

// export const sendlinkedinprofile = <T>(type: string): Promise<MessageResponse<T>> => {
//   return sendMessage<T>(type);
// };

// export const sendconnectionProfile = <T>(
//   type: string,
//   start?: number,
// ): Promise<MessageResponse<T>> => {
//   return sendMessage<T>(type, { start });
// };

// export const sendtotalconnection = <T>(type: string): Promise<MessageResponse<T>> => {
//   return sendMessage<T>(type);
// };

// export const sendProfileSearch = <T>(
//   type: string,
//   searchTerm?: string,
// ): Promise<MessageResponse<T>> => {
//   return sendMessage<T>(type, { searchTerm });
// };

// start

export const sendextensionmessage = <T>(type: string, callback?: (response: T) => void) => {
  if (chrome.runtime) {
    if (callback) {
      chrome.runtime.sendMessage(extensionId, { type }, callback);
    } else {
      chrome.runtime.sendMessage(extensionId, { type });
    }
  }
};

export const sendlinkedinprofile = <T>(type: string, callback?: (response: T) => void) => {
  if (chrome.runtime) {
    chrome.runtime.sendMessage(extensionId, { type }, response => {
      if (callback) callback(response);
    });
  }
};

export const sendconnectionProfile = <T>(
  type: string,
  start?: number,
  callback?: (response: T) => void,
) => {
  if (chrome.runtime) {
    if (callback) {
      chrome.runtime.sendMessage(extensionId, { type, start }, response => {
        if (callback) callback(response);
      });
    }
  }
};

export const sendtotalconnection = <T>(type: string, callback?: (response: T) => void) => {
  if (chrome.runtime) {
    if (callback) {
      chrome.runtime.sendMessage(extensionId, { type }, response => {
        if (callback) callback(response);
      });
    }
  }
};

export const sendProfileSearch = <T>(
  type: string,
  searchTerm?: string,
  callback?: (response: T) => void,
) => {
  if (chrome.runtime) {
    const message: { type: string; searchTerm?: string } = { type };
    if (searchTerm) {
      message.searchTerm = searchTerm;
    }

    if (callback) {
      chrome.runtime.sendMessage(extensionId, message, response => {
        if (callback) callback(response);
      });
    }
  }
};
