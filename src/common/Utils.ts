import axios, { type AxiosInstance } from 'axios';
import { Config } from './config'; 
import { UserManager, WebStorageStateStore } from 'oidc-client-ts';

export class Utils {
  static instance:Utils|null = null; 
  private readonly apiClient:AxiosInstance;
  public readonly oidcClient:UserManager;
  constructor() {
    this.apiClient = axios.create({
      baseURL: Config.BASE_URL,
      timeout: Config.TIMEOUT,
      headers: {
        'Content-Type': 'application/json',
      },
    });
    this.apiClient.interceptors.request.use(
      (config) => {
        const language = 'en-US';
        config.headers['Accept-Language'] = language;
        config.headers['Content-Type'] = 'application/json';
        return config;
      }, 
      (error) => {
        return Promise.reject(error);
      });
    this.apiClient.interceptors.response.use(
        (response) => {
          console.log("Interceptor - Response received:", response);
          return response;
        },
        (error) => {
          if (error.response && error.response.status === 401) {
            window.location.href = '/signin';
          }else{
            console.error("Interceptor - Response error:", error);
          }
          return Promise.reject(error); 
        }
      ); 

    this.oidcClient = new UserManager({
        authority: 'https://accounts.google.com',
        client_id: '954719322322-4q5f4go1ef330pqj3jfgra3irlr6vrmg.apps.googleusercontent.com',
        redirect_uri: 'http://localhost:5173/callback',
        response_type: 'code',
        scope: 'openid profile email',
        userStore: new WebStorageStateStore({ 
          store: window.sessionStorage,  // 使用 sessionStorage
          prefix: 'oidc.user.'  // 用户信息存储前缀
        }),
        
        stateStore: new WebStorageStateStore({ 
          store: window.sessionStorage,  // 使用 sessionStorage
          prefix: 'oidc.state.'  // 状态存储前缀
        }), 
        prompt: "select_account",
        loadUserInfo: true,
        monitorSession: true,
      });
  }

  static getInstance() {
    if (!Utils.instance) {
      Utils.instance = new Utils();
    }
    return Utils.instance;
  }

 
  public get = async (endpoint: string, params = {}, token?: string) => {
    try { 
      endpoint = Config.getUrl(endpoint);
      const headers = token ? { Authorization: `Bearer ${token}` } : {};
      const response = await this.apiClient!.get(endpoint, { params, headers });
      return response.data;
    } catch (error) {
      console.error('GET request error:', error);
      throw error;
    }
  };
  
  public post = async (endpoint: string, data: object, token?: string) => {
    try {
      endpoint = Config.getUrl(endpoint);
      const headers = token ? { Authorization: `Bearer ${token}` } : {};
      const response = await this.apiClient!.post(endpoint, data, { decompress: false, headers });
  
      return response.data;
    } catch (error) {
      console.error('POST request error:', error);
      throw error;
    }
  };
  
  // 你可以根据需要添加更多的请求方法（如 put、delete 等）
  public put = async (endpoint: string, data: object = {}, token?: string) => {
    try {
      endpoint = Config.getUrl(endpoint);
      const headers = token ? { Authorization: `Bearer ${token}` } : {};
      const response = await this.apiClient!.put(endpoint, data, { headers });
      return response.data;
    } catch (error) {
      console.error('PUT request error:', error);
      throw error;
    }
  };
  
  public del = async (endpoint: string, token?: string) => {
    try {
      endpoint = Config.getUrl(endpoint);
      const headers = token ? { Authorization: `Bearer ${token}` } : {};
      const response = await this.apiClient!.delete(endpoint, { headers });
      return response.data;
    } catch (error) {
      console.error('DELETE request error:', error);
      throw error;
    }
  };
}

