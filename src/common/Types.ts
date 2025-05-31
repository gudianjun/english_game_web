import { createContext } from "react";

 // 用户信息上下文
 export interface UserData{
    token: string | null; // token
    userName: string | null; 
    userId: string; 
    userIcon: string | null; 
    isLoggedIn: boolean;
  }
  
  // 主上下文
  export interface MainContextProps { 
    userData: UserData;
    setUserData: React.Dispatch<React.SetStateAction<UserData>>;  
    _setUserData: (userData: UserData) => void;
  } 

  export const MainContext = createContext<MainContextProps | undefined>(undefined); 

  // 后端认证响应中的用户信息
  export interface AuthResponseUser {
    id: string; // 假设 id 是字符串，如果不是请修改
    email: string;
    verified_email: boolean;
    name: string;
    given_name: string;
    picture: string;
  }

  // 后端认证响应的整体结构
  export interface AuthResponse {
    access_token: string;
    user: AuthResponseUser;
  } 