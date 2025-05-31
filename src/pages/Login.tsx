import { Box, Button, Container, Grid, Typography } from '@mui/material'; 
import GoogleIcon from '../assets/google.svg';
import loginImage from '../assets/bg_upscayl_5x_upscayl-standard-4x.png';   
import './Login.css';
import { Utils } from '../common/Utils';

const Login = () => {

  // useEffect(() => {
  //   if (!useMainContext?.userData?.isLoggedIn) {
  //      console.log('Login未登录');
  //   }else{
  //     console.log('Login已登录');
  //   }
  // }, [useMainContext]);

  const handleGoogleLogin = () => {
    Utils.getInstance().oidcClient.signinRedirect();
  };

  return (
    <Container maxWidth="lg" sx={{ height: '100vh', display: 'flex', alignItems: 'center' }}>
      <Grid container direction="row" spacing={2} sx={{
        justifyContent: "center",
        alignItems: "center", 
        height: '100vh',
        width: '100vw'
    }}>
        {/* 左侧图片 */}
        <Grid  size={{ 
            xs: 6, md: 4 ,        
        }} >
        <Box
            sx={{
              display: 'flex',  
              maxWidth: 300,
              minWidth: 250,
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'flex-start',
              gap: 2,
              height: '100%', 
              margin: 'auto' 
            }}
          >
            <Typography   gutterBottom
            sx={{
              width: '200px',
              color: '#000',
              fontFamily: 'Inter',
              textAlign: 'left',
              fontSize: 20,
              fontWeight: 700,
              lineHeight: '120.932%',
              letterSpacing: 3.4
            }}>
              Welcome To TaniLinks
            </Typography>
            <Typography   gutterBottom
            sx={{
              width: '300px',
              color: '#000',
              fontFamily: 'Inter',
              textAlign: 'left',
              fontSize: 12,
              fontWeight: 400,
              lineHeight: 'normal', 
            }}>
              Sign up or Sign in to your account
            </Typography>
            <Button
              variant="contained"
              startIcon={<img src={GoogleIcon} alt="Google" />}
              onClick={handleGoogleLogin}
              sx={{
                minWidth: '300px',
                backgroundColor: '#fff',
                color: '#757575',  
                borderRadius: '4px',
                boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
              }}
            >
               Continue with Google
            </Button>
          </Box>
           
        </Grid>

        {/* 右侧登录区域 */}
        <Grid  size={{ xs: 0, md: 8 }}>
        <Container 
              component="img"
              src={loginImage}  
              sx={{
                width: '5000',
                height: '5000',
                objectFit: 'fill',
                borderRadius: '8px',
              }}
            ></Container> 
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login; 
