import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import FavoriteIcon from "@mui/icons-material/Favorite";
import StarIcon from "@mui/icons-material/Star";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import {
  Avatar,
  Box,
  Divider,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
  Paper,
} from "@mui/material";
import React from "react";

const CustomerTracking = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: 460,
        bgcolor: "background.paper",
        borderRadius: 1,
        overflow: "hidden",
        border: 1,
        borderColor: "primary.main",
        position: "relative",
        boxShadow: 2,
      }}
    >
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        width={650}
        height={23}
        sx={{
          position: "absolute",
          top: 10,
          left: 70,
          borderRadius: "1px 1px 0 0",
        }}
      >
        <Typography variant="h6" color="primary" fontWeight="bold">
          Customer tracking
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center", cursor: "pointer" }}>
          <Typography variant="body2" color="textSecondary">
              See detail
          </Typography>
          <ArrowForwardIosIcon fontSize="small" color="disabled" sx={{ ml: 0.5 }} />
        </Box>
      </Box>

      {/* Left section */}
      <Box
        sx={{
            left: 70,
            top: 50,
            width: 320,
            height: 395,
            position: "relative",
            borderRadius: 2,
            border: 1,
            borderColor: "primary.main",
            p: 2,
            bgcolor: "background.paper",
            boxShadow: 2,
        }}
    >
        {/* Title */}
        <Typography
        variant="subtitle2"
        sx={{
            mb: 2,
            fontWeight: "bold",
            color: "primary.main",
        }}
        >
        Average Customer
        </Typography>

        <Box sx={{ display: "relative", width: "100%", height: "100%", mt: 2 }}>
            {/* Vertical Labels */}
            <Box
                sx={{
                    position: "absolute",
                    top: 65,
                    left: 0,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    height: "75%",
                    pl: 1,
                    pr: 2,
                    mb: 2,
                    zIndex: 1,
                }}
            >
                {["0", "20", "40", "60", "80", "100"].map((label, index) => (
                <Box key={index} sx={{ display: "flex", alignItems: "center" }}>
                    <Typography
                    variant="caption"
                    sx={{
                        color: "text.secondary",
                        minWidth: 24,
                        textAlign: "right",
                    }}
                    >
                    {label}
                    </Typography>
                    <Box
                    component="img"
                    src="/vector25.png"
                    alt="Vector"
                    sx={{
                        ml: 1,
                        width: "260px",
                        height: "1px",
                        bgcolor: "divider",
                    }}
                    />
                </Box>
                ))}
            </Box>

            {/* Day Bars */}
            <Box 
                sx={{ 
                    position: "absolute",
                    bottom: 0,
                    left: 40,
                    display: "flex", 
                    justifyContent: "space-between", 
                    alignItems: "flex-end", 
                    height: "75%", 
                    width: "80%", 
                    zIndex: 2,
                    mb: 2 
                }}
            >
                {[
                { day: "Sun", height: 222 },
                { day: "Mon", height: 119 },
                { day: "Tue", height: 17 },
                { day: "Wed", height: 89 },
                { day: "Thu", height: 116 },
                { day: "Fri", height: 142 },
                { day: "Sat", height: 245 },
                ].map((bar, index) => (
                <Box key={index} sx={{ textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <Box
                    sx={{
                        width: 16,
                        height: bar.height,
                        bgcolor: "secondary.main",
                        borderRadius: "5px 5px 0 0",
                        mb: 1,
                    }}
                    />
                    <Typography variant="caption" sx={{ color: "text.secondary" }}>
                    {bar.day}
                    </Typography>
                </Box>
                ))}
            </Box>
        </Box>

        {/* Week Selection */}
        <Box
        sx={{
            position: "absolute",
            top: 16,
            right: 16,
            px: 1.5,
            py: 0.5,
            display: "flex",
            alignItems: "center",
            borderRadius: 1,
            border: 1,
            borderColor: "grey.300",
            bgcolor: "background.default",
            boxShadow: 1,
            cursor: "pointer",
        }}
        >
        <Typography variant="caption" color="text.secondary">
            Week
        </Typography>
        <ArrowForwardIosIcon
            fontSize="small"
            sx={{
            ml: 0.5,
            transform: "rotate(90deg)",
            color: "text.secondary",
            }}
        />
        </Box>
    </Box>

      {/* Right section */}
      <Box sx={{ position: "absolute", width: 300, height: 380, top: 50, left: 424 }}>
        <Grid container spacing={2}>
          {/* Total Reviews */}
          <Paper 
            sx={{ 
              marginTop: 2,
              ml: 2,
              width: 140, 
              height: 100, 
              bgcolor: "background.paper", 
              borderRadius: 1, 
              overflow: "hidden", 
              border: 1, 
              borderColor: "primary.main", 
            }} 
          > 
            <Box sx={{ position: "relative", width: 109, height: 49, top: 15, left: 6 }}>
              <Typography 
                sx={{ 
                  position: "absolute", 
                  width: 120, 
                  top: 50, 
                  left: 1, 
                  fontWeight: "medium", 
                  fontSize: "0.75rem", 
                  color: "text.secondary", 
                }} 
              > 
                Total review last week 
              </Typography> 
              <Box sx={{ position: "absolute", width: 108, height: 25, top: 3, left: 1 }} >
                <Typography 
                  sx={{ 
                    position: "absolute", 
                    width: 51, 
                    top: 20, 
                    left: 0, 
                    fontWeight: "medium", 
                    fontSize: "1rem", 
                    color: "secondary.main", 
                    whiteSpace: "nowrap", 
                  }} 
                > 
                  10.0k 
                </Typography> 
                <Box 
                  sx={{ 
                    position: "absolute", 
                    width: 24, 
                    height: 24, 
                    top: 0, 
                    left: 95, 
                    bgcolor: "background.paper", 
                    boxShadow: 1, 
                    display: "flex", 
                    alignItems: "center", 
                    justifyContent: "center", 
                  }} 
                > 
                  <TrendingUpIcon sx={{ width: 18, height: 18 }} /> 
                </Box> 
              </Box> 
              <Typography 
                variant="body2"
                sx={{ 
                  position: "absolute", 
                  width: 90, 
                  top: 0, 
                  left: 1, 
                  fontWeight: "medium",  
                  color: "primary.main", 
                }} 
              > 
                Total Reviews 
              </Typography> 
            </Box> 
          </Paper>

          {/* Average Rating */}
          <Box 
            width={143} 
            height={100} 
            bgcolor="background.paper" 
            borderRadius={1} 
            overflow="hidden" 
            border={0.75} 
            borderColor="primary.main" 
            display="flex" 
            flexDirection="column" 
            justifyContent="center" 
            alignItems="center" 
            sx={{ mt: 2, ml: 2, boxShadow: 2 }}
          > 
            <Typography 
              variant="body2" 
              color="primary.main" 
              fontWeight="medium" 
              gutterBottom 
            > 
              Average Rating 
            </Typography> 
            <Box display="flex" alignItems="center"> 
              <Typography 
                variant="body1" 
                color="secondary.main" 
                fontWeight="medium"
              > 
                4.0 
              </Typography> 
              <Box display="flex" ml={1}> 
                <StarIcon fontSize="small" style={{ color: "#F88B00" }} /> 
                <StarIcon fontSize="small" style={{ color: "#F88B00" }} /> 
                <StarIcon fontSize="small" style={{ color: "#F88B00" }} /> 
                <StarIcon fontSize="small" style={{ color: "#F88B00" }} /> 
                <StarIcon fontSize="small" style={{ color: "#CED4DA" }} /> 
              </Box> 
            </Box> 
            <Typography 
              variant="caption" 
              color="text.secondary" 
              fontWeight="medium"
            > 
              Average rating last week 
            </Typography> 
          </Box>
        </Grid>

        {/* Reviews List */}
        <List sx={{ mt: 2, border: 1, borderColor: "primary.light", borderRadius: 1, bgcolor: "background.paper", boxShadow: 2 }}>
          {[
            { name: "J. Barker", date: "27/10/2022", avatar: "/Rectangle 36.png" },
            { name: "B. Austin", date: "27/10/2022", avatar: "/Rectangle 36.png" },
            { name: "R. Baynham", date: "27/10/2022", avatar: "/Rectangle 36.png" },
            { name: "D. Baynham", date: "27/10/2022", avatar: "/Rectangle 36.png" },
          ].map((review, index) => (
            <React.Fragment key={index}>
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar alt={review.name} src={review.avatar} />
                </ListItemAvatar>
                <ListItemText
                  primary={
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      <Typography sx={{ fontWeight: "bold", color: "text.primary", fontSize: 10, mr: 1 }}>
                        {review.name}
                      </Typography>
                      <Box sx={{ display: "flex", alignItems: "center" }}>
                        {[...Array(4)].map((_, index) => (
                          <StarIcon key={index} sx={{ color: "#F88B00", fontSize: 9 }} />
                        ))}
                        <StarIcon sx={{ color: "#CED4DA", fontSize: 9 }} />
                      </Box>
                    </Box>
                  }
                  secondary={
                    <>
                      <Typography
                        sx={{
                          display: "inline",
                          fontWeight: "medium",
                          color: "text.secondary",
                          fontSize: 9,
                        }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                      >
                        {review.date}
                      </Typography>
                    </>
                  }
                />
                <IconButton size="small">
                  <FavoriteIcon sx={{ fontSize: 9, color: "text.secondary" }} />
                </IconButton>
              </ListItem>
              {index < 3 && <Divider variant="inset" component="li" />}
            </React.Fragment>
          ))}
        </List>
      </Box>
    </Box>
  );
};

export default CustomerTracking;