import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  InputBase,
  Container,
  IconButton,
  Drawer,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const toggleDrawer = () => setMobileOpen(!mobileOpen);

  return (
    <>
      {/* TOP BAR */}
<AppBar
  position="fixed"
  sx={{
    backgroundColor: "#9f7a3c",
    color: "white",
    top: 0,
    zIndex: 1400,
    left: 0,
    right: 0,
    overflow: "hidden",
    boxShadow: "none",
    width:"100%",
  }}
>
  <Container
    maxWidth="xl"
    disableGutters 
    sx={{
      width: "100%",
      mx: "auto",
      overflow: "hidden",
    }}
  >
    <Toolbar
      variant="dense"
      sx={{
        minHeight: "32px !important",
        justifyContent: { xs: "space-between", md: "flex-end" },
        py: 0.5,
        px: { xs: 1.5, sm: 2 },
        overflow: "hidden",
        width: "100%",
      }}
    >
      {/* Menu  */}
      <IconButton
        sx={{
          display: { xs: "block", md: "none" },
          color: "white",
          flexShrink: 0,
        }}
        onClick={toggleDrawer}
      >
        <MenuIcon />
      </IconButton>

    
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          flexWrap: "nowrap",
          gap: { xs: 1, sm: 2 },
          overflow: "hidden",
          width: "100%",
          maxWidth: "100%",
        }}
      >
        <InputBase
          placeholder="Search..."
          inputProps={{ "aria-label": "search" }}
          sx={{
            backgroundColor: "transparent",
            color: "#ffffff",
            px: 1,
            py: 0.3,
            borderRadius: 20,
            border: "2px solid white",
            fontSize: "0.75rem",
            width: { xs: 100, sm: 140, md: 200 },
            display: { xs: "none", md: "flex" },
          }}
        />

        <Typography
          sx={{
            cursor: "pointer",
            fontSize: { xs: "0.7rem", sm: "0.75rem" },
            color: "white",
            whiteSpace: "nowrap",
            flexShrink: 0,
          }}
        >
          De / ENG
        </Typography>

        <Box
          component="img"
          src="/assets/hero/facebook.png"
          alt="Facebook"
          sx={{
            cursor: "pointer",
            width: { xs: 20, sm: 30 },
            height: { xs: 20, sm: 30 },
            ml: { xs: 0, md: 8 },
            flexShrink: 0,
          }}
        />

        <Box
          component="img"
          src="/assets/hero/in.png"
          alt="in"
          sx={{
            cursor: "pointer",
            width: { xs: 20, sm: 30 },
            height: { xs: 20, sm: 30 },
            ml: { xs: 0, sm: 1 },
            flexShrink: 0,
          }}
        />
      </Box>
    </Toolbar>
  </Container>
</AppBar>


      {/* ✅ MAIN NAVBAR */}
      <AppBar
        position="relative"
        sx={{
          backgroundColor: "rgba(0, 0, 0, 0.7)",
          top: "32px",
          zIndex: 1300,
          backdropFilter: "blur(1px)",
          boxShadow: "none",
          backgroundImage: "none",
          py: 2,
        }}
      >
        <Container maxWidth="xl">
          <Toolbar sx={{ py: 2, position: "relative" }}>
            {/* ✅ LOGO */}
            <Box sx={{ flexGrow: 1 }}>
              <Box
                component="img"
                src="/assets/hero/logo.png"
                alt="SWISS CIRCLE CLUB"
                sx={{ height: "100px", width: "auto" , display:{xs:"block"}}}
                
              />
            </Box>

            {/* ✅ NAV ITEMS (desktop only) */}
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                gap: 4,
                mt: 10,
                alignItems: "center",
              }}
            >
              {[
                "START",
                "COMMUNITY",
                "MITGLIED WERDEN",
                "MITGLIEDERBEREICH",
                "EVENTS&REISEN",
                "CITY",
                "GUIDE",
                "BLOG",
              ].map((item) => (
                <Typography
                  key={item}
                  sx={{
                    mb: "10",
                    color: "white",
                    cursor: "pointer",
                    fontWeight: 500,
                    fontSize: "0.9rem",
                    position: "relative",

                    "&::after": {
                      content: '""',
                      position: "absolute",
                      bottom: -4,
                      left: 0,
                      width: "0%",
                      height: "2px",
                      backgroundColor: "#8B7355", // ✅ your brown theme color
                      transition: "width 0.3s ease",
                      borderRadius: 1,
                    },

                    "&:hover::after": {
                      width: "100%",
                    },
                  }}
                >
                  {item}
                </Typography>
              ))}
            </Box>
            

            {/* LOGIN ICON (desktop) */}
            <Box
              component="img"
              src="/assets/hero/login.png"
              alt="Login"
              sx={{
                cursor: "pointer",
                width: 30,
                height: 30,
                position: "absolute",
                right: 16,
                top: "50%",
                transform: "translateY(-50%)",
                mt: -3,
                display:{xs:"none", sm:"auto",md :"flex"}
              }}
            />
            <Typography
              sx={{
                color: "#997549ff",
                fontSize: "0.75rem",
                position: "absolute",
                right: 56,
                top: "50%",
                transform: "translateY(-50%)",
                mt: -3,
                width: 40,
                 display:{xs:"none", sm:"auto",md :"flex"}
              }}
            >
              LOGIN
            </Typography>
          </Toolbar>
        </Container>
      </AppBar>

      {/* ✅ SPACER */}
      <Box sx={{ height: "140px" }} />

      {/* ✅ MOBILE DRAWER (fully fixed + themed + login bottom) */}
      <Drawer
        anchor="left"
        open={mobileOpen}
        onClose={toggleDrawer}
        sx={{
          zIndex: 2000,
          "& .MuiDrawer-paper": {
            width: 260,
            backgroundColor: "#8B7355",
            color: "white",
            pt: 6,
            pb: 4,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          },
        }}
      >
        {/* MENU LINKS */}
        <Box sx={{ px: 3, display: "flex", flexDirection: "column", gap: 3 }}>
          {[
            "START",
            "COMMUNITY",
            "MITGLIED WERDEN",
            "MITGLIEDERBEREICH",
            "EVENTS & REISEN",
            "CITY",
            "GUIDE",
            "BLOG",
          ].map((item) => (
            <Typography
              onClick={toggleDrawer}
              key={item}
              sx={{
                fontSize: "1rem",
                fontWeight: 500,
                cursor: "pointer",
                "&:hover": { opacity: 0.8 },
              }}
            >
              {item}
            </Typography>
          ))}
        </Box>

        {/* ✅ LOGIN AT BOTTOM */}
        <Box
          onClick={toggleDrawer}
          sx={{
            px: 3,
            display: "flex",
            alignItems: "center",
            gap: 1.5,
            cursor: "pointer",
          }}
        >
          <Box
            component="img"
            src="/assets/hero/login.png"
            alt="Login"
            sx={{
              width: 28,
              height: 28,
              width: 28,
              height: 28,
              filter: "brightness(0) invert(1)",
            }}
          />
          <Typography sx={{ fontSize: "0.9rem", fontWeight: 600, color:"#fff" }}>
            LOGIN
          </Typography>
        </Box>
      </Drawer>
    </>
  );
};

export default Navbar;
