import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";

const MemberOfSCC = () => {
  const reasons = [
    {
      icon: "/assets/memberofscc/networking.png",
      alt: "Networking icon",
      title: "1. Networking leicht gemacht:",
      desc: `Knüpfen Sie wertvolle Kontakte, die
Ihnen beruflich und privat
weiterhelfen.`
    },
    {
      icon: "/assets/memberofscc/wissen.png",
      alt: "Wissen icon",
      title: "2. Wissen und Expertise:",
      desc: `Ob rechtliche Tipps oder Insiderinfos
zum Alltag – im SWISS CIRCLE 
CLUB finden Sie alle Infos, die Sie 
brauchen.`
    },
    {
      icon: "/assets/memberofscc/event.png",
      alt: "Event icon",
      titleParts: ["3. Exklusive Veranstaltungen", "& viele weitere Benefits:"],
      desc: `Treffen Sie Gleichgesinnte und
profitieren Sie auf
einzigartigen
Events von den unterschiedlichen
Erfahrungen.`
    }
  ];

  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "#F4EFE6",
        py: { xs: 6, md: 10 },
        mt: { xs: 2, md: 4 },
        
      }}
    >
      <Container maxWidth="xl">
        <Typography
          sx={{
            fontSize: { xs: "26px", md: "40px" },
            color: "#A57C30",
            fontWeight: 400,
            textAlign: "center",
            mb: { xs: 5, md: 8 },
          }}
        >
          3 gute Gründe für eine Mitgliedschaft im Swiss Circle Club:
        </Typography>

        <Grid
          container
          spacing={{ xs: 4, md: 0 }}
          sx={{ gap: { md: 2 } }}
          justifyContent="flex-start"
          alignItems="flex-start"
        >
          {reasons.map((reason, index) => (
            <Grid key={index} item xs={12} md={3.95}>
              <Box
                sx={{
                  display: "flex",
                  gap: 2,
                  transition: "transform 0.3s ease",
                  "&:hover": { transform: "scale(1.02)" },
                  borderRight: {
                    md: index < reasons.length - 1 ? "2px solid #B0A999" : "none",
                  },
                  minHeight: { md: "100px" },
                  width: "100%",
                }}
              >
                <Box
                  component="img"
                  src={reason.icon}
                  alt={reason.alt}
                  sx={{ width: "80px", height: "80px", flexShrink: 0 }} // Updated: Increased image size
                />
                <Box sx={{ flex: 1, pr: { md: index < reasons.length - 1 ? 12 : 0 } }}>
                  {reason.titleParts ? (
                    <>
                      <Typography
                        sx={{
                          fontSize: { xs: "16px", md: "18px" },
                          color: "#000",
                          fontWeight: 600,
                          mb: 0,
                        }}
                      >
                        {reason.titleParts[0]}
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: { xs: "16px", md: "18px" },
                          color: "#000",
                          fontWeight: 600,
                          mb: 1,
                        }}
                      >
                        {reason.titleParts[1]}
                      </Typography>
                    </>
                  ) : (
                    <Typography
                      sx={{
                        fontSize: { xs: "16px", md: "18px" },
                        color: "#000",
                        fontWeight: 600,
                        mb: 1,
                      }}
                    >
                      {reason.title}
                    </Typography>
                  )}
                  <Typography
                    sx={{
                      fontSize: { xs: "15px", md: "17px" },
                      color: "#000",
                      lineHeight: 1.5,
                      whiteSpace: "pre-line",
                      wordBreak: "break-word",
                    }}
                  >
                    {reason.desc}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default MemberOfSCC;