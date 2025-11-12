import React from "react";
import { Box, Container, Typography, Grid, Link } from "@mui/material";
import { Business, LocationOn, Email } from "@mui/icons-material";

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#A57C30", 
        color: "#ffffff",
        py: { xs: 6, md: 8 },
        mt:{xs:5, md:5}
      }}
    >
      <Container maxWidth="xl">
        {/* Logo Section */}
        <Box sx={{ textAlign: "center", mb: 6,  }}>
          <Box
            component="img"
            src="/assets/footer/logo.png" 
            alt="Swiss Circle Club"
            sx={{
              height: { xs: 40, md: 50 },
              width: "auto",
              mr:140,
            }}
          />
        </Box>

        {/* Three Boxes Section */}
        <Grid container spacing={20} justifyContent="center" mt ={5} >
          {/* Box 1: Adresse */}
          <Grid item xs={12} md={4}>
           <Box
  sx={{
    textAlign: "left",
    border:"solid #fff",
    p: 3,
    minHeight: 300,
    minWidth:300,
  }}
>
  <Typography
    variant="h6"
    sx={{
      fontWeight: 600,
      fontSize: "18px",
      mb: 3,
      color: "#ffffff",
    }}
  >
    Adresse
  </Typography>

  {/* Address */}
  <Box sx={{ display: "flex", alignItems: "flex-start", mb: 2 }}>
    <LocationOn sx={{ fontSize: 20, mr: 2, opacity: 0.8, color: "#ffffff", mt: 0.2 , mt:2,}} />
    <Typography
      variant="body2"
      sx={{
        color: "rgba(255, 255, 255, 0.8)",
        lineHeight: 1.8,
        "&:hover": {
          color: "#ffffff",
          textDecoration: "underline",
          cursor:"pointer",
        },
      }}
    >
      Swiss Circle Club GmbH<br/>
      Schulgasse 7 | 6430 Schwyz
    </Typography>
  </Box>

  {/* Phone - Using your phone icon */}
  <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
    <Box
      component="img"
      src="/assets/footer/6.png" // Your phone icon
      alt="Phone"
      sx={{
        height: 20,
        width: 20,
        mr: 2,
        opacity: 0.8,
        mt:5,
      }}
    />
    <Typography
      variant="body2"
      sx={{
        color: "rgba(255, 255, 255, 0.8)",
        lineHeight: 1.8,
        mt:5,
        "&:hover": {
          color: "#ffffff",
          textDecoration: "underline",
          cursor:"pointer",
        },
      }}
    >
      +41 79 885 80 OO
    </Typography>
  </Box>

  {/* Email */}
  <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
    <Email sx={{ fontSize: 20, mr: 2, opacity: 0.8, color: "#ffffff",mt :5, }} />
    <Typography
      variant="body2"
      sx={{
        color: "rgba(255, 255, 255, 0.8)",
        lineHeight: 1.8,
        mt:5,
        "&:hover": {
          color: "#ffffff",
          textDecoration: "underline",
          cursor:"pointer",
        },
      }}
    >
      hello@swisscircleclub.com
    </Typography>
  </Box>
</Box>
          </Grid>

          {/* Box 2: Kontakt & Rechtliches */}
          <Grid item xs={12} md={4}>
            <Box
              sx={{
                textAlign: "left",
                border:"solid #fff",
                p: 3,
                minHeight: 300,
                minWidth:300,
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 600,
                  fontSize: "18px",
                  mb: 3,
                  color: "#ffffff",
                }}
              >
                Kontakt & Rechtliches
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                {[
                  "Kontaktformular",
                  "Kontaktdaten", 
                  "ACB",
                  "Datenschutz",
                  "Impressum"
                ].map((item) => (
                  <Link
                    key={item}
                    href="#"
                    sx={{
                      color: "rgba(255, 255, 255, 0.8)",
                      textDecoration: "none",
                      fontSize: "14px",
                      "&:hover": {
                        color: "#ffffff",
                        textDecoration: "underline",
                      },
                    }}
                  >
                    {item}
                  </Link>
                ))}
              </Box>
            </Box>
          </Grid>

          {/* Box 3: Get Social */}
          <Grid item xs={12} md={4}>
            <Box
             sx={{
                textAlign: "left",
                border:"solid  #fff",
                p: 3,
                minHeight: 300,
                minWidth:300,
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 600,
                  fontSize: "18px",
                  mb: 3,
                  color: "#ffffff",
                }}
              >
                Get Social
              </Typography>
              
              
              {/* Social Media Icons */}
              <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
                <Box
                  component="img"
                  src="/assets/footer/1.png" // Replace with your Instagram icon
                  alt="Instagram"
                  sx={{
                    height: 60,
                    width: 60,
                    opacity: 0.8,
                    "&:hover": {
                      opacity: 1,
                    },
                  }}
                />
                <Box
                  component="img"
                   src="/assets/footer/2.png" // Replace with your Facebook icon
                  alt="Facebook"
                  sx={{
                    height: 60,
                    width:60,
                    opacity: 0.8,
                    "&:hover": {
                      opacity: 1,
                    },
                  }}
                />
                <Box
                  component="img"
                   src="/assets/footer/3.png"// Replace with your LinkedIn icon
                  alt="LinkedIn"
                  sx={{
                    height: 60,
                    width: 60,
                    opacity: 0.8,
                    "&:hover": {
                      opacity: 1,
                    },
                  }}
                />
                <Box
                  component="img"
                   src="/assets/footer/4.png" // Replace with your LinkedIn icon
                  alt="LinkedIn"
                  sx={{
                    height: 60,
                    width: 60,
                    opacity: 0.8,
                    "&:hover": {
                      opacity: 1,
                    },
                  }}
                />
                
              </Box>
              <Typography
                variant="body2"
                sx={{
                  textAlign:"center",
                  color: "rgba(255, 255, 255, 0.8)",
                  lineHeight: 1.6,
                  fontSize: "14px",
                  border:"solid #fff 1px",
                  borderRadius:"40px",
                  py:2,
                  mb: 3,
                  mt: 10
                }}
              >
                Markiere uns in deinen Fotos
              </Typography>
            </Box>
          </Grid>
        </Grid>

        {/* Bottom Copyright Section */}
        <Box
          sx={{
            borderTop: "1px solid #333",
            mt: 6,
            pt: 4,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: { xs: "column", md: "row" },
            gap: 2,
          }}
        >
          <Typography
            variant="body2"
            sx={{
              color: "rgba(255, 255, 255, 0.6)",
              fontSize: "12px",
            }}
          >
            © 2024 Swiss Circle Club. Alle Rechte vorbehalten.
          </Typography>
          
          <Box sx={{ display: "flex", gap: 3 }}>
            {[
              "Datenschutz",
              "Impressum", 
              "AGB"
            ].map((item) => (
              <Link
                key={item}
                href="#"
                sx={{
                  color: "rgba(255, 255, 255, 0.6)",
                  textDecoration: "none",
                  fontSize: "12px",
                  "&:hover": {
                    color: "#ffffff",
                    textDecoration: "underline",
                  },
                }}
              >
                {item}
              </Link>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;