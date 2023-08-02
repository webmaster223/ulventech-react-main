import React from "react";
import { Box, Toolbar, Typography, AppBar } from "@mui/material";

function Header() {
  return (
    <AppBar>
      <Toolbar>
        <Typography variant="h6" noWrap component="div">
          Ulventech
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
