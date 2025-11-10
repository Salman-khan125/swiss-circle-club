import { Box, Container, Typography, Button, Stack } from "@mui/material";

export default function HeroSection() {
  return (
    <Box
      sx={{
        width: "100%",
        minHeight: { xs: "750px", md: "100vh" },
        backgroundImage: "url('/assets/hero/hero.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        pt: { xs: 6, md: 0 },
        mt: "-265px"
      }}
    >
      {/* Dark gradient overlay */}
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

      {/* Content */}
      <Container
        maxWidth="lx"
        sx={{
          position: "relative",
          zIndex: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: { xs: "center", md: "flex-start" },
          textAlign: { xs: "center", md: "left" },
        }}
      >
        {/* Top Text */}
        <Typography
          sx={{
            color: "white",
            letterSpacing: "6px",
            fontSize: { xs: "0.7rem", md: "0.9rem" },
            mt: 30,
            opacity: 0.9,
            textTransform: "uppercase",
          }}
        >
          VERNETZT – UNTERSTÜTZT – VERBUNDEN
        </Typography>

        {/* Main Heading */}
        <Typography
          sx={{
            color: "white",
            fontWeight: 700,
            fontSize: { xs: "2.5rem", sm: "3.5rem", md: "4.5rem" },
            lineHeight: 1.1,
            mt: 3,
            textShadow: "0px 3px 6px rgba(0,0,0,0.7)",
          }}
        >
          GRÜEZI – WILLKOMMEN
          <br />
          IN DER SCHWEIZ!
        </Typography>

        {/* Subtext */}
        <Typography
          sx={{
            color: "white",
            fontSize: { xs: "1rem", md: "1.2rem" },
            mt: 2,
            maxWidth: { xs: "100%", md: "550px" },
            textShadow: "0px 2px 4px rgba(0,0,0,0.6)",
          }}
        >
          Der SWISS CIRCLE CLUB ist mehr als nur ein Netzwerk – er ist der
          verlässliche Begleiter für Expats, die bereits in der Schweiz leben
          oder dorthin umziehen möchten.
        </Typography>

        {/* Buttons */}
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={2}
          sx={{
            flexWrap: "wrap",
            justifyContent: { xs: "center", md: "flex-start" },
            mt:6,
          }}
        >
          <Button
            variant="outlined"
            sx={{
              backgroundColor: "transparent",
              color: "white",
              px: { xs: 3, sm: 5, md: 10 },
              py: { xs: 1.1, sm: 1.3, md: 1.2 },
              width: { xs: "100%", sm: "auto" },
              border: "1px solid #fff",
              fontWeight: "bold",
              "&:hover": {
                backgroundColor: "#9f7a3c",
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
              px: { xs: 3, sm: 5, md: 10 },
              py: { xs: 1.1, sm: 1.3, md: 1.2 },
              width: { xs: "100%", sm: "auto" },
              border: "1px solid #fff",
              fontWeight: "bold",
              "&:hover": {
                backgroundColor: "#9f7a3c",
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
              "&:hover": { opacity: 0.7 },
            }}
          >
            VIDEO STARTEN
          </Button>
        </Stack>
      </Container>
    </Box>
  );
}
