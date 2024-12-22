import { Box, Button, IconButton, TextField, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import React from "react";

interface PopupFilterProps {
  closePopup: () => void;
}

const PopupFilter = ({ closePopup }: PopupFilterProps): JSX.Element => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      width="100%"
      height="100vh"
      bgcolor="rgba(0, 0, 0, 0.5)"
      position="fixed"
      top={0}
      left={0}
    >
      <Box
        width={300}
        bgcolor="white"
        borderRadius={2}
        boxShadow={3}
        p={3}
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
      >
        {/* Close Button */}
        <Box display="flex" justifyContent="flex-end">
          <IconButton onClick={closePopup} size="small">
            <CloseIcon />
          </IconButton>
        </Box>

        {/* Title */}
        <Typography variant="h6" color="textPrimary" align="center" mb={3}>
          Filter Options
        </Typography>

        {/* Name Field */}
        <Box>
          <Typography variant="body1" color="textSecondary" gutterBottom>
            Name
          </Typography>
          <TextField
            variant="outlined"
            placeholder="Enter name"
            fullWidth
            size="small"
          />
        </Box>

        {/* Email Field */}
        <Box mt={2}>
          <Typography variant="body1" color="textSecondary" gutterBottom>
            Email
          </Typography>
          <TextField
            variant="outlined"
            placeholder="Enter email"
            fullWidth
            size="small"
          />
        </Box>

        {/* Code Field */}
        <Box mt={2}>
          <Typography variant="body1" color="textSecondary" gutterBottom>
            Code
          </Typography>
          <TextField
            variant="outlined"
            placeholder="Enter code"
            fullWidth
            size="small"
          />
        </Box>

        {/* Search Button */}
        <Box mt={3} display="flex" justifyContent="center">
          <Button
            variant="contained"
            color="primary"
            sx={{
              width: 120,
              height: 40,
              background: "linear-gradient(180deg, rgb(0, 119, 182) 0%, rgb(27, 157, 240) 94.27%)",
              '&:hover': {
                background: "linear-gradient(180deg, rgb(0, 119, 182) 0%, rgb(27, 157, 240) 60%)",
              },
            }}
          >
            Search
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default PopupFilter;
