
import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Box } from '@mui/material';
import Navbar from './components/navbar/Navbar';
import HomeSection from './components/herosection/HeroSection';

const theme = createTheme({
  palette: {
    primary: {
      main: '#000000', // Dark background for navbar
    },
    secondary: {
      main: '#ffffff', // White text
    },
  },
  typography: {
    fontFamily: '"Helvetica Neue", Arial, sans-serif',
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ flexGrow: 1 }}>
        <Navbar />
        <HomeSection />
      </Box>
    </ThemeProvider>
  );
}

export default App;