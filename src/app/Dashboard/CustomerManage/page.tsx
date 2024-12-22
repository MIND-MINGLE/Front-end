"use client"
import { Avatar, Box, Button, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import React, { useState } from "react";
import NavBar from "../NavBar";
import Header from "../Header";
import AddIcon from "@mui/icons-material/Add"; 
import FilterListIcon from "@mui/icons-material/FilterList";
import PopupPayment from "./PaymentDetails";
import PopupBookingDetail from "./ProfileDetails";
import PopupAddNew from "./CreateCustomer";
import PopupFilter from "./FilterDetails";

const users = [
  {
    id: "RO1002",
    avatar: "/Ellipse 30.svg",
    customer: "T.Adams",
    email: "bianka.kihn@graham.com",
    phone: "0934722325",
    date: "31-12-2022",
  },
  {
    id: "RO1002",
    avatar: "/Ellipse 30.svg",
    customer: "T.Adams",
    email: "bianka.kihn@graham.com",
    phone: "0934722325",
    date: "31-12-2022",
  },
  {
    id: "RO1002",
    avatar: "/Ellipse 30.svg",
    customer: "T.Adams",
    email: "bianka.kihn@graham.com",
    phone: "0934722325",
    date: "31-12-2022",
  },
  {
    id: "RO1002",
    avatar: "/Ellipse 30.svg",
    customer: "D. Ashton",
    email: "klabadie@walsh.com",
    phone: "0934722325",
    date: "31-12-2022",
  },
  {
    id: "RO1002",
    avatar: "/Ellipse 30.svg",
    customer: "W. Ashurst",
    email: "geovany.maggio@shields.com",
    phone: "0934722325",
    date: "31-12-2022",
  },
  {
    id: "RO1002",
    avatar: "/Ellipse 30.svg",
    customer: "A. A'Court",
    email: "bergstrom.mandy@hoppe.com",
    phone: "0934722325",
    date: "31-12-2022",
  },
  {
    id: "RO1002",
    avatar: "/Ellipse 30.svg",
    customer: "E. Baily",
    email: "fpredovic@mccullough.com",
    phone: "0934722325",
    date: "31-12-2022",
  },
  {
    id: "RO1002",
    avatar: "/Ellipse 30.svg",
    customer: "J. Aston",
    email: "ecormier@dibbert.com",
    phone: "0934722325",
    date: "31-12-2022",
  },
  {
    id: "RO1002",
    avatar: "/Ellipse 30.svg",
    customer: "G. Armitage",
    email: "clabadie@bashirian.org",
    phone: "0934722325",
    date: "31-12-2022",
  },
  {
    id: "RO1002",
    avatar: "/Ellipse 30.svg",
    customer: "R. Barkley",
    email: "fwiza@wehner.com",
    phone: "0934722325",
    date: "31-12-2022",
  },
  {
    id: "RO1002",
    avatar: "/Ellipse 30.svg",
    customer: "J. Bain",
    email: "kerluke.samir@hotmail.com",
    phone: "0934722325",
    date: "31-12-2022",
  },
  {
    id: "RO1002",
    avatar: "/Ellipse 30.svg",
    customer: "C. Alcock",
    email: "slehner@okon.info",
    phone: "0934722325",
    date: "31-12-2022",
  },
  {
    id: "RO1002",
    avatar: "/Ellipse 30.svg",
    customer: "C. Alcock",
    email: "slehner@okon.info",
    phone: "0934722325",
    date: "31-12-2022",
  },
];

const UserTable = () => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [isPopupOpen1, setIsPopupOpen1] = useState(false);
    const [isPopupOpen2, setIsPopupOpen2] = useState(false);
    const [isPopupOpen3, setIsPopupOpen3] = useState(false);

    const openPopup = () => {
        setIsPopupOpen(true);
    };
    const closePopup = () => {
        setIsPopupOpen(false);
    };
    
    const openPopup1 = () => {
        setIsPopupOpen1(true);
    };
    const closePopup1 = () => {
        setIsPopupOpen1(false);
    };

    const openPopup2 = () => {
        setIsPopupOpen2(true);
    };
    const closePopup2 = () => {
        setIsPopupOpen2(false);
    };

    const openPopup3 = () => {
        setIsPopupOpen3(true);
    };
    const closePopup3 = () => {
        setIsPopupOpen3(false);
    };
    

  return (
    <Box sx={{ display: 'flex', height:"100vh" }}>
        <Box>
            <NavBar />
        </Box>
        <Box sx={{ width:"100%", height:"100%", display:'flex', flexDirection:'column', bgcolor:'white' }}>
            <Box>
                <Header />
            </Box>
            <Box 
                display="flex" 
                alignItems="center" 
                width="98%"
                height="40px"
                sx={{mt: 2, ml:2, mr:2,}}
            > 
                <Typography 
                    variant="h6" 
                    color="primary" 
                    sx={{ flexGrow: 1 }}
                > 
                    Customer Management 
                </Typography> 
                <Button 
                    variant="contained" 
                    startIcon={
                        <AddIcon />
                    } 
                    sx={{ 
                        background: "linear-gradient(180deg, rgb(0,119,182) 0%, rgb(27,157,240) 94.27%)", 
                        borderRadius: "5px", 
                        height: "30px", 
                        marginRight: "10px", 
                    }}
                    onClick={openPopup2}
                > 
                    Create new Customer 
                </Button> 
                <IconButton onClick={openPopup3} sx={{ border: "0.75px solid #adb5bd", borderRadius: "5px", height: "33px", width: "75px", }} > 
                    <FilterListIcon /> 
                    <Typography 
                        variant="body2" 
                        color="textSecondary" 
                        sx={{ marginLeft: "5px" }} 
                    > 
                        Filter 
                    </Typography> 
                </IconButton> 
            </Box>
            
            <Box sx={{ width: "98%", overflowY: "auto", bgcolor:'white', mt: 2, ml:2, "&::-webkit-scrollbar": { display: "none" }, border: 2, }}>
                <TableContainer component={Paper}>
                    <Table>
                    <TableHead sx={{ bgcolor: "#DFF6FF" }}>
                        <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell>Avatar</TableCell>
                        <TableCell>Customer</TableCell>
                        <TableCell>Email</TableCell>
                        <TableCell>Phone number</TableCell>
                        <TableCell>Arrival date</TableCell>
                        <TableCell>Payment details</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody sx={{}}>
                        {users.map((user, index) => (
                        <TableRow key={index}>
                            <TableCell>{user.id}</TableCell>
                            <TableCell>
                            <Avatar src={user.avatar} />
                            </TableCell>
                            <TableCell>
                                <Button
                                    onClick={openPopup1}
                                >
                                    <Typography color="secondary">{user.customer}</Typography>
                                </Button>
                            </TableCell>
                            <TableCell>{user.email}</TableCell>
                            <TableCell>{user.phone}</TableCell>
                            <TableCell>{user.date}</TableCell>
                            <TableCell>
                                <Button
                                    variant="contained"
                                    sx={{
                                    background: "linear-gradient(180deg, rgb(0,119,182) 0%, rgb(27,157,240) 94.27%)",
                                    }}
                                    onClick={openPopup}
                                >
                                    Payment
                                </Button>
                            </TableCell>
                        </TableRow>
                        ))}
                    </TableBody>
                    </Table>
                </TableContainer>
            </Box>
            {isPopupOpen && <PopupPayment closePopup={closePopup} />}
            {isPopupOpen1 && <PopupBookingDetail closePopup={closePopup1} />}
            {isPopupOpen2 && <PopupAddNew closePopup={closePopup2} />}
            {isPopupOpen3 && <PopupFilter closePopup={closePopup3} />}
        </Box>
    </Box>
  );
};

export default UserTable;
