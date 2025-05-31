// src/pages/Callback.tsx
import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Utils } from '../common/Utils';
import { MainContext, type AuthResponse } from '../common/Types';


export default function Callback() {
  const navigate = useNavigate();
  const useMainContext = useContext(MainContext);
  
  useEffect(() => {
    const handleCallback = async () => {
      const urlParams = new URLSearchParams(window.location.search);
      const code = urlParams.get('code');
      const state = urlParams.get('state');

      // 从sessionStorage获取数据
      const stateKey = 'oidc.state.' + state;
      const oidc = sessionStorage.getItem(stateKey);
      
      if (!oidc) {
        console.error('未找到状态数据');
        return;
      }

      Utils.getInstance().oidcClient.removeUser();
      // codeVerifier是个json对象，里面有个code_verifier属性
      const codeVerifierObj = JSON.parse(oidc);
      const codeVerifier = codeVerifierObj.code_verifier;
      console.debug('授权码 client:', Utils.getInstance().oidcClient);
      console.debug('授权码 code:', code);
      if (!code) {
        console.error('未找到授权码 code');
        return;
      }

      // ⬇️ 把 code 发给后端
      Utils.getInstance().post('http://127.0.0.1:5000/api/auth/login', { 
        code: code,
        code_verifier: codeVerifier,
        state: state,
        redirect_uri: 'http://localhost:5173/callback'
      }, '').then(
        res => {
          res.json()
        }
      )
        .then(data => {
          console.log('后端返回的登录信息：', data);
          const userData = data! as AuthResponse;
          useMainContext?.setUserData(prev => ({
            ...prev,
            token: userData.access_token,
            userName: userData.user.name,
            userId: userData.user.id,
            userIcon: userData.user.picture,
            isLoggedIn: true
          }));
          navigate('/'); // 登录成功后跳转到首页
        })
        .catch(err => {
          console.error('认证失败:', err);

          // 如果认证失败，则设置用户数据
          useMainContext?._setUserData({
            token: 'token',
            userName: 'ぐー',
            userId: '109459944830704702180',
            userIcon: 'https://lh3.googleusercontent.com/a/ACg8ocJot7IvmJYgC0XzOaHj-Fg8HnM9QGUgxwJM-yopI_Rsg9zTolPlbQ=s96-c',
            isLoggedIn: true
          });
          
          navigate('/'); // 登录成功后跳转到首页

        });
    };

    handleCallback();
  }, [navigate]);

  return <div>登录处理中...</div>;
}
