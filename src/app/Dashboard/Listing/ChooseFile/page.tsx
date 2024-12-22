import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import CloseIcon from "@mui/icons-material/Close";
import ImageIcon from "@mui/icons-material/Image";
import {
  Box,
  Button,
  Card,
  CardContent,
  IconButton,
  LinearProgress,
  Typography,
} from "@mui/material";
import Link from "next/link";
import React from "react";

const ChooseFileTo = (): JSX.Element => {
  return (
    <Box display="flex" justifyContent="center" width="100%" bgcolor="white" height="100vh">
      <Box width="1440px" height="700px" position="relative">
        {/* Back Button */}
        <Box position="absolute" top={33} left={100} display="flex" alignItems="center"> 
          <ArrowBackIcon sx={{ color: "#0077B6" }} />
            <Link href="/Dashboard/Listing">
            <Typography variant="body1" color="primary" ml={1}>
              Back
            </Typography>
          </Link>
        </Box>

        {/* Main Card and File Uploads Section */}
        <Box position="absolute" top={69} left={253} width="934px" height="484px">
          {/* Upload Card */}
            <Card
                sx={{
                    width: 250,
                    height: 253,
                    position: "absolute",
                    top: 200,
                    left: 57,
                    borderRadius: 1,
                    border: 1,
                    borderColor: "neutral.main",
                }}
            >
                <Button
                    sx={{
                        width: 250,
                        height: 253,
                    }}
                >
                    <CardContent sx={{ textAlign: "center" }}>
                        <ImageIcon sx={{ fontSize: 45 }} /> 
                        <Typography variant="body2" color="primary" mt={2}>
                            Choose files to upload
                        </Typography>
                    </CardContent>
                </Button>
            </Card>

          {/* File Upload Progress */}
          <Box position="absolute" top={10} left={406} width="527px" height="484px">
            {Array.from({ length: 7 }).map((_, index) => (
              <Box key={index} position="relative" mb={2}>
                <Box display="flex" alignItems="center" mb={1}>
                  <ImageIcon sx={{ fontSize: 30 }} />
                  <Box ml={2} flexGrow={1}>
                    <Typography variant="body2" color="textPrimary">
                      Photo.png
                    </Typography>
                    <Typography variant="caption" color="textSecondary">
                      7.5 mb
                    </Typography>
                  </Box>
                  <IconButton size="small">
                    <CloseIcon />
                  </IconButton>
                </Box>
                <LinearProgress variant="determinate" value={37} />
                <Box display="flex" justifyContent="space-between" mt={0.5}>
                  <Typography variant="caption" color="textSecondary">
                    37% done
                  </Typography>
                  <Typography variant="caption" color="textSecondary">
                    90KB/sec
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>

        {/* Done Button */}
        <Link href="/Dashboard/Listing/ChooseFile/UploadImage">
          <Button
            variant="contained"
            sx={{
              position: "absolute",
              top: 800,
              left: 1118,
              width: 68,
              height: 35,
              borderRadius: 1,
              background: "linear-gradient(180deg, rgb(0,119,182) 0%, rgb(27,157,240) 94.27%)",
            }}
          >
            <Typography variant="caption" color="white">
              Done
            </Typography>
          </Button>
        </Link>
      </Box>
    </Box>
  );
};

export default ChooseFileTo;