import React from "react";
import {
  Avatar,
  Box,
  Container,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  Divider,
} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import PersonIcon from "@mui/icons-material/Person";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import BedtimeIcon from "@mui/icons-material/Bedtime";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import BarChartIcon from "@mui/icons-material/BarChart";
import ReportIcon from "@mui/icons-material/Report";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import DashboardIcon from "@mui/icons-material/Dashboard";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import AddIcon from "@mui/icons-material/Add";
import ListAltIcon from "@mui/icons-material/ListAlt";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Button from "@mui/material/Button";

const menuItems = [
  { text: "Try Premium for Free", icon: <EmojiEventsIcon color="warning" /> },
  { text: "My Profile", icon: <PersonIcon /> },
  { text: "Intermittent Fasting", icon: <FastfoodIcon /> },
  { text: "Sleep", icon: <BedtimeIcon /> },
  { text: "Recipe Discovery", icon: <RestaurantIcon /> },
  { text: "Workout Routines", icon: <FitnessCenterIcon /> },
  { text: "Goals", icon: <EmojiEventsIcon /> },
  { text: "Progress", icon: <BarChartIcon /> },
  { text: "My Weekly Report", icon: <ReportIcon />, secondary: "NEW" },
  { text: "Nutrition", icon: <BarChartIcon />, secondary: "BETA" },
  { text: "My Meals, Recipes & Foods", icon: <RestaurantIcon /> },
];

const ProfilePage = () => {
  return (
    <Container>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mt: 2,
        }}
      >
        <Typography variant="h6">More</Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mt: 2,
          mb: 2,
        }}
      >
        <Box>
          <Typography variant="body1">Streak</Typography>
          <Typography variant="h5">1</Typography>
          <Typography variant="body2" color="text.secondary">
            Day
          </Typography>
        </Box>
        <Avatar sx={{ width: 60, height: 60 }} />
        <Box>
          <Typography variant="body1">Progress</Typography>
          <Typography variant="h5">0 kg</Typography>
          <Typography variant="body2" color="text.secondary">
            Kgs Gained
          </Typography>
        </Box>
      </Box>
      <Typography variant="h6" align="center" gutterBottom>
        Kristiyan Bakalov
      </Typography>

      <Divider sx={{ my: 2 }} />

      <List sx={{ alignItems: "center" }}>
        {menuItems.map((item, index) => (
          <>
            <Button>
              <ListItem key={index}>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText
                  primary={item.text}
                  secondary={item.secondary || null}
                />
              </ListItem>
            </Button>

            <Divider sx={{ my: 2 }} />
          </>
        ))}
      </List>
    </Container>
  );
};

export default ProfilePage;


  /* <BottomNavigation showLabels sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }}>
        <BottomNavigationAction label="Dashboard" icon={<DashboardIcon />} />
        <BottomNavigationAction label="Diary" icon={<MenuBookIcon />} />
        <BottomNavigationAction icon={<AddIcon />} />
        <BottomNavigationAction label="Plans" icon={<ListAltIcon />} />
        <BottomNavigationAction label="More" icon={<MoreHorizIcon />} />
      </BottomNavigation> */
