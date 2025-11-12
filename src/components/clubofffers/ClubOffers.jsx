import React from "react";
import { Box, Container, Grid, Typography, Button } from "@mui/material";

const ClubOffers = () => {
  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "#f8f6f2",
        py: { xs: 6, md: 10 },
    
      }}
    >
      <Container maxWidth="xl">
      
      <Grid container spacing={14} alignItems="flex-start">
  
  {/* LEFT TEXT BLOCK */}
  <Grid item xs={12} md={6}>
    <Typography
      sx={{
        fontSize: { xs: "16px", md: "18px" },
        color: "#000",
        lineHeight: 1.6,
        mb: 4,
      }}
    >
      Unser Club bietet Ihnen ein exklusives Netzwerk aus Gleichgesinnten,
      die Ihre<br/> Interessen verstehen und Ihre Herausforderungen kennen.
      Vom ersten Tag an<br/> profitieren Sie von kompetenten Kooperationspartnern,
      einer lebendigen <br/> Community und einem Rundum-Service, der Sie in allen
      Lebensbereichen <br/> unterstützt.
    </Typography>

    <Button
      variant="contained"
      sx={{
        backgroundColor: "#A57C30",
        color: "#fff",
        width: "100%",
        py: 1,
        fontSize: { xs: "14px", md: "16px" },
        letterSpacing: "2px",
        borderRadius: 0,
        "&:hover": { backgroundColor: "#7A5D2C" },
        mt:7,
      }}
    >
      MEHR ERFAHREN
    </Button>
  </Grid>

  {/* RIGHT TEXT BLOCK */}
  <Grid item xs={12} md={6}>
    <Typography
      sx={{
        fontSize: { xs: "16px", md: "18px" },
        color: "#000",
        lineHeight: 1.6,
        mb: 4,
      }}
    >
      Für wertvolle juristische, finanzielle und soziale Impulse: Besuchen
      Sie exklusive<br/>Networking-Events, vertiefen Sie Ihre privaten und 
      beruflichen Kontakte und <br/>genießen Sie den Zugang zu einem umfassenden
      Pool an Informationen und<br/> Tipps, die Ihr Leben in der Schweiz
      vereinfachen.
      <br />
      <br />
      Jetzt Mitglied werden und den vollen Zugang zu allen Vorteilen des <br/>
      SWISS CIRCLE CLUB sichern!
    </Typography>

    <Button
      variant="contained"
      sx={{
        backgroundColor: "#A57C30",
        color: "#fff",
        width: "100%",
        py: 1,
        fontSize: { xs: "14px", md: "16px" },
        letterSpacing: "2px",
        borderRadius: 0,
        "&:hover": { backgroundColor: "#7A5D2C" },
      }}
    >
      WORAUF WARTEN? JETZT PREMIUM-MITGLIEDSCHAFT AKTIVIEREN!
    </Button>
  </Grid>

</Grid>

      </Container>
    </Box>
  );
};

export default ClubOffers;
