import { DialogsProvider } from '@toolpad/core'
import './App.css'
import React, { useContext, useEffect } from 'react' 
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import { Route, Routes, useNavigate } from 'react-router-dom'; 
import { MainProvider } from './common/MainContext';
import Login from './pages/Login';
import Callback from './pages/Callback';
import { MainContext } from './common/Types';
import Homepage from './pages/Homepage';

const theme = createTheme({
  // 可以在这里进行基础定制
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
});


function App() {

  
  return (
    <React.Fragment>
      <MainProvider  >
        <DialogsProvider>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Routes>
              <Route path="/" element={<Login />} > 
              </Route>
              <Route path="/callback" element={<Callback />} > 
              </Route>
              <Route path="/homepage" element={<Homepage />} > 
              </Route>
            </Routes>
          </ThemeProvider>
        </DialogsProvider>
      </MainProvider>
  </React.Fragment >
  )
}

export default App
