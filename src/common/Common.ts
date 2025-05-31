export default class Common {
    static STORAGE_KEY_USER_DATA = 'user_data';
    
    static _setStorage(key:string, value:string) {
      localStorage.setItem(key, value);
    }
  
    static _loadStorage(key:string) {
      const value = localStorage.getItem(key);
      return value;
    }
  
    static _clear() {
      localStorage.clear();
    }
  }