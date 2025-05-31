import { useState,  useEffect, type ReactNode } from 'react';
import {  MainContext, type UserData } from './Types'; 
import Common from './Common';
import { useNavigate } from 'react-router-dom';

export const MainProvider = ({ children }: { children: ReactNode }) => { 
  const navigate = useNavigate();
  const [userData, setUserData] = useState<UserData>(() => {
    const cachedData = localStorage.getItem(Common.STORAGE_KEY_USER_DATA);
    console.log('cachedData init', cachedData);
    if(cachedData) {
      return JSON.parse(cachedData) as UserData;
    }else{
      Common._clear();
      const userData = {
        token: null,
        userName: null,
        userId: '',
        userIcon: null,
        isLoggedIn: false,  
      };
      Common._setStorage(Common.STORAGE_KEY_USER_DATA, JSON.stringify(userData));
      return userData;
      };
    }
  );  

  useEffect(() => {
    if (!userData?.isLoggedIn) {
      console.log('App未登录');
      navigate('/');
    }else{
      console.log('App已登录');
      navigate('/homepage');
    }
  }, [userData,navigate]);


  useEffect(() => {
    const storedUserData = Common._loadStorage(Common.STORAGE_KEY_USER_DATA);
    if (storedUserData) {
      const tempUserData = JSON.parse(storedUserData) as UserData;
      setUserData((prev) => ({ ...prev,
        token: tempUserData.token,
        userName: tempUserData.userName,
        userId: tempUserData.userId,
        userIcon: tempUserData.userIcon,
        isLoggedIn: tempUserData.isLoggedIn
      }));
    }    
  }, []);

  const _setUserData = (userData: UserData) => {

    setUserData(prev => ({
      ...prev,
      token: userData.token,
      userName: userData.userName,
      userId: userData.userId,
      userIcon: userData.userIcon,
      isLoggedIn: userData.isLoggedIn
    }));
    Common._setStorage(Common.STORAGE_KEY_USER_DATA, JSON.stringify(userData));
  }

  return (
    <MainContext.Provider value={{ userData, setUserData, _setUserData }}>
      {children}
    </MainContext.Provider>
  );
};