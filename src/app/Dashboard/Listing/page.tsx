import { Grid, Box, Button,  Typography, TextField, Checkbox, FormControlLabel, MenuItem } from "@mui/material";
import NavBar from "../NavBar";
import Header from "../Header";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Link from "next/link";

const features = [ 
    { label: "Projector" }, 
    { label: "Pantry" }, 
    { label: "Relaxing Room" }, 
    { label: "Meeting Room" }, 
    { label: "Dinner Area" }, 
    { label: "Gym" }, 
    { label: "24/7 Electricity" }, 
    { label: "Mall nearby" }, 
    { label: "24/7 Wifi" }, 
    { label: "Supermarket nearby" }, 
    { label: "Kitchen" }, 
    { label: "24/7 security" }, 
];

const Listing = () => {
  return (
    <Box sx={{ display: 'flex', height:"100%", "&::-webkit-scrollbar": { display: "none" }, }}>
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
                    List a Property 
                </Typography> 
            </Box>
            
            <Box sx={{ width: "98%", overflowY: "auto", bgcolor:'white', mt: 2, ml:2, "&::-webkit-scrollbar": { display: "none" }, border: 2, }}>
                <Grid container spacing={2} sx={{ width: "97%", ml: 2.5, mt: 0.5 }}>
                    {/* Title and Description */}
                    <Grid item xs={12}>
                        <Typography variant="subtitle1" color="black" fontWeight="bold">Title</Typography>
                        <TextField
                            fullWidth
                            placeholder="Ex. The room has 5 desks, 1 meeting room, suitable for 20 people"
                            variant="outlined"
                            size="small"
                        />
                    </Grid>

                    {/* No of Desk */}
                    <Grid item xs={4}>
                        <Typography variant="subtitle1" color="black" fontWeight="bold">No of desk</Typography>
                        <TextField
                        select
                        fullWidth
                        placeholder="Select"
                        variant="outlined"
                        size="small"
                        SelectProps={{
                            IconComponent: ArrowDropDownIcon,
                        }}
                        >
                        <MenuItem value="1">1</MenuItem>
                        <MenuItem value="2">2</MenuItem>
                        <MenuItem value="3">3</MenuItem>
                        <MenuItem value="4">4</MenuItem>
                        <MenuItem value="5">5</MenuItem>
                        </TextField>
                    </Grid>

                    {/* No of Meeting Room */}
                    <Grid item xs={4}>
                        <Typography variant="subtitle1" color="black" fontWeight="bold">No of meeting room</Typography>
                        <TextField
                        select
                        fullWidth
                        placeholder="Select"
                        variant="outlined"
                        size="small"
                        SelectProps={{
                            IconComponent: ArrowDropDownIcon,
                        }}
                        >
                        <MenuItem value="1">1</MenuItem>
                        <MenuItem value="2">2</MenuItem>
                        <MenuItem value="3">3</MenuItem>
                        <MenuItem value="4">4</MenuItem>
                        <MenuItem value="5">5</MenuItem>
                        </TextField>
                    </Grid>

                    {/* No of Parking Space */}
                    <Grid item xs={4}>
                        <Typography variant="subtitle1" color="black" fontWeight="bold">No of parking space</Typography>
                        <TextField
                        select
                        fullWidth
                        placeholder="Select"
                        variant="outlined"
                        size="small"
                        SelectProps={{
                            IconComponent: ArrowDropDownIcon,
                        }}
                        >
                        <MenuItem value="1">1</MenuItem>
                        <MenuItem value="2">2</MenuItem>
                        <MenuItem value="3">3</MenuItem>
                        <MenuItem value="4">4</MenuItem>
                        <MenuItem value="5">5</MenuItem>
                        </TextField>
                    </Grid>

                    {/* State */}
                    <Grid item xs={4}>
                        <Typography variant="subtitle1" color="black" fontWeight="bold">State</Typography>
                        <TextField
                        select
                        fullWidth
                        placeholder="Choose state"
                        variant="outlined"
                        size="small"
                        SelectProps={{
                            IconComponent: ArrowDropDownIcon,
                        }}
                        >
                        <MenuItem value="state1">State 1</MenuItem>
                        <MenuItem value="state2">State 2</MenuItem>
                        </TextField>
                    </Grid>

                    {/* District */}
                    <Grid item xs={4}>
                        <Typography variant="subtitle1" color="black" fontWeight="bold">District</Typography>
                        <TextField
                        select
                        fullWidth
                        placeholder="Choose district"
                        variant="outlined"
                        size="small"
                        SelectProps={{
                            IconComponent: ArrowDropDownIcon,
                        }}
                        >
                        <MenuItem value="district1">District 1</MenuItem>
                        <MenuItem value="district2">District 2</MenuItem>
                        </TextField>
                    </Grid>

                    {/* No of People */}
                    <Grid item xs={4}>
                        <Typography variant="subtitle1" color="black" fontWeight="bold">No of people</Typography>
                        <TextField
                        select
                        fullWidth
                        placeholder="Select"
                        variant="outlined"
                        size="small"
                        SelectProps={{
                            IconComponent: ArrowDropDownIcon,
                        }}
                        >
                        <MenuItem value="1">1</MenuItem>
                        <MenuItem value="2">2</MenuItem>
                        <MenuItem value="3">3</MenuItem>
                        <MenuItem value="4">4</MenuItem>
                        <MenuItem value="5">5</MenuItem>
                        </TextField>
                    </Grid>

                    {/* Price */}
                    <Grid item xs={4}>
                        <Typography variant="subtitle1" color="black" fontWeight="bold">Price</Typography>
                        <TextField
                        select
                        fullWidth
                        placeholder="Choose price"
                        variant="outlined"
                        size="small"
                        SelectProps={{
                            IconComponent: ArrowDropDownIcon,
                        }}
                        >
                        <MenuItem value="price1">Price 1</MenuItem>
                        <MenuItem value="price2">Price 2</MenuItem>
                        </TextField>
                    </Grid>

                    {/* Description */}
                    <Grid item xs={12}>
                        <Typography variant="subtitle1" color="black" fontWeight="bold">Description</Typography>
                        <TextField
                        fullWidth
                        multiline
                        rows={4}
                        placeholder="Give a detailed description of property ...."
                        variant="outlined"
                        size="small"
                        />
                    </Grid>

                    {/* Features */}
                    <Grid item xs={12}>
                        <Typography variant="subtitle1" color="black" fontWeight="bold">Click to select feature</Typography>
                        <Grid container spacing={2}>
                        {features.map((feature, index) => (
                            <Grid item xs={4} key={index}>
                            <FormControlLabel
                                control={
                                <Checkbox
                                    icon={<CheckBoxOutlineBlankIcon />}
                                />
                                }
                                label={<Typography color="#212529">{feature.label}</Typography>}
                            />
                            </Grid>
                        ))}
                        </Grid>
                    </Grid>

                    {/* Go to next step button */}
                    <Grid item xs={12} sx={{ textAlign: "right" }}>
                        <Link href="/Dashboard/Listing/ChooseFile">
                            <Button
                                variant="contained"
                                color="primary"
                                sx={{
                                    background: "linear-gradient(180deg, rgb(0,119,182) 0%, rgb(27,157,240) 94.27%)",
                                }}
                            >
                                Go to next step
                            </Button>
                        </Link>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    </Box>
  );
};

export default Listing;
