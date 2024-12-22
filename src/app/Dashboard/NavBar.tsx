import {
    Bookmark,
    Chat,
    ChevronLeft,
    ExitToApp,
    Group,
    ListAlt,
    Person,
  } from "@mui/icons-material";
  import {
    Box,
    Button,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Typography,
  } from "@mui/material";
  import React from "react";
  import GridViewIcon from "@mui/icons-material/GridView";
  import Image from 'next/image';
  import Link from "next/link";
  
  const NavBar = (): JSX.Element => {
    return (
      <Box
        sx={{
          width: 233,
          height: "100%",
          backgroundColor: "#DFF6FF",
          overflow: "hidden",
          position: "relative",
        }}
      >
        {/* Logout Button */}
        <Box
          sx={{
            width: 178,
            height: 40,
            top: 640,
            left: 22,
            backgroundColor: "rgba(255, 255, 255, 0.3)",
            borderRadius: 1,
            border: "0.5px solid",
            borderColor: "primary.dark",
            position: "absolute",
          }}
        >
          <Button
            startIcon={<ExitToApp />}
            sx={{
              width: 101,
              height: 22,
              top: 9,
              left: 2,
              position: "absolute",
              color: "neutral.main",
              fontWeight: "medium",
              fontSize: "small",
            }}
          >
            Log out
          </Button>
        </Box>
  
        {/* Navigation List */}
        <List  sx={{ position: "absolute", top: 200, left: 0, backgroundColor: "#DFF6FF" }}>

          <Link href="/Dashboard">
            <ListItem sx={{backgroundColor: "#DFF6FF"}}>
              <ListItemIcon>
                <GridViewIcon sx={{ color: "#0077B6" }} />
              </ListItemIcon>
              <ListItemText primary={<Typography sx={{color: "#6C757D"}}>Dashboard</Typography>} />
            </ListItem>
          </Link>

          <ListItem  sx={{backgroundColor: "#DFF6FF"}}>
            <ListItemIcon>
              <Chat sx={{ color: "#0077B6" }} />
            </ListItemIcon>
            <ListItemText primary={<Typography sx={{color: "#6C757D"}}>Chat</Typography>} />
          </ListItem>

          <ListItem  sx={{backgroundColor: "#DFF6FF"}}>
            <ListItemIcon>
              <Bookmark sx={{ color: "#0077B6" }} />
            </ListItemIcon>
            <ListItemText primary={<Typography sx={{color: "#6C757D"}}>Appointment</Typography>} />
          </ListItem>

          <ListItem  sx={{backgroundColor: "#DFF6FF"}}>
            <ListItemIcon>
              <Person sx={{ color: "#0077B6" }} />
            </ListItemIcon>
            <ListItemText primary={<Typography sx={{color: "#6C757D"}}>Customer tracking</Typography>} />
          </ListItem>

          <Link href="/Dashboard/CustomerManage">
            <ListItem  sx={{backgroundColor: "#DFF6FF"}}>
              <ListItemIcon>
                <Group sx={{ color: "#0077B6" }} />
              </ListItemIcon>
              <ListItemText primary={<Typography sx={{color: "#6C757D"}}>Customer management</Typography>} />
            </ListItem>
          </Link>
          
          <Link href="/Dashboard/Listing">
            <ListItem  sx={{backgroundColor: "#DFF6FF"}}>
              <ListItemIcon>
                <ListAlt sx={{ color: "#0077B6" }} />
              </ListItemIcon>
              <ListItemText primary={<Typography sx={{color: "#6C757D"}}>Listing</Typography>} />
            </ListItem>
          </Link>

        </List>
  
        {/* Logo and Chevron */}
        <Box
          sx={{
            width: 203,
            height: 55,
            top: 78,
            left: 30,
            position: "absolute",
          }}
        >
          <ChevronLeft
            sx={{
              width: 16,
              height: 16,
              top: 10,
              left: 179,
              position: "absolute",
            }}
          />
          <Link href="/LandingPage">
            <Image
                src="/Logodashboard.png"
                alt="Untitled"
                width={147}
                height={55}
                style={{
                    objectFit: "cover",
                    position: "absolute",
                }}
            />
          </Link>
        </Box>
      </Box>
    );
  };
  
  export default NavBar;
  