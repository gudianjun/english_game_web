import { AppBar, Box, Stack, Toolbar, Typography } from "@mui/material";

import logo from '/src/assets/logo.png';  // 添加导入
import { Link as RouterLink } from 'react-router-dom';
import ProfileMenu from '../components/ProfileMenu'; // Import the new component

function TopNavigation() {
    // Placeholder data - you should replace this with actual user data and logout logic
    const handleLogout = () => {
        console.log("Logout clicked");
        // Add your actual logout logic here (e.g., clear context, redirect, call API)
    };

    const placeholderUser = {
        name: "User Name",
        email: "user@example.com",
        iconUrl: 'https://lh3.googleusercontent.com/a/ACg8ocJot7IvmJYgC0XzOaHj-Fg8HnM9QGUgxwJM-yopI_Rsg9zTolPlbQ=s96-c'// Using an empty string for iconUrl if no default icon is available immediately
    };

    return (
        <AppBar position="static" sx={{
            backgroundColor: 'white', 
            height: 64
        }} elevation={0}>
            <Toolbar sx={{ justifyContent: 'space-between' }}>
                <Box
                    component={RouterLink}
                    to="/"
                    sx={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                        alignItems: 'flex-end',
                        gap: 1, // 或者 '14px'
                    }}
                >
                    {/* 左侧Logo */}
                    <Box component="img"
                        src={logo}
                        sx={{
                            width: 62, // 或者 '62px'
                            height: 55, // 或者 '55px'
                            aspectRatio: '62/55', // 或者 62 / 55 (计算结果的数字)
                        }}
                    />
                    <Typography variant="h6" sx={{ 
                        fontFamily: 'Inder',
                        fontSize: '40px', // 或者可以直接写 40
                        fontStyle: 'normal',
                        fontWeight: 400,
                        lineHeight: '119.074%', // 或者计算后的值 '47.63px'
                        letterSpacing: '3.6px',
                        }}>
                        TaniLinks
                    </Typography>
                </Box>
                {/* 右侧控件 */}
                <Stack direction="row" spacing={2} alignItems="center"> {/* Added alignItems for better centering */}
                    {/* Replace Button with ProfileMenu */}
                    <ProfileMenu 
                        userName={placeholderUser.name}
                        userEmail={placeholderUser.email}
                        userIconUrl={placeholderUser.iconUrl} // Ensure Avatar handles empty string gracefully or provide a fallback
                        onLogout={handleLogout}
                    />
                </Stack>
            </Toolbar>
        </AppBar>
    );
};

export default TopNavigation;