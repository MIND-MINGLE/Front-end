"use client";

import NotificationsIcon from "@mui/icons-material/Notifications";
import SearchIcon from "@mui/icons-material/Search";
import {
  Avatar,
  Badge,
  Box,
  InputAdornment,
  TextField,
} from "@mui/material";
import React, { useState, useRef, useEffect } from "react";
import NotificationComponent from "../LandingPage/Components/NotificationModule/NotificationComponent";
import styles from "./Header.module.css";

export const Header = (): JSX.Element => {
  const [showNotification, setShowNotification] = useState(false);
  const notificationRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      notificationRef.current &&
      !notificationRef.current.contains(event.target as Node)
    ) {
      setShowNotification(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <Box
      display="flex"
      alignItems="center"
      width="100%"
      height="63px"
      bgcolor="background.paper"
      overflow="hidden"
    >
      {/* Search Box */}
      <Box
        display="flex"
        alignItems="center"
        width="908px"
        height="42px"
        margin="11px 0 0 17px"
        bgcolor="background.paper"
        borderRadius="5px"
        border="0.75px solid"
        borderColor="divider"
      >
        <TextField
          variant="outlined"
          placeholder="Searching here..."
          fullWidth
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
            style: { height: "42px" },
          }}
        />
      </Box>

      {/* Notification and User Info */}
      <Box display="flex" alignItems="center" width="200px" height="63px" marginLeft="auto">
        <button
          className={styles.navButton}
          onClick={() => setShowNotification((prev) => !prev)}
        >
          <Badge badgeContent={1} color="primary">
            <NotificationsIcon sx={{ color:"#6C757D" }} />
          </Badge>
        </button>
        {showNotification && (
          <div ref={notificationRef} className={`${styles.dropdown}`}>
            <NotificationComponent />
          </div>
        )}
        <Avatar alt="User Avatar" src="/Ellipse 11.svg" sx={{ marginLeft: 2 }} />
      </Box>
    </Box>
  );
};

export default Header;
