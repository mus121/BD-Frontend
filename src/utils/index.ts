const extensionId = process.env.NEXT_PUBLIC_BD_EXTENSION_ID;

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

// export const sendProfileSearch = <T>(
//   type: string,
//   searchTerm?: string,
//   callback?: (response: T) => void,
// ) => {
//   if (chrome.runtime) {
//     const message: { type: string; searchTerm?: string } = { type };

//     // Include searchTerm if provided
//     if (searchTerm) {
//       message.searchTerm = searchTerm;
//     }

//     if (callback) {
//       chrome.runtime.sendMessage(extensionId, message, response => {
//         console.log('Response', response);
//         if (callback) callback(response);
//       });
//     }
//   }
// };
