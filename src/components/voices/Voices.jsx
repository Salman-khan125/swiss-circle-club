import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";

const Voices = () => {
  const testimonials = [
    {
      text: `Boost your product and service's credibility by adding testimonials from your clients. 
      People love recommendations so feedback from others who've tried it is invaluable.`,
      author: "Maxima Minima",
    },
    {
      text: `Boost your product and service's credibility by adding testimonials from your clients. 
      People love recommendations so feedback from others who've tried it is invaluable.`,
      author: "Mariana Luxe",
    },
    {
      text: `Boost your product and service's credibility by adding testimonials from your clients. 
      People love recommendations so feedback from others who've tried it is invaluable.`,
      author: "Fairhill Journal",
    },
  ];

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        minHeight: "100vh",
        backgroundImage: "url('/assets/voices/voice.jpg')", // replace with your actual image path
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        py: { xs: 6, md: 20 },
        mt:{xs: 6, md:10}
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0,0,0,0.3)",
        }}
      />
      <Container
        maxWidth="xl"
        sx={{
          position: "relative",
          zIndex: 2,
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: "28px", md: "40px" },
            fontWeight: 500,
            textTransform: "uppercase",
            mb: { xs: 4, md: 35 },
          }}
        >
          Stimmen
        </Typography>

        <Grid container spacing={4}>
          {testimonials.map((item, index) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              key={index}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                px: { xs: 2, md: 3 },
                mb: { xs: 4, md: 45 },
                
              }}
            >
              <FormatQuoteIcon
                sx={{
                  fontSize: 40,
                  color: "white",
                  mb: 1,
                }}
              />
              <Typography
                variant="body1"
                sx={{
                  fontSize: { xs: "14px", md: "16px" },
                  lineHeight: 1.6,
                  mb: 2,
                  maxWidth: 350,
                  ml:5,
                }}
              >
                {item.text}
              </Typography>
              <Typography
                sx={{
                  fontWeight: 600,
                  fontSize: { xs: "14px", md: "16px" },
                }}
              >
                {item.author}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Voices;
