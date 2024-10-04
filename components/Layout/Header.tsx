import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { Avatar } from "@mui/material";

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{}}>
          Gym Generator
        </Typography>

        <Box sx={{ display: "flex", width: "100%" }}>
          <Button color="inherit" component={Link} href="/">
            Home
          </Button>
          <Button color="inherit" component={Link} href="/diary">
            Diary
          </Button>
          <Link style={{ marginLeft: "auto" }} href={"/profile"}>
            <Avatar sx={{ width: 30, height: 30 }} />
          </Link>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
