import React, { useState } from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

// Import icons (you might need to install @mui/icons-material if you haven't)
import HistoryIcon from '@mui/icons-material/History';
import LogoutIcon from '@mui/icons-material/Logout';

interface ProfileMenuProps {
  userName: string;
  userEmail: string;
  userIconUrl: string; // URL for the user's profile icon
  onLogout: () => void; // Callback for logout action
}

const ProfileMenu: React.FC<ProfileMenuProps> = ({
  userName,
  userEmail,
  userIconUrl,
  onLogout,
}) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMenuItemClick = (action: () => void) => {
    action();
    handleClose();
  };

  return (
    <Box>
      <IconButton
        onClick={handleClick}
        size="small"
        sx={{ ml: 2 }}
        aria-controls={open ? 'account-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
      >
        <Avatar src={userIconUrl} sx={{ width: 32, height: 32 }}>
          {!userIconUrl && userName ? userName.charAt(0).toUpperCase() : null}
        </Avatar>
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem onClick={handleClose}>
          <ListItemIcon sx={{ minWidth: 'auto', mr: 1.5 }}>
            <Avatar src={userIconUrl} sx={{ width: 34, height: 34 }}>
              {!userIconUrl && userName ? userName.charAt(0).toUpperCase() : null}
            </Avatar>
          </ListItemIcon>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
            <Typography variant="body1">{userName}</Typography>
            <Typography variant="caption" color="text.secondary">{userEmail}</Typography>
          </Box>
        </MenuItem>
        <Divider />
        <MenuItem onClick={() => handleMenuItemClick(() => console.log('Navigate to Game History'))}>
          <ListItemIcon>
            <HistoryIcon fontSize="small" />
          </ListItemIcon>
          <Typography variant="inherit">Game History</Typography>
        </MenuItem>
        <Divider />
        <MenuItem onClick={() => handleMenuItemClick(onLogout)}>
          <ListItemIcon>
            <LogoutIcon fontSize="small" />
          </ListItemIcon>
          <Typography variant="inherit">Logout</Typography>
        </MenuItem>
      </Menu>
    </Box>
  );
};

export default ProfileMenu; 