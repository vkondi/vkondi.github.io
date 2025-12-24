import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from "@mui/material";
import { Home, Work, School, Code } from "@mui/icons-material";
import { useNavigate, useLocation } from "react-router-dom";

const drawerWidth = 240;

const menuItems = [
  { text: "Home", icon: <Home />, path: "/" },
  { text: "Experience", icon: <Work />, path: "/experience" },
  { text: "Projects", icon: <Code />, path: "/projects" },
  { text: "Education", icon: <School />, path: "/education" },
];

const Navigation = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
        },
      }}
    >
      <Toolbar />
      <List>
        {menuItems.map((item) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton
              onClick={() => void navigate(item.path)}
              selected={location.pathname === item.path}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default Navigation;
