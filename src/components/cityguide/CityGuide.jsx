import React from "react";
import { Box, Grid, Typography, Button, Container } from "@mui/material";

const CityGuide = () => {
  const cards = [
    {
      title: "COMMUNITY",
      image: "/assets/cityguide/community.png", // replace with your actual image
    },
    {
      title: "CITY GUIDES",
      image: "/assets/cityguide/city.png", // replace with your actual image
    },
  ];

  return (
    <Box
      sx={{
        backgroundColor: "#f8f6f2",
        py: { xs: 6, md: 15 },
        width: "100%",
      }}
    >
      <Grid
        container
        spacing={{xs:2, md:4}}
        justifyContent="center"
        alignItems="center"
        sx={{
          width: "100%",
          margin: 0,
        }}
      >
        {cards.map((card, index) => (
          <Grid
            item
            xs={12}
            md={6}
            key={index}
            sx={{
              textAlign: "center",
              p: { xs: 2, md: 0 },
            }}
          >
            {/* Image */}
            <Box
              component="img"
              src={card.image}
              alt={card.title}
              sx={{
                width: "100%",
                height: { xs: 280, sm: 350, md: "70vh" },
                objectFit: "cover",
                display: "block",
              }}
            />

            {/* Button */}
            <Box sx={{ py: { xs: 3, md: 4 }, backgroundColor: "#f8f6f2" }}>
              <Button
                variant="outlined"
                sx={{
                  borderColor: "#b38b45",
                  color: "#b38b45",
                  fontWeight: 600,
                  fontFamily: "Playfair Display, serif",
                  letterSpacing: 0.5,
                  textTransform: "none",
                  px:{xs:6, sm : 15, md:25},
                  py: 1.5,
                  fontSize: { xs: "1rem", md: "1.05rem" },
                  "&:hover": {
                    borderColor: "#b38b45",
                    backgroundColor: "transparent",
                  },
                }}
              >
                {card.title} ›
              </Button>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default CityGuide;
