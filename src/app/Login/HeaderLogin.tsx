import { AppBar, Box, Button, Toolbar } from "@mui/material";
import Link from "next/link";
import React from "react";

const HeaderLogin = (): JSX.Element => {
    return (
        <AppBar position="static" sx={{ backgroundColor: "white", boxShadow: "none" }}>
            <Toolbar
                sx={{
                    justifyContent: "space-between",
                    width: "100%",
                    maxWidth: "1440px",
                    margin: "0 auto",
                }}
            >
                <Box
                    component="img"
                    src="/Logo.png"
                    alt="Logo"
                    sx={{ width: 203, height: 63 }}
                />
                <Box 
                    sx={{ display: "flex", alignItems: "center" }}
                >
                    <Link href="/Login" passHref>
                        <Button 
                            variant="contained"
                            color="primary"
                            sx={{ marginRight: 2, borderRadius: 1, textTransform: "none" }}
                        >
                            Sign In
                        </Button>
                    </Link>
                    <Link href="/Register" passHref>
                        <Button 
                            variant="outlined"
                            color="primary"
                            sx={{ marginRight: 2, borderRadius: 1, textTransform: "none" }}
                        >
                            Sign Up
                        </Button>
                    </Link>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default HeaderLogin;