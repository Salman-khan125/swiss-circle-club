import React from "react";
import { Box, Container, Typography, Button } from "@mui/material";

const Topic = () => {
  const topics = [
    // Row 1: 3 images (Events & Kunst, Blog/Menschen, Blog/Finanzen)
    { 
      img: "/assets/topic/a.jpg", 
      category: "EVENTS & KUNST", 
      title: "Einzigeriges Handwerk", 
      subtitle: "QUALITÄT DIE MAN SPÜRT" 
    },
    { 
      img: "/assets/topic/b.jpg", 
      category: "BLOG / MENSCHEN", 
      title: "", 
      subtitle: "" 
    },
    { 
      img: "/assets/topic/e.jpg", 
      category: "BLOG / FINANZEN", 
      title: "Wirtschaftswachstum Luzern", 
      subtitle: "PROSPERIERENDER WIRTSCHAFTSSTANDORT" 
    },

    // Row 2: 2 images (Events & Kunst, Events)
    { 
      img: "/assets/topic/d.png", 
      category: "EVENTS & KUNST", 
      title: "HILFE BEI DER DURCHFÜHRUNG", 
      subtitle: "" 
    },
    { 
      img: "/assets/topic/e.jpg", 
      category: "EVENTS", 
      title: "35 schreiner Wiese", 
      subtitle: "Voltgas ABER NICHT AUF DEM HOLZWEG" 
    },

    // Row 3: 4 images (Blog/Menschen, Blog/Fingerigen, Blog/Menschen, Blog/Menschen)
    { 
      img: "/assets/topic/a.jpg", 
      category: "BLOG / MENSCHEN", 
      title: "FÜR DIE LIEBE MUSS MAN WAS TUN*", 
      subtitle: "" 
    },
    { 
      img: "/assets/topic/b.jpg", 
      category: "BLOG / FINGERIGEN", 
      title: "Auch das Standorten BENEDICT", 
      subtitle: "RENOMMIERT SCHULE" 
    },
    { 
      img: "/assets/topic/d.png", 
      category: "BLOG / MENSCHEN", 
      title: "Bis frei in die Nacht", 
      subtitle: "ZUM DESSERT TANZEN" 
    },
    { 
      img: "/assets/topic/e.jpg", 
      category: "BLOG / MENSCHEN", 
      title: "Andreas Cominade", 
      subtitle: "KREATIVITÄT REICHT INICHT" 
    },
  ];

  return (
    <Box sx={{ width: "100%", backgroundColor: "#fff", py: { xs: 5, md: 10 } }}>
      <Container maxWidth="xl">
        
        {/* Header */}
        <Typography
          sx={{
            fontSize: { xs: "24px", md: "40px" },
            fontWeight: 700,
            color: "#000",
            mb: 8, // Increased bottom margin
            textAlign: "center"
          }}
        >
          Themenübersicht
        </Typography>

        {/* Row 1: 3 items */}
        <Box sx={{ 
          display: 'flex', 
          gap: 3, 
          flexDirection: { xs: 'column', md: 'row' }
        }}>
          {topics.slice(0, 3).map((item, index) => (
            <Box key={index} sx={{ 
              flex: 1,
              minWidth: 0
            }}>
              <ImageCard item={item} />
            </Box>
          ))}
        </Box>

        {/* SPACING BETWEEN ROW 1 AND 2 */}
        <Box sx={{ height: { xs: 40, md: 60 } }} />

        {/* Row 2: 2 items */}
        <Box sx={{ 
          display: 'flex', 
          gap: 3, 
          flexDirection: { xs: 'column', md: 'row' }
        }}>
          {topics.slice(3, 5).map((item, index) => (
            <Box key={index} sx={{ 
              flex: 1,
              minWidth: 0
            }}>
              <ImageCard item={item} />
            </Box>
          ))}
        </Box>

        {/* SPACING BETWEEN ROW 2 AND 3 */}
        <Box sx={{ height: { xs: 40, md: 60 } }} />

        {/* Row 3: 4 items */}
        <Box sx={{ 
          display: 'flex', 
          gap: 3,
          flexDirection: { xs: 'column', md: 'row' },
          flexWrap: { md: 'wrap' }
        }}>
          {topics.slice(5, 9).map((item, index) => (
            <Box key={index} sx={{ 
              flex: { md: '1 1 calc(25% - 24px)' },
              minWidth: 0,
              mb: { xs: 3, md: 0 }
            }}>
              <ImageCard item={item} />
            </Box>
          ))}
        </Box>

        {/* SPACING BETWEEN ROW 3 AND BUTTON */}
        <Box sx={{ height: { xs: 40, md: 60 } }} />

        {/* Button */}
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#A57C30",
              color: "#fff",
              fontSize: { xs: "16px", md: "18px" },
              fontWeight: 700,
              px: { xs: 4, md: 6 },
              py: { xs: 1.5, md: 1 },
              textTransform: "none",
              '&:hover': {
                backgroundColor: "#8C6828",
                transform: "translateY(-2px)",
                boxShadow: "0 4px 12px rgba(165, 124, 48, 0.3)",
              },
              transition: "all 0.3s ease",
              boxShadow: "0 2px 8px rgba(165, 124, 48, 0.2)",
            }}
          >
            JETZT MITGLIED WERDEN
          </Button>
        </Box>

      </Container>
    </Box>
  );
};

// Card Component (overlay category, title, subtitle)
const ImageCard = ({ item }) => {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: { xs: 300, md: 400 },
        borderRadius: "8px",
        overflow: "hidden",
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        transition: "transform 0.3s ease",
        "&:hover": {
          transform: "scale(1.02)",
        }
      }}
    >
      {/* Image */}
      <Box
        component="img"
        src={item.img}
        alt=""
        sx={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          filter: "brightness(0.8)",
        }}
      />

      {/* Text Overlays */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          p: 3,
          color: "#fff",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.1) 30%, rgba(0,0,0,0.1) 70%, rgba(0,0,0,0.3) 100%)"
        }}
      >
        {/* Category - Top Left */}
        <Typography
          sx={{
            fontSize: "12px",
            fontWeight: 700,
            bgcolor: "rgba(0,0,0,0.6)",
            px: 2,
            py: 1,
            width: "fit-content",
            textTransform: "uppercase",
            borderRadius: "4px",
            letterSpacing: "0.5px",
          }}
        >
          {item.category}
        </Typography>

        {/* Title + Subtitle - Bottom */}
        <Box sx={{ textAlign: "left" }}>
          {item.title && (
            <Typography 
              sx={{ 
                fontSize: { xs: "18px", md: "22px" }, 
                fontWeight: 700,
                lineHeight: 1.2,
                mb: 1
              }}
            >
              {item.title}
            </Typography>
          )}
          {item.subtitle && (
            <Typography 
              sx={{ 
                opacity: 0.9, 
                fontSize: { xs: "14px", md: "16px" },
                fontWeight: 600,
                lineHeight: 1.3
              }}
            >
              {item.subtitle}
            </Typography>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default Topic;