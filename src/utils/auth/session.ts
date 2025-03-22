export const LOCAL_STORAGE_UPDATE_EVENT = 'localStorageUpdated';
export const IS_SESSION_VALID_KEY = 'isSessionValid';

export const setSessionIsValid = (value: boolean) => {
  localStorage.setItem('isSessionValid', JSON.stringify(value));
  window.dispatchEvent(new Event(LOCAL_STORAGE_UPDATE_EVENT));
};
