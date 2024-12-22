import {
  Delete,
  Edit,
  Facebook,
  Google,
  Phone,
  Close,
} from "@mui/icons-material";
import {
  Avatar,
  Box,
  FormControl,
  Grid,
  IconButton,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";

interface PopupBookingDetailProps {
  closePopup: () => void;
}

export const PopupBookingDetail = ({
  closePopup,
}: PopupBookingDetailProps): JSX.Element => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      width="100%"
      bgcolor="rgba(0, 0, 0, 0.3)"
      position="fixed"
      top={0}
      left={0}
      height="100vh"
    >
      <Box
        bgcolor="white"
        borderRadius={2}
        boxShadow={3}
        width={900}
        height={490}
        p={3}
        position="relative"
      >
        {/* Close Button */}
        <IconButton
          onClick={closePopup}
          sx={{
            position: "absolute",
            top: 10,
            right: 10,
            color: "text.primary",
          }}
        >
          <Close fontSize="medium" />
        </IconButton>

        {/* Left Side (Avatar and Info) */}
        <Box
          position="relative"
          width={292}
          height={369}
          bgcolor="white"
          borderRadius={1}
          border={0.5}
          borderColor="primary.main"
          top={20}
          left={18}
        >
          <Box
            position="absolute"
            width={131}
            height={134}
            top={5}
            left={81}
            textAlign="center"
          >
            <Avatar
              src="/Ellipse 30.svg"
              alt="T.Adams"
              sx={{ width: 110, height: 110, margin: "0 auto" }}
            />
            <Typography variant="h6" color="primary" mt={1}>
              T.Adams
            </Typography>
          </Box>
          <Box
            position="absolute"
            width={165}
            height={24}
            top={160}
            left={80}
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
          >
            <Typography variant="body2" color="textSecondary">
              Joined: 3 years ago
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Reviewed: 20
            </Typography>
          </Box>
          <Box position="absolute" width={234} height={120} top={220} left={30}>
            <Box display="flex" alignItems="center" mb={2}>
              <Google sx={{ fontSize: 24, mr: 2 }} />
              <Typography variant="body2" color="textSecondary" flexGrow={1}>
                T.Adams2812@gmail.com
              </Typography>
              <IconButton size="small">
                <Delete fontSize="small" />
              </IconButton>
            </Box>
            <Box display="flex" alignItems="center" mb={2}>
              <Facebook sx={{ fontSize: 24, mr: 2 }} />
              <Typography variant="body2" color="textSecondary" flexGrow={1}>
                T.Adams.Facebook
              </Typography>
              <IconButton size="small">
                <Delete fontSize="small" />
              </IconButton>
            </Box>
            <Box display="flex" alignItems="center">
              <Phone sx={{ fontSize: 24, mr: 2 }} />
              <Typography variant="body2" color="textSecondary" flexGrow={1}>
                0934722325
              </Typography>
              <IconButton size="small">
                <Delete fontSize="small" />
              </IconButton>
            </Box>
          </Box>
        </Box>

        {/* Right Side (Form Details) */}
        <Box
          position="absolute"
          width={490}
          height={400}
          top={45}
          left={340}
          bgcolor="white"
          borderRadius={1}
          border={0.5}
          borderColor="primary.main"
          ml={2}
        >
          <Box position="relative" width={460} height={350} top={5} left={10}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <FormControl fullWidth variant="outlined">
                    <Typography 
                        variant="body1" 
                        color="black" 
                        fontWeight="bold"
                    >
                        Full name
                    </Typography>
                  <TextField
                    variant="outlined"
                    defaultValue="T.Adams"
                    InputProps={{
                      endAdornment: (
                        <IconButton size="small">
                          <Edit fontSize="small" />
                        </IconButton>
                      ),
                    }}
                  />
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth variant="outlined">
                    <Typography 
                        variant="body1" 
                        color="black" 
                        fontWeight="bold"
                    >
                        Date of birth
                    </Typography>
                  <Box display="flex" justifyContent="space-between">
                    <Select defaultValue={28} variant="outlined">
                      <MenuItem value={28}>28</MenuItem>
                    </Select>
                    <Select defaultValue={12} variant="outlined">
                      <MenuItem value={12}>12</MenuItem>
                    </Select>
                    <Select defaultValue={2000} variant="outlined">
                      <MenuItem value={2000}>2000</MenuItem>
                    </Select>
                  </Box>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth variant="outlined">
                    <Typography 
                        variant="body1" 
                        color="black" 
                        fontWeight="bold"
                    >
                        Gender
                    </Typography>
                  <Select defaultValue="Female" variant="outlined">
                    <MenuItem value="Female">Female</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth variant="outlined">
                    <Typography 
                        variant="body1" 
                        color="black" 
                        fontWeight="bold"
                    >
                        Address
                    </Typography>
                  <TextField
                    variant="outlined"
                    defaultValue="58 Do Doc Loc. Cam Le District, Da Nang City"
                    InputProps={{
                      endAdornment: (
                        <IconButton size="small">
                          <Edit fontSize="small" />
                        </IconButton>
                      ),
                    }}
                  />
                </FormControl>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default PopupBookingDetail;
