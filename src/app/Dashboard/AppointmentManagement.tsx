import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { Avatar, Box, Grid, IconButton, List, ListItem, MenuItem, Select, Typography, Tooltip, ListItemButton } from "@mui/material";
import React from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const appointments = [
    { day: "Monday", time: "11 AM", name: "C. Alcock", phone: "0934722325", address: "58 Do Doc Loc, Cam Le District", avatar: null },
    { day: "Wednesday", time: "11 AM", name: "T. Allen", phone: "0934722325", address: "58 Do Doc Loc, Cam Le District", avatar: null },
    { day: "Wednesday", time: "11 AM", name: "H. Allen", phone: "0934722325", address: "58 Do Doc Loc, Cam Le District", avatar: null },
    { day: "Friday", time: "11 AM", name: "A. Bambridge", phone: "0934722325", address: "58 Do Doc Loc, Cam Le District", avatar: null },
    { day: "Saturday", time: "11 AM", name: "A. Bambridge", phone: "0934722325", address: "58 Do Doc Loc, Cam Le District", avatar: null },
    { day: "Sunday", time: "11 AM", name: "A. Bambridge", phone: "0934722325", address: "58 Do Doc Loc, Cam Le District", avatar: null },
];

const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

const AppointmentManagement = () => {

    return (
        <Box sx={{ height: 460, width: "100%", bgcolor: "background.paper", borderRadius: 2, overflow: "hidden", border: 1, borderColor: "#0077B6", p: 2 }}>
            {/* Header */}
            <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
                <Typography variant="h6" color="primary" fontWeight="bold">
                    Appointment Management
                </Typography>
                <Box sx={{ display: "flex", alignItems: "center", cursor: "pointer" }}>
                    <Typography variant="body2" color="textSecondary">
                        See detail
                    </Typography>
                    <ArrowForwardIosIcon fontSize="small" color="disabled" sx={{ ml: 0.5 }} />
                </Box>
            </Box>

            {/* Date Selector */}
            <Box sx={{ display: "flex", justifyContent: "center", gap: 2, mb: 2 }}>
                {["Day", "Month", "Year"].map((label, index) => (
                    <Box key={index} sx={{ textAlign: "center" }}>
                        <Typography variant="body2" color="primary" fontWeight="bold">{label}</Typography>
                        <Select defaultValue={index === 0 ? 20 : index === 1 ? 10 : 2022} size="small" sx={{ width: 90, mt: 1 }}>
                            <MenuItem value={index === 0 ? 20 : index === 1 ? 10 : 2022}>
                                {index === 0 ? 20 : index === 1 ? 10 : 2022}
                            </MenuItem>
                        </Select>
                    </Box>
                ))}
            </Box>

            {/* Days Grid */}
            <Grid container spacing={1} sx={{ height: "65%" }}>
                {days.map((day) => (
                    <Grid item xs key={day}>
                        <Box sx={{
                            border: 1,
                            borderColor: "divider",
                            borderRadius: 1,
                            bgcolor: "background.paper",
                            height: "100%",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-between"
                        }}>
                            {/* Day Header */}
                            <Typography 
                                variant="body2" 
                                align="center" 
                                color="primary" 
                                fontWeight="bold" 
                                component="div" 
                                border={1}
                                sx={{ 
                                    py: 0.5, 
                                    bgcolor: "white", 
                                }}
                            >
                                {day}
                            </Typography>
                            <List 
                                dense 
                                disablePadding 
                                sx={{ 
                                    overflowY: "auto", 
                                    maxHeight: 270,
                                    "&::-webkit-scrollbar": { display: "none" }, 
                                    msOverflowStyle: "none", 
                                    scrollbarWidth: "none", 
                                }}
                            >
                                {appointments.filter((appointment) => appointment.day === day).map((appointment, index) => (
                                    <ListItem key={index} alignItems="flex-start" disableGutters sx={{ px: 2, py: 1 }}>
                                        <Box display="flex" flexDirection="column">
                                            <Typography 
                                                fontWeight="bold" 
                                                color="textPrimary"
                                                component="span"
                                                sx={{ display: "block", mb: 1 }}
                                            >
                                                {appointment.time}
                                            </Typography>
                                            <Box 
                                                sx={{ 
                                                    display: "flex", 
                                                    alignItems: "center", 
                                                    mb: 0.5 
                                                }}
                                            >
                                                <Avatar 
                                                    sx={{ 
                                                        width: 24, 
                                                        height: 24, 
                                                        mr: 1, 
                                                        bgcolor: "secondary.main" 
                                                    }}
                                                >
                                                    {appointment.name[0]}
                                                </Avatar>
                                                <Typography 
                                                    color="#B8571B"
                                                    component="span"
                                                >
                                                    {appointment.name}
                                                </Typography>
                                            </Box>
                                            <Typography 
                                                color="#ADB5BD"
                                                component="span"
                                            >
                                                {appointment.phone}
                                            </Typography>
                                            <Typography 
                                                color="textSecondary" 
                                                display="block"
                                                component="span"
                                            >
                                                {appointment.address}
                                            </Typography>
                                        </Box>
                                    </ListItem>
                                ))}

                                {/* Add Button */}
                                <ListItemButton sx={{ display: "flex", justifyContent: "center", alignItems: "center", mt: 1 }}>
                                    <Tooltip title="Add Appointment">
                                        <IconButton>
                                            <AddCircleOutlineIcon color="primary" />
                                        </IconButton>
                                    </Tooltip>
                                </ListItemButton>
                            </List>
                        </Box>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default AppointmentManagement;
