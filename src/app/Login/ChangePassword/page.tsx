"use client";
import React from "react";
import { Box } from "@mui/material";
import HeaderLogin from "@/app/Login/HeaderLogin";
import ChangePasswordFrame from "@/app/Login/ChangePassword/ChangePassForm";
import Footer from "@/app/LandingPage/Components/Footer/Footer";
import CopyrightFooter from "@/app/LandingPage/Components/CopyrightFooter/CopyrightFooter";

const ChangePassword = () => {

  return (
    <Box
      sx={{
        background: "white",
        width: "100%",
        minHeight: "100vh",
        position: "relative",
        padding: "16px",
      }}
    >
      <HeaderLogin />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "calc(100vh - 200px)",
        }}
      >
        <ChangePasswordFrame />
      </Box>
      <Footer />
      <CopyrightFooter />
    </Box>
  );
};

export default ChangePassword;
