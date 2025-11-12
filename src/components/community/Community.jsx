import React from "react";
import { Box, Container, Grid, Typography, Button } from "@mui/material";


const Community = () => {
  return (
    <Box
      sx={{
        width: "100%",
        py: { xs: 6, md: 30 },
        backgroundColor: "#f8f6f2",
        
      }}
    >
      <Container maxWidth="xl">
        <Grid
          container
          spacing={6}
          alignItems="center"
        >
          {/* LEFT SIDE */}
          <Grid item xs={12} md={7}>
            {/* Small Top Label */}
            <Typography
              sx={{
                color: "#A57C30",
                fontSize: { xs: "14px", md: "18px" },
                letterSpacing: "2px",
                mb: 2,
                fontWeight: 600,
              }}
            >
              IHR CIRCLE – IHR SUPPORT – IHRE SCHWEIZ
            </Typography>

            {/* Heading */}
            <Typography
              sx={{
                fontSize: { xs: "30px", md: "48px" },
                lineHeight: 1.2,
                fontWeight: 400,
                color: "#555",
                mb: 3,
              }}
            >
              Eine starke Community für Ihre<br/> erfolgreiche Integration in der<br/>
              Schweiz.
            </Typography>

            {/* Paragraph */}
            <Typography
              sx={{
                fontSize: { xs: "16px", md: "18px" },
                color: "#000",
                fontWeight: 600,
                mb: 2,
              }}
            >
              Der SWISS CIRCLE CLUB bietet Ihnen wertvolle Kontakte, soziale
              Anbindungen und<br/> praktische Unterstützung. Erfahrungsaustausch und
              Vernetzung machen die<br/> Schweiz so schnell zu Ihrem neuen Zuhause.
            </Typography>

            {/* Button (Golden wide button) */}
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#A57C30",
                color: "#fff",
                px: 10,
                py: {xs:1, sm:1,md:1},
                fontSize: { xs: "12px", md: "16px" },
                letterSpacing: "2px",
                borderRadius: 0,
                mb: 3,
                "&:hover": {
                  backgroundColor: "#8C6827",
                },
              }}
            >
              VON FREEMIUM BIS PREMIUM & VIP MITGLIEDSCHAFTEN
            </Button>

            
            <Typography
              sx={{
                fontSize: { xs: "16px", md: "18px" },
                color: "#000",
                mb: 4,
                
              }}
            >
              Der Schritt in ein neues Land ist oft mit vielen Herausforderungen
              verbunden – genau<br/> hier kommt der SWISS CIRCLE CLUB ins Spiel.
            </Typography>

            {/* Link */}
            <Typography
              sx={{
                color: "#A57C30",
                fontSize: { xs: "16px", md: "18px" },
                fontWeight: 600,
                textDecoration: "underline",
                cursor: "pointer",
                width: "fit-content",
                
              }}
            >
              MEHR ERFAHREN ›
            </Typography>
          </Grid>

          {/* RIGHT SIDE IMAGE */}
          <Grid item xs={12} md={5}>
            <Box
              component="img"
              src= "/assets/community/s1.png"
              alt="Community"
              sx={{
                width: "100%",
                height: "auto",
                borderRadius: "4px",
                ml:{xs:0, sm:5,md: 5}
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Community;
