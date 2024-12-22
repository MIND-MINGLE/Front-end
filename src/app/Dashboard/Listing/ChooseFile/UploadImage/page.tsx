"use client"
import React, { useState } from "react";
import { Box, Button, Grid, IconButton, Typography } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import Link from "next/link";
import SuccessfullyListing from "./Success";

const images = [
  { src: "/upload1.png", alt: "Image 10" },
  { src: "/upload2.png", alt: "Image 11" },
  { src: "/upload3.png", alt: "Image 12" },
  { src: "/upload4.png", alt: "Image 13" },
];

const UploadImages = (): JSX.Element => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const openPopup = () => {
        setIsPopupOpen(true);
    };
    const closePopup = () => {
        setIsPopupOpen(false);
    };

  return (
    <Box display="flex" justifyContent="center" width="100%" height="100vh" bgcolor="white">
      <Box width="1440px" height="700px" position="relative">
        <Box
          position="absolute"
          width="814px"
          height="450px"
          top="200px"
          left="313px"
          borderRadius="5px"
          overflow="hidden"
          border="0.75px solid"
          borderColor="#0077B6"
        >
          <Typography
            position="absolute"
            width="427px"
            top="15px"
            left="193px"
            fontWeight="medium"
            color="primary"
            fontSize="medium"
            textAlign="center"
          >
            Upload images or videos of your property
          </Typography>

          <Box
            position="absolute"
            width="666px"
            height="350px"
            top="54px"
            left="73px"
            borderRadius="5px"
            border="0.75px solid"
            borderColor="primary"
          >
            <Grid container spacing={2} padding={2}>
              {images.map((image, index) => (
                <Grid item xs={4} key={index}>
                  <Box 
                    width="250px" 
                    height="143px"
                    display="flex"
                    flexDirection="column"
                  >
                    <Box
                      sx={{
                        width: "200px",
                        height: "104px",
                        backgroundImage: `url(${image.src})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        borderRadius: "5px"
                      }}
                      aria-label={image.alt}
                    />
                    <Typography
                        mt={1}
                      width="200px"
                      fontWeight="medium"
                      color="black"
                      fontSize="tiny"
                      textAlign="center"
                    >
                      Give a detailed description
                    </Typography>
                  </Box>
                </Grid>
              ))}
              <Grid item xs={4}>
                <Box
                  display="flex"
                  flexDirection="column"
                  alignItems="center"
                  justifyContent="center"
                  width="200px"
                  height="107px"
                  border="1px dashed"
                  borderColor="black"
                  borderRadius="5px"
                >
                  <AddCircleOutlineIcon fontSize="large" sx={{ color: "black" }}/>
                  <Typography fontWeight="medium" color="black" fontSize="tiny" textAlign="center">
                    Add picture
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Box>

        <Box
          position="absolute"
          width="500px"
          height="35px"
          top="700px"
          left="470px"
          display="flex"
          justifyContent="space-between"
        >
          <Button
            variant="contained"
            color="primary"
            style={{
              background: "linear-gradient(180deg, rgb(0,119,182) 0%, rgb(27,157,240) 94.27%)",
            }}
            onClick={openPopup}
          >
            Published listing
          </Button>
          <Button variant="contained" color="secondary" onClick={openPopup}>
            Preview listing
          </Button>
        </Box>

        <Link href="/Dashboard/Listing/ChooseFile">
            <Box
                position="absolute"
                top="33px"
                left="100px"
                display="flex"
                alignItems="center"
            >
            <IconButton>
                <ArrowBackIosIcon />
            </IconButton>
            <Typography fontWeight="medium" color="primary" fontSize="medium">
                Back
            </Typography>
            </Box>
        </Link>
      </Box>
      {isPopupOpen && <SuccessfullyListing closePopup={closePopup}/>}
    </Box>
  );
};

export default UploadImages;
