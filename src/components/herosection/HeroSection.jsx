import { Box, Container, Typography, Button, Stack } from "@mui/material";

export default function HeroSection() {
  return (
    <Box
      sx={{
        width: "100%",
        height: { xs: "750px", md: "100vh" },
        backgroundImage: "url('/assets/hero.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        position: "absolute",
        display: "flex",
        alignItems: "center",
        top:20
      }}
    >

      {/* ✅ Dark gradient overlay EXACT like screenshot */}
      <Box
        sx={{
          position: "absolute",
          width: "100%",
          height: "100%",
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.35) 50%, rgba(0,0,0,0.5) 100%)",
          top: 0,
          left: 0,
          zIndex: 1,
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2 }}>
        <Box sx={{ maxWidth: { xs: "100%", md: "100%" } , mt:30}}>

          {/* ✅ SMALL TOP TEXT */}
          <Typography
            sx={{
              color: "white",
              letterSpacing: "6px",
              fontSize: { xs: "0.7rem", md: "0.9rem" },
              mb: 3,
              opacity: 0.9,
              textTransform: "uppercase",
            }}
          >
            VERNETZT – UNTERSTÜTZT – VERBUNDEN
          </Typography>

          {/* ✅ MAIN H1 EXACT SAME SIZE & STYLE */}
          <Typography
            sx={{
              color: "white",
              fontWeight: 700,
              fontSize: { xs: "2.5rem", sm: "3.5rem", md: "4.5rem" },
              lineHeight: 1.1,
              mb: 3,
              textShadow: "0px 3px 6px rgba(0,0,0,0.7)",
            }}
          >
            GRÜEZI – WILLKOMMEN<br />IN DER SCHWEIZ!
          </Typography>

          {/* ✅ SUBTEXT EXACT STYLE */}
          <Typography
            sx={{
              color: "white",
              fontSize: { xs: "1rem", md: "1.2rem" },
              mb: 5,
              maxWidth: "550px",
              textShadow: "0px 2px 4px rgba(0,0,0,0.6)",
            }}
          >
            Der SWISS CIRCLE CLUB ist mehr als nur ein Netzwerk – er ist der
            verlässliche Begleiter für Expats, die bereits in der Schweiz leben
            oder dorthin umziehen möchten.
          </Typography>

          {/* ✅ BUTTON ROW EXACT LIKE REFERENCE */}
          
<Stack
  direction={{ xs: "column", sm: "row" }}
  spacing={3}
  sx={{
    flexWrap: "wrap",
    alignItems: "center",
  }}
>
  <Button
    variant="oulined"
    sx={{
      backgroundColor: "transparent",
      color: "white",
      px: { xs: 3, sm: 5, md:10 },
      py: { xs: 1.1, sm: 1.3, md:1.2 },
      width: { xs: "100%", sm: "auto" },  
      border: "1px solid #fff",
      fontWeight: "bold",
      "&:hover": {
        backgroundColor: "#8c6a32",
        border: "1px solid #fff",
      },
    }}
  >
    MEHR ERFAHREN
  </Button>

  <Button
    variant="contained"
    sx={{
      backgroundColor: "transparent",
      color: "white",
      px: { xs: 3, sm: 5, md:10 },
      py: { xs: 1.1, sm: 1.3, md:1.2 },
      width: { xs: "100%", sm: "auto", },  
      border: "1px solid #fff",
      fontWeight: "bold",
      "&:hover": {
        backgroundColor: "#8c6a32",
        border: "1px solid #fff",
      },
    }}
  >
    MITGLIED WERDEN
  </Button>

  <Button
    variant="text"
    sx={{
      color: "white",
      textDecoration: "underline",
      fontWeight: "bold",
      fontSize: "1rem",
      width: { xs: "100%", sm: "auto" },
      textAlign: { xs: "center", sm: "left" },
      "&:hover": {
        opacity: 0.7,
      },
    }}
  >
    VIDEO STARTEN
  </Button>
</Stack>


        </Box>
      </Container>
    </Box>
  );
}
