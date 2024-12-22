import { Box, Button, Grid, TextField, IconButton, Typography } from "@mui/material";
import React from "react";
import { Close } from "@mui/icons-material";

interface PopupAddNewProps {
  closePopup: () => void;
}

const PopupAddNew = ({ closePopup }: PopupAddNewProps): JSX.Element => {
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
        width={752}
        height={200}
        bgcolor="white"
        borderRadius={2}
        boxShadow={3}
        position="relative"
        p={3}
      >
        {/* Close Button */}
        <IconButton
          onClick={closePopup}
          sx={{
            position: "absolute",
            top: 10,
            right: 10,
            color: "text.primary",
            zIndex: 10,
          }}
        >
          <Close />
        </IconButton>

        {/* Title */}
        <Typography variant="h6" color="text.primary" mb={2} align="center">
          Add New Customer
        </Typography>

        {/* Form */}
        <Grid container spacing={2}>
          <Grid item xs={2.4}>
            <TextField
              label="ID"
              variant="outlined"
              fullWidth
              InputLabelProps={{ shrink: true }}
              placeholder="Enter ID"
            />
          </Grid>
          <Grid item xs={2.4}>
            <TextField
              label="Name"
              variant="outlined"
              fullWidth
              InputLabelProps={{ shrink: true }}
              placeholder="Enter customer name"
            />
          </Grid>
          <Grid item xs={2.4}>
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              InputLabelProps={{ shrink: true }}
              placeholder="Enter email"
            />
          </Grid>
          <Grid item xs={2.4}>
            <TextField
              label="Phone number"
              variant="outlined"
              fullWidth
              InputLabelProps={{ shrink: true }}
              placeholder="Enter phone number"
            />
          </Grid>
          <Grid item xs={2.4}>
            <TextField
              label="Arrival date"
              variant="outlined"
              fullWidth
              InputLabelProps={{ shrink: true }}
              placeholder="Enter arrival date"
            />
          </Grid>
        </Grid>

        {/* Add Button */}
        <Button
          variant="contained"
          color="primary"
          sx={{
            position: "absolute",
            bottom: 10,
            right: 15,
            width: 140,
            height: 40,
            background: "linear-gradient(180deg, rgb(0, 119, 182) 0%, rgb(27, 157, 240) 94.27%)",
            '&:hover': {
              background: "linear-gradient(180deg, rgb(0, 119, 182) 0%, rgb(27, 157, 240) 60%)",
            },
          }}
        >
          Add New
        </Button>
      </Box>
    </Box>
  );
};

export default PopupAddNew;
