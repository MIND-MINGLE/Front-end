import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import CheckIcon from "@mui/icons-material/Check";
import DeleteIcon from "@mui/icons-material/Delete";
import { Box, Grid, Paper, IconButton, Typography } from "@mui/material";
import React from "react";
import CloseIcon from '@mui/icons-material/Close';

interface PopupPaymentProps {
    closePopup: () => void;
  }
  
  export const PopupPayment: React.FC<PopupPaymentProps> = ({ closePopup }) => {
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
        <Paper
          elevation={4}
          sx={{
            width: 560,
            height: 500,
            position: "relative",
            borderRadius: 2,
            overflow: "hidden",
            boxShadow: 3,
          }}
        >
          {/* Close Button */}
          <IconButton
            onClick={closePopup}
            sx={{
              position: "absolute",
              top: 10,
              right: 10,
              color: "grey.700",
              '&:hover': {
                backgroundColor: "rgba(0, 0, 0, 0.1)",
              },
            }}
          >
            <CloseIcon />
          </IconButton>
  
          {/* Content Section */}
          <Box sx={{ position: "absolute", top: 30, left: 30 }}>
            <Typography variant="body2" color="textSecondary">
              Kind of house:{" "}
              <Typography component="span" color="primary">
                Single house
              </Typography>
            </Typography>
            <Typography variant="body2" color="textSecondary" sx={{ mt: 1 }}>
              Price:{" "}
              <Typography component="span" color="primary">
                $67.80
              </Typography>
            </Typography>
            <Typography variant="body2" color="textSecondary" sx={{ mt: 1 }}>
              Date of hire:{" "}
              <Typography component="span" color="primary">
                21-10-2022
              </Typography>
            </Typography>
          </Box>
  
          {/* Month Selection Grid */}
          <Box
            sx={{
              position: "absolute",
              top: 140,
              left: 30,
              width: 500,
              height: 325,
              border: 1,
              borderColor: "grey.300",
              borderRadius: 1,
              overflowY: "auto",
              padding: 2,
            }}
          >
            <Grid container>
              {["Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"].map(
                (month, index) => (
                  <Grid item xs={3} key={month}>
                    <Box
                      sx={{
                        height: 34,
                        bgcolor: "primary.light",
                        borderBottom: 0.5,
                        borderColor: "grey.300",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Typography variant="body2" color="white">
                        {month}
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        height: 54,
                        bgcolor: "white",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        position: "relative",
                        borderTop: 1,
                        borderColor: "grey.300",
                      }}
                    >
                      {index === 10 || index === 11 ? (
                        <DeleteIcon sx={{ position: "absolute", top: 17, left: 29, color: "red" }} />
                      ) : (
                        <CheckIcon sx={{ position: "absolute", top: 17, left: 29, color: "green" }} />
                      )}
                    </Box>
                  </Grid>
                )
              )}
            </Grid>
          </Box>
  
          {/* Year Dropdown */}
          <Box
            sx={{
              position: "absolute",
              top: 5,
              left: 20,
              width: 81,
              height: 24,
              border: 1,
              borderColor: "grey.300",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderTopLeftRadius: 2,
            }}
          >
            <Typography variant="body2" color="textSecondary">
              2022
            </Typography>
            <ArrowDropDownIcon sx={{ ml: 1 }} />
          </Box>
        </Paper>
      </Box>
    );
  };

export default PopupPayment;
