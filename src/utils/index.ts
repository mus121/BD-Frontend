const extensionId = process.env.NEXT_PUBLIC_BD_EXTENSION_ID;

export const sendextensionmessage = <T>(type: string, callback?: (response: T) => void) => {
  if (chrome.runtime) {
    if (callback) {
      chrome.runtime.sendMessage(extensionId, { type }, callback);
      console.log('Message', type);
    } else {
      chrome.runtime.sendMessage(extensionId, { type });
      console.log('Message', type);
    }
  }
};

export const sendlinkedinprofile = <T>(type: string, callback?: (response: T) => void) => {
  if (chrome.runtime) {
    chrome.runtime.sendMessage(extensionId, { type }, response => {
      console.log('Message sent:', type, 'Response received:', response);
      if (callback) callback(response);
    });
  }
};

export const sendconnectionProfile = <T>(type: string, callback?: (response: T) => void) => {
  if (chrome.runtime) {
    if (callback) {
      chrome.runtime.sendMessage(extensionId, { type }, response => {
        console.log('Connection Response:', type, 'Response received:', response);
        if (callback) callback(response);
      });
    }
  }
};
