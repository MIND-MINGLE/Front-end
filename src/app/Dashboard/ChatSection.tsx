import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Avatar, Box, Divider, List, ListItem, ListItemAvatar, ListItemText, Typography } from "@mui/material";
import React from "react";

const messages = [
    { name: "J. Barker", message: "Hello. I want to book a villa...", time: "10:20", avatar: "/Ellipse 11.svg" },
    { name: "A. Ball", message: "Hello. I want to book a villa...", time: "10:20", avatar: "/Ellipse 12.svg" },
    { name: "E. Bambridge", message: "Hello. I want to book a villa...", time: "10:20", avatar: "/Ellipse 12.svg" },
    { name: "C. Athersmith", message: "Hello. I want to book a villa...", time: "10:20", avatar: "/Ellipse 12.svg" },
    { name: "H. Allen", message: "Hello. I want to book a villa...", time: "10:20", avatar: "/Ellipse 12.svg" },
    { name: "S. Anderson", message: "Hello. I want to book a villa...", time: "10:20", avatar: "/Ellipse 12.svg" },
];

const ChatSection = (): JSX.Element => {
    return (
        <Box
            sx={{
                width: "100%",
                height: 460,
                bgcolor: "background.paper",
                borderRadius: 2,
                border: 1,
                borderColor: "#0077B6",
                p: 2,
                overflow: "hidden",
            }}
        >
            {/* Header */}
            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2 }}>
                <Typography variant="h6" color="primary" fontWeight="bold">
                    Chat
                </Typography>
                <Box sx={{ display: "flex", alignItems: "center", cursor: "pointer" }}>
                    <Typography variant="body2" color="textSecondary">
                        See detail
                    </Typography>
                    <ArrowForwardIosIcon fontSize="small" color="disabled" sx={{ ml: 0.5 }} />
                </Box>
            </Box>

            {/* Message List */}
            <List
                sx={{
                    maxHeight: 370,
                    overflowY: "auto",
                    "&::-webkit-scrollbar": { display: "none" }, 
                    scrollbarWidth: "none",
                }}
            >
                {messages.map((msg, index) => (
                    <React.Fragment key={index}>
                        <ListItem
                            alignItems="flex-start"
                            sx={{
                                "&:hover": {
                                    bgcolor: "grey.100",
                                    cursor: "pointer",
                                },
                                paddingY: 1.5,
                                paddingX: 2,
                            }}
                        >
                            <ListItemAvatar>
                                <Avatar alt={msg.name} src={msg.avatar} />
                            </ListItemAvatar>
                            <ListItemText
                                primary={
                                    <Typography variant="body1" fontWeight="bold" noWrap component="span" color="black">
                                        {msg.name}
                                    </Typography>
                                }
                                secondary={
                                    <Typography
                                        variant="body2"
                                        color="textSecondary"
                                        noWrap
                                        component="span"
                                        sx={{ maxWidth: 200 }} 
                                    >
                                        {msg.message}
                                    </Typography>
                                }
                            />
                            <Typography variant="body2" color="textSecondary" sx={{ ml: 2, whiteSpace: "nowrap" }}>
                                {msg.time}
                            </Typography>
                        </ListItem>
                        {index < messages.length - 1 && <Divider variant="inset" component="li" />}
                    </React.Fragment>
                ))}
            </List>
        </Box>
    );
};

export default ChatSection;
