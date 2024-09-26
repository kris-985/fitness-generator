import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Box from "@mui/material/Box";
import Link from "next/link";

const Layout = () => {
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);

  const toggleDrawer =
    (open: boolean) =>
    (event: MouseEvent | KeyboardEvent): void => {
      if (event.type === 'keydown' && (event as KeyboardEvent).key === 'Tab') {
        return;
      }
      setDrawerOpen(open);
    };

    const sideMenu = (
        <Box
          sx={{ width: 250 }} // No need for the `component` prop here
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <List>
            {['Home', 'Workouts', 'Progress', 'Profile'].map((text) => (
              <ListItem key={text}>
                <Link href={`/${text.toLowerCase()}`} passHref>
                  <ListItemText primary={text} />
                </Link>
              </ListItem>
            ))}
          </List>
          </Box>
    )
  return <>{sideMenu}</>;
};

export default Layout;
