import React from "react";
import { Link, useLocation } from "react-router-dom";
import { AppBar, Toolbar, Typography } from "@mui/material";
import '@fontsource/league-spartan'; // Defaults to weight 400
function Navbar() {
  const location = useLocation();

  return (
    <AppBar
      position="static"
      sx={{
        background: "rgb(251,252,248)",
        background:
          "linear-gradient(90deg, rgba(241,239,231, 1) 0%, rgba(241,244,233,1) 60%, rgba(254,255,252,1) 100%)",
      }}
    >
      <Toolbar>
        <Typography>
          <img src="./src/assets/logo.png" alt="" style={{width: "7em", height: "9m"}} />
        </Typography>
        <div style={{ display: "flex", gap: "3em", paddingLeft: "16em" }}>
          <Typography variant="h4">
            <Link
              color="inherit"
              component={Link}
              to="/"
              className={location.pathname === "/" ? "active" : ""}
              style={{
                textDecoration: "none",
                color: "black",
                textTransform: "uppercase",
                fontFamily: "League Spartan, sans-serif",
                fontWeight: "600",
                fontStyle: "normal",
              }}
            >
              Home
            </Link>
          </Typography>
          <Typography variant="h4">
            <Link
              color="inherit"
              component={Link}
              to="/postPage"
              className={
                location.pathname.startsWith("/postPage") ? "active" : ""
              }
              style={{
                textDecoration: "none",
                color: "black",
                textTransform: "uppercase",
                fontFamily: "League Spartan, sans-serif",
                fontWeight: "600",
                fontStyle: "normal",
              }}
            >
              Posts
            </Link>
          </Typography>
          <Typography variant="h4">
            <Link
              color="inherit"
              component={Link}
              to="/addPost"
              className={
                location.pathname.startsWith("/addPost") ? "active" : ""
              }
              style={{
                textDecoration: "none",
                color: "black",
                textTransform: "uppercase",
                fontFamily: "League Spartan, sans-serif",
                fontWeight: "600",
                fontStyle: "normal",
              }}
            >
              Add Post
            </Link>
          </Typography>
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
