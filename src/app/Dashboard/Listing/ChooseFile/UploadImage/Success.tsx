import React from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Box, Button, Typography, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Link from "next/link";

interface PopupProps {
  closePopup: () => void;
}

const SuccessfullyListing: React.FC<PopupProps> = ({ closePopup }): JSX.Element => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      width="100%"
      bgcolor="rgba(0, 0, 0, 0.5)"
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1000,
        opacity: 1,
        transition: "opacity 0.3s ease",
      }}
    >
      <Box
        sx={{
          width: 463,
          height: 292,
          bgcolor: "background.paper",
          borderRadius: 1,
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: 3,
          position: "relative", 
        }}
      >
        <IconButton
          onClick={closePopup}
          sx={{
            position: "absolute",
            top: 10,
            right: 10,
            color: "grey.700",
            "&:hover": {
              backgroundColor: "rgba(0, 0, 0, 0.1)",
            },
          }}
        >
          <CloseIcon />
        </IconButton>

        <Box
          sx={{
            width: 50,
            height: 50,
            bgcolor: "success.main",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: 6,
          }}
        >
          <CheckCircleIcon sx={{ color: "background.paper", fontSize: 43 }} />
        </Box>

        <Typography
          variant="h6"
          sx={{ color: "success.main", textAlign: "center", mt: 2 }}
        >
          Your listing has been successfully published
        </Typography>

        <Typography
          variant="body2"
          sx={{ color: "text.secondary", textAlign: "center", mt: 1 }}
        >
          Connect us via{" "}
          <Typography component="span" variant="body2" sx={{ color: "text.primary" }}>
            name.info@gmail.com
          </Typography>
        </Typography>

        <Link href="/Dashboard/Listing">
            <Button
            variant="contained"
            sx={{
                mt: 3,
                bgcolor: "primary.main",
                background: "linear-gradient(180deg, rgb(0,119,182) 0%, rgb(27,157,240) 94.27%)",
            }}
            >
            Back to listing
            </Button>
        </Link>
      </Box>
    </Box>
  );
};

export default SuccessfullyListing;
