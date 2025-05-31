 
export class Config {
  //static BASE_URL = 'http://192.168.167.31:8090/api/';
  static BASE_URL = 'http://localhost:5000/';
  static TIMEOUT = 10000;  
  static RETRY_COUNT = 3;  
  static getUrl = (url: string) => {
    // 拼接url
    // 如果url已经是完整的url，则直接返回
    // 如果url是相对路径，则拼接BASE_URL，需要去掉开头的/
    if (url.startsWith('http')) {
      return url;
    } else {
      if (url.startsWith('/')) {
        return Config.BASE_URL + url.substring(1);
      }
      return Config.BASE_URL + url;
    } 
  }
}


 
