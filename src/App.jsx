
import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Box } from '@mui/material';
import Navbar from './components/navbar/Navbar';
import HomeSection from './components/herosection/HeroSection';
import Community from './components/community/Community';
import MemberOfSCC from './components/memberofscc/MemberOfSCC';
import ClubOffers from './components/clubofffers/ClubOffers';
import Topic from './components/topic/Topic';
import CityGuide from './components/cityguide/CityGuide';
import Voices from './components/voices/Voices';
import Footer from './components/footer/Footer';

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
         <Community/> 
         <MemberOfSCC/>
         <ClubOffers/>
         <Topic/>
         <CityGuide/>
         <Voices/>
         <Footer/>
      </Box>
    </ThemeProvider>
  );
}

export default App;